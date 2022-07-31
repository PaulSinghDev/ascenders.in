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
