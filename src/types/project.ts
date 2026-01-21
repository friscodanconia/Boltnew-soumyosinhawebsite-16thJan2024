// Section types for flexible project content

export type TextSection = {
  type: 'text';
  content: string;
};

export type HeadingSection = {
  type: 'heading';
  content: string;
  level?: 2 | 3;
};

export type ListSection = {
  type: 'list';
  title?: string;
  items: string[];
};

export type ImageSection = {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
};

export type VideoSection = {
  type: 'video';
  src: string;
  poster?: string;
  caption?: string;
};

export type GallerySection = {
  type: 'gallery';
  title?: string;
  images: { src: string; alt: string }[];
};

export type StatsSection = {
  type: 'stats';
  title?: string;
  items: { value: string; label: string }[];
};

export type QuoteSection = {
  type: 'quote';
  content: string;
  author?: string;
};

export type CtaSection = {
  type: 'cta';
  text: string;
  url: string;
  external?: boolean;
};

export type DividerSection = {
  type: 'divider';
};

export type Section =
  | TextSection
  | HeadingSection
  | ListSection
  | ImageSection
  | VideoSection
  | GallerySection
  | StatsSection
  | QuoteSection
  | CtaSection
  | DividerSection;

export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  thumbnail: string;
  links: {
    demo?: string;
    github?: string;
  };
  technologies: string[];
  sections: Section[];
};
