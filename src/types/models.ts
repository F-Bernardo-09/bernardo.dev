/* --- Experience Section --- */
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
export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
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
