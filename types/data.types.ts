export interface BasicNavLink {
  title: string;
  href: string;
  label: string;
  icon?: AvailableIcons;
}

export type Interest = {
  slug: string;
  title: string;
  description: string[];
  target: string[];
  thumbnail: string;
  gallery?: string[];
  id: string;
};

export interface SocialData {
  twitter: SocialProfile;
  facebook: SocialProfile;
  instagram: SocialProfile;
}

export type SocialProfile = {
  label: string;
  url: string;
  network: "twitter" | "facebook" | "instagram";
};

export type UnitType = "DAYS" | "PEOPLE";

export type PriceUnitType = "INR" | "GBP" | "USD" | "EUR";

export type ClimateType =
  | "WARM"
  | "COLD"
  | "HOT"
  | "SUNNY"
  | "MILD"
  | "HUMID"
  | "DRY"
  | "WET";

export type AudienceType = "FIT" | "HEALTHY" | "ANY" | "YOUNG" | "OUTGOING";

export type PriceType = {
  cost: string;
  unit: PriceUnitType;
  symbol: string;
};

export type MinMaxType = {
  min: number | string;
  max: number | string;
  unit: UnitType;
};

export type Meal =
  | "breakfast"
  | "lunch"
  | "brunch"
  | "dinner"
  | "supper"
  | "snacks"
  | "tea";

export interface ItineraryDay extends AccordionContent {
  day: number;
  meals: Meal[];
}

export interface ItineraryInterface {
  title: string;
  description: string[];
  days: ItineraryDay[];
}

export interface HealOverview {
  h: {
    title: string;
    copy: string[];
  };
  e: {
    title: string;
    copy: string[];
  };
  a: {
    title: string;
    copy: string[];
  };
  l: {
    title: string;
    copy: string[];
  };
}

export type ImageType = {
  src: string;
  alt: string;
  srcset?: string;
  caption?: string;
};

export interface Staff {
  name: string;
  role: Role;
  image: ImageType;
  slug: string;
  alias?: string;
  content: string;
  interests: Interest[];
  favourites: {
    destination: Destination;
    journey: string;
  };
}

export type Difficulty =
  | "very easy"
  | "easy"
  | "easy"
  | "medium"
  | "hard"
  | "very hard";

export type AccommodationType = "camping" | "hotel" | "homestay";
export type Accommodation = {
  type: AccommodationType[];
};

export type AccordionContent = {
  title: string;
  content: string;
  icon?: AvailableIcons;
};

export interface AccordionSection {
  title: string;
  description: string[];
  items: AccordionContent[];
}

export interface Journey {
  title: string;
  availableDates: [string, string][];
  itinerary: ItineraryInterface;
  interest: Interest[];
  tagline: string;
  staff: Staff[];
  heal: HealOverview;
  importantInformation: AccordionSection;
  duration: {
    value: number;
    measurement: "days" | "weeks";
  };
  slug: string;
  type: string;
  description: string[];
  overviewBullets: string[];
  thumbnail: string;
  inclusions: AccordionSection;
  gallery: GalleryImage[];
  level: {
    min: Difficulty;
    max?: Difficulty;
  };
  id: string;
  group: {
    min: number;
    max: number;
    measurement: "people" | "couples";
  };
  location: Destination;
  accommodation: Accommodation;
  price: {
    value: number;
    currency: "₹" | "$" | "£";
    from: number;
    measurement: "person" | "group" | "couple";
  };
}

export interface GalleryImage {
  src: string;
  srcset?: string[];
  title: string;
  tags: string[];
  alt: string;
  description: string[];
}

export type AvailableIcons =
  | "expect"
  | "essentials"
  | "fitness"
  | "plus"
  | "minus"
  | "temperature"
  | "map"
  | "safety"
  | "people"
  | "heal-h"
  | "heal"
  | "book"
  | "location"
  | "home"
  | "leaf"
  | "facebook"
  | "twitter"
  | "instagram"
  | "menu";

export interface Destination {
  title: string;
  slug: string;
  thumbnail: ImageType;
  description: string[];
  mapData: {
    lng: number;
    lat: number;
    tooltip: string;
    zoom: number;
  };
}

export const roles = [
  "founder",
  "journey-guide",
  "yoga-instructor",
  "webmaster",
  "photographer",
  "nursing-assistant",
  "social-media-manager",
] as const;
export type RoleType = typeof roles[number];
export interface Role {
  slug: RoleType;
  id: RoleType;
  label: string;
}

export interface Page {
  title: string;
  description: string;
  thumbnail: string;
  path: string;
}
