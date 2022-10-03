import { interests } from "data";

const getInterests = (interestsToGet?: string[]) =>
  interestsToGet
    ? interests.filter((_interest) => interestsToGet.includes(_interest.slug))
    : interests;

export { getInterests };
