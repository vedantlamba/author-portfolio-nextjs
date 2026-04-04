export interface ContentImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ContentLink {
  label: string;
  href: string;
}

export interface SeoContent {
  title: string;
  description: string;
}
