import { spawn } from 'child_process';

const app = 'frontend';
const branchName = `production-${app}`;

const run = (binary, command, collect = false, cwd = process.cwd()) => {
  const args = [command];
  const options = {
    cwd,
    stdio: collect ? 'pipe' : 'inherit',
    shell: true,
  };
  return new Promise((resolve, reject) => {
    const child = spawn(binary, [...args], options);
    if (collect) {
      child.stdout.on('data', (data) =>
        resolve(data.toString().replace(/\r\n|\n/, ''))
      );
    }
    child.on('close', (code) => {
      if (code === 0) {
        resolve(null);
      } else {
        reject();
      }
    });
  });
};

const branchExistsRemote = async (branch) => {
  try {
    const result = await run('git', `ls-remote --heads origin ${branch}`, true);
    return !!result;
  } catch {
    return false;
  }
};

const main = async () => {
  console.info('Starting deployment');

  const currentBranch = await run('git', 'rev-parse --abbrev-ref HEAD', true);

  console.info('Checking for uncommitted changes');
  const changes = await run('git', 'status --porcelain', true);

  if (changes) {
    console.error('\x1b[31m====================================\x1b[0m');
    console.error('\x1b[31mUncommitted changes found\x1b[0m');
    console.error('\x1b[31m====================================\x1b[0m');
    return;
  }

  const exists = await branchExistsRemote(branchName);
  if (!exists) {
    console.info(`Remote branch ${branchName} does not exist. Creating...`);
    await run('git', `checkout -b ${branchName}`);
    await run('git', `push origin ${branchName}`);
    await run('git', `checkout ${currentBranch}`);
  }

  await run('git', `pull origin ${branchName}`);
  console.info('Checking out branch');
  await run('git', `checkout ${branchName}`);
  console.info('Pulling latest changes');
  await run('git', `pull origin ${branchName}`);
  console.info(`Merging ${currentBranch}`);
  await run('git', `merge ${currentBranch}`);
  console.info('Pushing to origin');
  await run('git', `push origin ${branchName}`);
  console.info(`Checking out ${currentBranch}`);
  await run('git', `checkout ${currentBranch}`);
  console.info('\x1b[32mCheckout ok\x1b[0m');
  await run('git', `push origin ${currentBranch}`);
};

main()
  .then(() => console.log('Done'))
  .catch(() => console.error('Failed'));
