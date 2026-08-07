# Portfólio de Bernardo Alencar

Um portfólio moderno e responsivo desenvolvido com **React**, **TypeScript** e **Vite**. Apresenta projetos de design gráfico, UI/UX e desenvolvimento web, com suporte a múltiplos idiomas.

## 🎨 Features

- ✨ Design moderno e responsivo
- 🎯 Seções: Hero, Sobre, Trajetória, Projetos e Contato
- 🌍 Internacionalização (i18n) com suporte a português e inglês
- 🌓 Modo claro/escuro (Theme Toggle)
- ♿ Acessibilidade (aria-labels, alt text)
- ⚡ Performance otimizada com Vite
- 📱 Mobile-first approach

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Styling
- **i18n** - Multi-language support

## 🌓 Modo claro/escuro (Theme Toggle)

- ♿ Acessibilidade (aria-labels, alt text)
- ⚡ Performance otimizada com Vite
- 📱 Mobile-first approach

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Styling
- **i18n** - Multi-language support

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Education/
│   ├── Projects/
│   ├── Contact/
│   ├── Footer/
│   └── ...
├── locales/             # Arquivos de internacionalização
│   ├── pt-br.json
│   ├── en-us.json
│   └── i18n.ts
├── context/             # Contextos React
│   └── LanguageContext.tsx
├── styles/              # Estilos globais
│   └── global.css
├── types/               # Definições de tipos
│   └── index.d.ts
└── App.tsx              # Componente principal
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Setup

```bash
# Clonar repositório
git clone https://github.com/F-Bernardo-09/bernardo.dev.git
cd bernardo.dev/react-app

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

O conteúdo está centralizado em arquivos JSON. Para adicionar/editar:

- Edit `src/locales/pt-br.json` para português
- Edit `src/locales/en-us.json` para inglês

## 📦 Comandos Disponíveis

```bash
npm run dev       # Iniciar servidor de desenvolvimento
npm run build     # Compilar para produção
npm run preview   # Visualizar build de produção
npm run lint      # Executar ESLint
```

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

**Última atualização**: Abril 2026
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
