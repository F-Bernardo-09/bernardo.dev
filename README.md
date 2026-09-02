# Portfólio de Bernardo Alencar

Um portfólio moderno e responsivo desenvolvido com **React 19**, **TypeScript** e **Vite**. Apresenta projetos de design gráfico, UI/UX e desenvolvimento web, com suporte a múltiplos idiomas.

## 🎨 Features

- ✨ Design moderno e responsivo
- 🎯 Seções: Hero, Sobre, Trajetória, Projetos e Contato
- 🌍 Internacionalização (i18n) com suporte a português e inglês
- 🌓 Modo claro/escuro (Theme Toggle)
- ♿ Acessibilidade (aria-labels, alt text)
- ⚡ Performance otimizada com Vite
- 📱 Mobile-first approach

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Styled Components** - CSS-in-JS styling
- **React i18next** - Multi-language support
- **React Router** - Client-side routing
- **React Icons** - Icon library

## 📂 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── About/
│   ├── Button/
│   ├── Contact/
│   ├── Education/
│   ├── ExperienceSection/
│   ├── FaceIcon/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── HeroImage/
│   ├── Projects/
│   ├── ScrollToTop/
│   ├── SectionHeader/
│   └── SkillsCarousell/
├── context/                 # Contextos React
│   └── ThemeContext.tsx
├── hooks/                   # Custom React hooks
│   ├── useScrollSpy.ts
│   └── useTheme.ts
├── pages/                   # Páginas da aplicação
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ProjectsPage.tsx
│   └── NotFoundPage.tsx
├── locales/                 # Arquivos de internacionalização
│   ├── pt/
│   │   ├── common.json
│   │   ├── projects.json
│   │   └── system.json
│   └── en/
│       ├── common.json
│       ├── projects.json
│       └── system.json
├── i18n/                    # Configuração i18n
│   └── index.ts
├── constants/               # Constantes da aplicação
│   └── icons.ts
├── types/                   # Definições de tipos
│   ├── assets.d.ts
│   └── models.ts
├── utils/                   # Funções utilitárias
│   └── dateRange.ts
├── styles/                  # Estilos globais
│   └── global.css
├── App.tsx                  # Componente principal
└── main.tsx                 # Entry point
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Setup

```bash
# Clonar repositório
git clone https://github.com/F-Bernardo-09/bernardo.dev.git
cd bernardo.dev

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📝 Conteúdo

O portfólio apresenta:

- **Trajetória**: Experiência profissional e formação acadêmica
- **Projetos**: Portfolio com 12+ projetos de design e desenvolvimento
- **Tecnologias**: HTML, CSS, JavaScript, TypeScript, React, Node.js, Java, SQL
- **Redes Sociais**: Links para Behance, GitHub, LinkedIn e Instagram

## 🌐 Internacionalização

O conteúdo está centralizado em arquivos JSON organizados por idioma. Para adicionar/editar:

- Edit `src/locales/pt/common.json` para português (seção comum)
- Edit `src/locales/en/common.json` para inglês (seção comum)
- Edit `src/locales/pt/projects.json` para português (seção projetos)
- Edit `src/locales/en/projects.json` para inglês (seção projetos)
- Edit `src/locales/pt/system.json` para português (mensagens do sistema)
- Edit `src/locales/en/system.json` para inglês (mensagens do sistema)

O i18n está configurado em `src/i18n/index.ts` e pode ser utilizado nos componentes via hook `useTranslation("common")`.

## 📦 Comandos Disponíveis

```bash
npm run dev       # Iniciar servidor de desenvolvimento
npm run build     # Compilar para produção (TypeScript + Vite)
npm run preview   # Visualizar build de produção
npm run lint      # Executar ESLint
```

## 🎨 Tema (Light/Dark)

O tema da aplicação é gerenciado através do `ThemeContext` localizado em `src/context/ThemeContext.tsx`. O hook `useTheme` está separado em `src/hooks/useTheme.ts` para melhor integração com Fast Refresh do Vite.

## ♿ Acessibilidade

O projeto implementa as melhores práticas de acessibilidade:

- Aria-labels em elementos interativos
- Alt text descritivo em imagens
- Navegação por teclado
- Contraste adequado de cores
- Semântica HTML correta

## 👤 Autor

**Bernardo Alencar**

- Designer Gráfico Freelancer
- Desenvolvedor Web e UI/UX Designer
- Estudante de Análise e Desenvolvimento de Sistemas (IFPB)

### Links

- [Behance](https://www.behance.net/bernardoalencar1)
- [GitHub](https://github.com/F-Bernardo-09)
- [LinkedIn](https://www.linkedin.com/in/bernardo-alencar/)
- [Instagram](https://www.instagram.com/f.bernardo.09/)

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Última atualização**: Setembro 2026
