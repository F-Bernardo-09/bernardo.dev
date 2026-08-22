declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

/* --- Experiência Profissional --- */
export interface Role {
  id: string;
  title: string;
  period: {
    start: string;
    end: string | null;
  };
  ariaLabel: string;
}

export interface Company {
  id: string;
  name: string;
  logoInitial: string;
  logo: { src: string; alt: string } | null;
  link: string | null;
  summary: string;
  roles: Role[];
}

/* --- Variáveis de ambiente --- */
interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
