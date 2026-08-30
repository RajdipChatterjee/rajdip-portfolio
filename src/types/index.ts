export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeaturedProjectData {
  name: string;
  subtitle: string;
  description: string;
  overviewItems: string[];
  architectureItems: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Project {
  name: string;
  problem: string;
  tags: string[];
  github: string;
  demo: string | null;
  featured: boolean;
}

export interface CurrentlyStatus {
  title: string;
  company: string;
  period: string;
  statusText: string;
}

export interface ExperienceRole {
  company: string;
  title: string;
  period: string;
  type: string;
  highlights: string[];
}

export interface CaseStudy {
  title: string;
  desc: string;
}

export interface Article {
  title: string;
  preview: string;
  date: string;
}

export interface CapabilityGroup {
  area: string;
  items: string[];
}
