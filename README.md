# 🌄 Brclick - Descubra o Brasil

Brclick é uma plataforma moderna de descoberta de lugares turísticos brasileiros, desenvolvida com Next.js 16 e React 19. O projeto oferece uma experiência intuitiva para explorar destinos, salvar favoritos e planejar viagens por todo o Brasil.

## ✨ Funcionalidades

- **🔍 Busca Inteligente**: Encontre lugares por nome, região ou categoria
- **🗺️ Exploração por Categorias**: Cachoeiras, trilhas, gastronomia, cultura e muito mais
- **⭐ Sistema de Favoritos**: Salve seus lugares preferidos para consultar depois
- **🏷️ Filtros Avançados**: Filtre por região, interesses (casal, aventura, low cost, etc.)
- **📱 Design Responsivo**: Interface adaptada para desktop, tablet e mobile
- **🔐 Autenticação**: Sistema de login e perfil de usuário
- **📍 Detalhes Completos**: Informações detalhadas de cada lugar com galeria de imagens

## 🚀 Tecnologias

### Core
- **Next.js 16.0.10** - Framework React com App Router
- **React 19.2.0** - Biblioteca UI
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4.1.9** - Estilização

### UI Components
- **Radix UI** - Componentes acessíveis e customizáveis
- **shadcn/ui** - Sistema de componentes
- **Lucide React** - Ícones
- **Sonner** - Notificações toast

### Formulários & Validação
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### Outros
- **date-fns** - Manipulação de datas
- **Embla Carousel** - Carrosséis de imagens
- **Next Themes** - Gerenciamento de temas
- **Recharts** - Gráficos e visualizações

## 📁 Estrutura do Projeto

```
projeto/
├── app/                          # App Router do Next.js
│   ├── (em-construcao)/          # Páginas em desenvolvimento
│   ├── explorar/                 # Página de exploração de lugares
│   ├── favoritos/                # Página de favoritos
│   ├── lugares/[slug]/           # Detalhes de lugares (dinâmico)
│   ├── perfil/                   # Página de perfil do usuário
│   ├── home.tsx                  # Página inicial
│   ├── layout.tsx                # Layout principal
│   └── globals.css               # Estilos globais
│
├── components/                   # Componentes React
│   ├── ui/                       # Componentes base (shadcn/ui)
│   ├── auth-modal.tsx            # Modal de autenticação
│   ├── filters-panel.tsx         # Painel de filtros
│   ├── navbar.tsx                # Barra de navegação
│   ├── place-card.tsx            # Card de lugar
│   ├── place-detail.tsx          # Detalhes do lugar
│   ├── search-bar.tsx            # Barra de busca
│   └── ...
│
├── contexts/                     # Contextos React
│   ├── auth-context.tsx          # Contexto de autenticação
│   └── favorites-context.tsx     # Contexto de favoritos
│
├── data/                         # Dados estáticos
│   ├── categories.ts             # Categorias de lugares
│   ├── interests.ts              # Interesses/tags
│   └── places.ts                 # Database de lugares
│
├── hooks/                        # Custom hooks
│   ├── use-mobile.ts             # Hook para detecção mobile
│   └── use-toast.ts              # Hook para notificações
│
├── lib/                          # Utilitários
│   └── utils.ts                  # Funções auxiliares
│
├── k8s/                          # Kubernetes configs
│   └── deployment.yaml           # Deployment configuration
│
├── public/                       # Arquivos estáticos
│   └── images/                   # Imagens do projeto
│
└── scripts/                      # Scripts utilitários
    └── prod.js                   # Script de produção
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# Clone o repositório
git clone <repository-url>

# Entre no diretório
cd projeto

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
# Crie o build de produção
pnpm build

# Inicie o servidor de produção
pnpm start
```

### Script de Produção Customizado

```bash
# Execute o script de produção personalizado
pnpm prod
```

## 🐳 Docker & Kubernetes

O projeto inclui configurações para containerização e orquestração:

- **Dockerfile**: Configuração para criar imagem Docker
- **k8s/deployment.yaml**: Configuração para deploy no Kubernetes

### Build Docker

```bash
docker build -t brclick .
```

## 📊 Estrutura de Dados

### Place (Lugar)

```typescript
interface Place {
  id: string;
  name: string;
  slug: string;
  description: string;
  region: "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul";
  state: string;
  city: string;
  categories: string[];
  interests: string[];
  latitude: number;
  longitude: number;
  address: string;
  coverImage: string;
  gallery: string[];
  popularityScore: number;
}
```

### Categorias Disponíveis

- 🌊 Cachoeiras
- ⛰️ Trilhas
- 🍴 Gastronomia
- 🎨 Cultura
- 🏛️ História
- 🌲 Ecoturismo
- 🧭 Aventura
- 🚜 Turismo Rural
- 🏖️ Praias

### Regiões do Brasil

- Norte
- Nordeste
- Centro-Oeste
- Sudeste
- Sul

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:

- **Tailwind CSS** para estilização
- **Componentes Radix UI** para funcionalidades complexas
- **Sistema de cores** customizado com suporte a dark mode
- **Animações CSS** com tw-animate-css
- **Gradientes** personalizados para headings

## 🔒 Autenticação

Sistema de autenticação implementado com:
- Context API para gerenciamento de estado
- Modal de login/registro
- Persistência de sessão

## ⭐ Sistema de Favoritos

- Adicione/remova lugares favoritos
- Página dedicada para visualizar favoritos
- Persistência local dos favoritos

## 🌐 Páginas Principais

- **/** - Home com destaques e categorias
- **/explorar** - Exploração completa com filtros
- **/favoritos** - Lugares salvos como favoritos
- **/lugares/[slug]** - Detalhes de cada lugar
- **/perfil** - Perfil do usuário

## 📝 Scripts Disponíveis

```json
{
  "dev": "Inicia servidor de desenvolvimento",
  "build": "Cria build de produção",
  "start": "Inicia servidor de produção",
  "lint": "Executa linter",
  "prod": "Script customizado de produção"
}
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto é privado e proprietário.

## 🚧 Status do Projeto

O projeto está em desenvolvimento ativo. Algumas funcionalidades podem estar em construção (veja a rota `/em-construcao`).

---

Desenvolvido com ❤️ para descobrir as maravilhas do Brasil
