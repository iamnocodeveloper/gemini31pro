export interface NavItem {
  label: string;
  href: string;
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}
