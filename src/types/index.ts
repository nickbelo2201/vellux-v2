export interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
}

export interface HeroFeatureBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductTab {
  id: string;
  label: string;
  heading: string;
  description: string;
  icon?: React.ReactNode;
}

export interface IntegrationCard {
  name: string;
  logoSrc?: string;
  logoSvg?: React.ReactNode;
  color?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  handle: string;
  avatarSrc: string;
  company?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}
