/* --- Experience Section --- */
export interface Role {
  id: string;
  title: string;
  period: {
    start: string;
    end: string | null;
  };
  description: string;
  ariaLabel: string;
}

export interface Company {
  id: string;
  name: string;
  logoInitial: string;
  logo: { src: string; alt: string } | null;
  link: string | null;
  roles: Role[];
}

/* --- Education --- */
export interface EducationPeriod {
  start: string;
  end: string | null;
  label: string;
}

export interface EducationItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: EducationPeriod;
  description: string;
  ariaLabel: string;
}

/* --- Projects --- */
export interface HeadingBlock {
  type: "heading";
  text: string;
  level?: 2 | 3;
}

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
  ordered?: boolean;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface GalleryBlock {
  type: "gallery";
  images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
}

export type ProjectContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | ImageBlock
  | GalleryBlock;

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  summary?: string;
  period: {
    start: string;
    end: string | null;
    label: string;
  };

  context: string;
  relevance: number;
  featured: boolean;
  status: string;
  categories: string[];
  description: string;
  content?: ProjectContentBlock[];
  tags: string[];
  image: {
    src: string;
    alt: string;
  };

  primaryLink: number | null;
  links: Array<{
    label: string;
    url: string;
    type: string;
  }>;
}
