import { getJourneyById, getJourneyByTitle, getAllJourneys } from "services";

describe("getJourneyById", () => {
  it("gets a journey record with the correct id", async () => {
    const journey = await getJourneyById("0");
    expect(journey).not.toBe(null);
    expect(journey?.id).toBe("0");
  });
  it("will return null if there is no record", async () => {
    const journey = await getJourneyById("9999999");
    expect(journey).toBe(null);
  });
});

describe("getJourneyByTitle", () => {
  it("gets a journey record with the correct title", async () => {
    const journey = await getJourneyByTitle("Goa Sunset");
    expect(journey).not.toBe(null);
    expect(journey?.title).toBe("Goa Sunset");
  });
  it("will return null if there is no record", async () => {
    const journey = await getJourneyById("Doesn't Exist");
    expect(journey).toBe(null);
  });
});

describe("getAllJourneys", () => {
  it("will return an array of journeys", async () => {
    const journeys = await getAllJourneys();
    expect(typeof journeys).toBe("object");
    expect(journeys?.length).toBeGreaterThan(0);
  });
});
