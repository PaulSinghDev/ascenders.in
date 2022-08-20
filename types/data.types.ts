export type Interest = {
  slug: string;
  title: string;
  description: string[];
  target: string[];
  thumbnail: string;
  gallery?: string[];
  level: "small" | "medium" | "large";
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

export interface Journey {
  id: string;
  title: string;
  content: string;
  price: PriceType;
  duration: MinMaxType;
  level: [number, number];
  locationId: string;
  interestIds: string[];
  permalink: string;
  groupSize: MinMaxType;
  thumbnail: string;
}
