import { journeys } from "data";
import { Difficulty, Interest, Journey } from "../types";

const getRelatedJourneys = (
  interests: Interest[],
  location?: { label: string },
  level?: { min: Difficulty; max?: Difficulty }
) =>
  journeys.reduce((output: Journey[], journey) => {
    let interestPoints = 0;
    let levelPoints = 0;
    let locationPoints = 0;
    // is it a matching location or level
    if (location?.label && journey.location.label === location.label)
      locationPoints += 1;
    if (!!journey?.level?.min && level?.min && journey.level.min === level.min)
      levelPoints += 1;
    if (!!level?.max && level.max === journey.level.max) levelPoints += 1;
    // matching interest?
    interests.forEach((_interest) => {
      if (JSON.stringify(journey.interest).includes(JSON.stringify(_interest)))
        interestPoints += 1;
    });
    // basic algo, if any match then they are related
    // we can change in the future
    if (!!interestPoints || !!levelPoints || !!locationPoints) {
      output.push(journey);
    }
    return output;
  }, []);

export { getRelatedJourneys };
