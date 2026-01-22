#!/bin/bash

# Define secrets e vars no repositório usando o GitHub CLI (gh)
# Certifique-se de que o GitHub CLI está autenticado e as variáveis estão definidas no ambiente

REPO="hcode-brclick/app"

SECRET_VAR="DIGITALOCEAN_ACCESS_TOKEN"
REQUIRED_VARS=(
    REGISTRY
    CONTAINER_NAME_ADMIN
    K8S_CLUSTER_ID
    CONTAINER_NAME_BACKEND
    CONTAINER_NAME_WEBSITE
)

# Solicita o secret se não estiver definido
if [ -z "${!SECRET_VAR}" ]; then
    read -rp "Digite o valor para $SECRET_VAR: " $SECRET_VAR
    export $SECRET_VAR
fi

# Solicita as variáveis se não estiverem definidas
for VAR in "${REQUIRED_VARS[@]}"; do
    if [ -z "${!VAR}" ]; then
        read -rp "Digite o valor para $VAR: " $VAR
        export $VAR
    fi
done

# Verifica se todas estão definidas
if [ -z "${!SECRET_VAR}" ]; then
    echo "Erro: a variável de ambiente $SECRET_VAR não está definida."
    exit 1
fi

for VAR in "${REQUIRED_VARS[@]}"; do
    if [ -z "${!VAR}" ]; then
        echo "Erro: a variável de ambiente $VAR não está definida."
        exit 1
    fi
done

# Define o secret
gh secret set "$SECRET_VAR" --repo "$REPO" --body "${!SECRET_VAR}"

# Define as vars
for VAR in "${REQUIRED_VARS[@]}"; do
    gh variable set "$VAR" --repo "$REPO" --body "${!VAR}"
done