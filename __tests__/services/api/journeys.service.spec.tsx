import { getJourneyById, getJourneyByTitle, getAllJourneys } from "services";
import DB from "db.json";
import axios from "axios";
import { Journey } from "types";

const JOURNEYS: Journey[] = [...DB.journeys] as Journey[];

jest.mock("axios", () => {
  const actual = jest.requireActual("axios");
  return { ...actual, get: jest.fn() };
});

(axios.get as jest.Mock).mockResolvedValue({ data: [...JOURNEYS] });

describe("getJourneyById", () => {
  it("gets a journey record with the correct id", async () => {
    const journey = await getJourneyById(JOURNEYS[0].id);
    expect(journey).not.toBe(null);
    expect(journey).toEqual(JOURNEYS[0]);
  });
  it("will return null if there is no record", async () => {
    const journey = await getJourneyById("9999999");
    expect(journey).toBe(null);
  });
});

describe("getJourneyByTitle", () => {
  it("gets a journey record with the correct title", async () => {
    const journey = await getJourneyByTitle(JOURNEYS[0].title);
    expect(journey).not.toBe(null);
    expect(journey).toEqual(JOURNEYS[0]);
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
    expect(journeys).toEqual(JOURNEYS);
  });
});
