import { SocialData } from "types";

// https://twitter.com/intent/follow?screen_name=ascenders_in
// https://www.facebook.com/sharer/sharer.php?u=#url

export const socialData: SocialData = {
  twitter: {
    url: "https://twitter.com/ascenders_in",
    label: "@ascenders_in",
    network: "twitter",
  },
  facebook: {
    url: "https://facebook.com/ascenders",
    label: "@ascenders",
    network: "facebook",
  },
  instagram: {
    url: "https://instagram.com/ascenders.in",
    label: "@ascenders.in",
    network: "instagram",
  },
};
