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

export type UnitType = "INR" | "GBP" | "DAYS" | "PEOPLE";

export type PriceType = MinMaxType & {
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
