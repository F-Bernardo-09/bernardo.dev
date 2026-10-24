# Bernardo Alencar — Portfólio

Portfólio pessoal bilíngue (português e inglês) de Bernardo Alencar, desenvolvedor web e designer gráfico. Reúne projetos de identidade visual, UI/UX e desenvolvimento front-end, além de formação, experiência e ferramentas.

**Site:** [bernardo-alencar.dev](https://bernardo-alencar.dev)

## Sumário

- [Visão geral](#visão-geral)
- [Stack](#stack)
- [Primeiros passos](#primeiros-passos)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Scripts](#scripts)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Internacionalização](#internacionalização)
- [Conteúdo dos projetos](#conteúdo-dos-projetos)
- [Formulário de contato](#formulário-de-contato)
- [SEO](#seo)
- [Acessibilidade](#acessibilidade)
- [Deploy e segurança](#deploy-e-segurança)
- [Autor](#autor)

## Visão geral

- Aplicação de página única (SPA) com rotas localizadas por idioma (`/pt` e `/en`).
- Páginas: início, projetos, detalhe de projeto e sobre (formação, experiência e ferramentas).
- Tema claro e escuro, com preferência do sistema como padrão e escolha salva no navegador.
- Menu lateral em telas pequenas, com bloqueio de rolagem e fechamento ao redimensionar.
- Destaque da seção ativa na navegação da página inicial por scroll spy.
- Imagens com carregamento preguiçoso e placeholder animado.
- Formulário de contato com campo honeypot contra envios automatizados.
- Animações de entrada que respeitam `prefers-reduced-motion`.

## Stack

| Área                | Tecnologias                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| Interface           | React 19, TypeScript 5.9                                                |
| Build               | Vite 8                                                                  |
| Estilos             | styled-components 6 e variáveis CSS globais                             |
| Roteamento          | React Router 7                                                          |
| Internacionalização | i18next e react-i18next                                                 |
| Ícones              | React Icons                                                             |
| Formulário          | Web3Forms                                                               |
| Qualidade           | ESLint 9 com typescript-eslint e plugins de React Hooks e React Refresh |
| Hospedagem          | Vercel                                                                  |

## Primeiros passos

### Pré-requisitos

- Node.js 20.19 ou superior (o arquivo `.nvmrc` indica a versão 22)
- npm

### Instalação

```bash
git clone https://github.com/F-Bernardo-09/bernardo.dev.git
cd bernardo.dev
npm install
cp .env.example .env
npm run dev
```

O servidor de desenvolvimento fica disponível em `http://localhost:5173`.

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha os valores:

| Variável                    | Descrição                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Chave de acesso do [Web3Forms](https://web3forms.com), usada no envio do formulário |

O arquivo `.env` está no `.gitignore` e não deve ser versionado. Como as variáveis `VITE_*` são embutidas no bundle, use apenas chaves públicas.

## Scripts

| Comando           | Descrição                                                          |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento                               |
| `npm run build`   | Verifica os tipos (`tsc -b`) e gera o build de produção em `dist/` |
| `npm run preview` | Serve localmente o build de produção                               |
| `npm run lint`    | Executa o ESLint                                                   |

## Estrutura do projeto

```
.
├── public/                    # Favicons, manifest, robots.txt, sitemap.xml, og-image e imagens dos projetos
├── src/
│   ├── assets/                # Imagens importadas pelos componentes
│   ├── components/
│   │   ├── About/
│   │   ├── AnimatedArrow/
│   │   ├── Button/
│   │   ├── Contact/           # Seção e formulário de contato
│   │   ├── Education/
│   │   ├── ErrorBoundary/
│   │   ├── ExperienceSection/
│   │   ├── FaceIcon/
│   │   ├── Footer/
│   │   ├── Header/            # Navegação, menu mobile, tema e idioma
│   │   ├── Hero/
│   │   ├── HeroImage/
│   │   ├── LazyImage/         # Imagem com carregamento preguiçoso e skeleton
│   │   ├── Projects/          # Listagem, filtro, prévia e página de detalhe
│   │   ├── SEO/
│   │   ├── ScrollToTop/
│   │   ├── SectionHeader/
│   │   ├── SocialLinks/
│   │   └── ToolsShowcase/
│   ├── constants/
│   ├── context/               # ThemeContext
│   ├── hooks/                 # useBodyScrollLock, useHeaderHeight, useScrollSpy, useTheme
│   ├── i18n/                  # Configuração do i18next
│   ├── locales/
│   │   ├── pt/                # Textos em português
│   │   └── en/                # Textos em inglês
│   ├── pages/                 # HomePage, AboutPage, ProjectsPage, NotFoundPage
│   ├── styles/                # global.css (variáveis de design e temas)
│   ├── types/                 # Modelos e declarações de tipos
│   ├── utils/                 # dateRange, localizedPath, scrollToSection
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── eslint.config.js
├── index.html
├── vercel.json                # Cabeçalhos de segurança e rewrite da SPA
└── vite.config.ts
```

## Rotas

Todas as rotas existem com prefixo de idioma. O português é o padrão quando não há prefixo.

| Rota                                   | Página                |
| -------------------------------------- | --------------------- |
| `/pt`, `/en`                           | Início                |
| `/pt/projects`, `/en/projects`         | Projetos              |
| `/pt/projects/:id`, `/en/projects/:id` | Detalhe de um projeto |
| `/pt/about`, `/en/about`               | Sobre                 |
| `*`                                    | Página não encontrada |

O helper `localizedPath` (`src/utils/localizedPath.ts`) monta os caminhos com o prefixo do idioma e deve ser usado em links internos.

## Internacionalização

Os textos ficam em arquivos JSON por idioma e por namespace, em `src/locales/<idioma>/<namespace>.json`. A configuração em `src/i18n/index.ts` carrega todos os arquivos automaticamente com `import.meta.glob`, então um novo namespace só precisa existir nas duas pastas.

Namespaces disponíveis: `about`, `contact`, `education`, `experience`, `footer`, `header`, `hero`, `projects`, `projectsUi`, `seo`, `systemErrors`, `systemUi` e `tools`.

```tsx
const { t } = useTranslation("header");
t("nav.projects.label");
```

O idioma ativo segue o prefixo da URL, e o `<html lang>` é atualizado a cada troca. Ao adicionar ou alterar um texto, mantenha as mesmas chaves em `pt` e `en`.

## Conteúdo dos projetos

Os projetos ficam em `src/locales/<idioma>/projects.json`, na lista `items`. Cada item tem identificador, título, resumo, período, status, categorias, imagem e um corpo de conteúdo composto por blocos tipados (definidos em `src/types/models.ts`) que a página de detalhe renderiza em `ProjectContent`.

Para adicionar um projeto:

1. Inclua o item nos dois arquivos `projects.json` (`pt` e `en`), com o mesmo `id`.
2. Adicione a imagem em `public/assets/projects/` e referencie o caminho no item.
3. O card, o filtro por categoria e a rota `/projects/:id` passam a usar o novo item.

## Formulário de contato

O formulário em `src/components/Contact/ContactForm.tsx` envia os dados para a API do Web3Forms. Um campo honeypot (`botcheck`) descarta envios automatizados, e o estado do envio (`idle`, `sending`, `success` e `error`) é comunicado ao usuário com `role="status"` e `role="alert"`.

## SEO

- O componente `SEO` atualiza título, descrição, URL canônica, Open Graph, Twitter Card e links `hreflang` conforme a rota e o idioma.
- Os textos de SEO ficam no namespace `seo`.
- `public/sitemap.xml` e `public/robots.txt` descrevem as páginas indexáveis.
- `index.html` traz os metadados padrão e os dados estruturados (JSON-LD) da pessoa.

## Acessibilidade

- Rótulos `aria-label` nos elementos interativos e texto alternativo nas imagens.
- Campos do formulário com rótulos associados e foco visível.
- Menu mobile com `aria-expanded` e rótulo que muda entre abrir e fechar.
- Animações desativadas quando o usuário prefere movimento reduzido.

## Deploy e segurança

O projeto está configurado para a Vercel. O `vercel.json` define:

- **Rewrite da SPA:** direciona as rotas para `index.html`, preservando os arquivos estáticos.
- **Cabeçalhos de segurança:** `Content-Security-Policy` (liberando apenas Web3Forms e Google Fonts), `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy`.

Ao integrar um novo serviço externo (scripts, fontes, APIs ou iframes), atualize a política de CSP.

Configure a variável `VITE_WEB3FORMS_ACCESS_KEY` no painel do projeto antes do build.

## Autor

**Bernardo Alencar** — Desenvolvedor Web, Designer Gráfico, UI & UX Design. Estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal do Sertão Paraibano (Campus Cajazeiras).

- [GitHub](https://github.com/F-Bernardo-09)
- [LinkedIn](https://www.linkedin.com/in/bernardo-alencar/)
- [Behance](https://www.behance.net/bernardoalencar1)
- [Instagram](https://www.instagram.com/f.bernardo.09/)
