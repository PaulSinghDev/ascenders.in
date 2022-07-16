export interface LocalStorageInterface {
  get: (key: string) => string | null;
  set: (key: string, value: string) => string | null;
  remove: (key: string) => void;
  clear: () => void;
}

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

export type PriceUnitType = "INR" | "GBP";

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

export interface Interest {
  id: string;
  name: string;
  content: "";
  targetAudience: AudienceType[];
  idealClimate: ClimateType[];
  locationIds: string[];
  thumbnail: string;
}
