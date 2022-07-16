import { getAllInterests, getInterestById, getInterestByName } from "services";
import DB from "db.json";
import axios from "axios";
import { Interest } from "types";

const INTERESTS: Interest[] = [...DB.interests] as Interest[];

jest.mock("axios", () => {
  const actual = jest.requireActual("axios");
  return { ...actual, get: jest.fn() };
});

(axios.get as jest.Mock).mockResolvedValue({ data: [...INTERESTS] });

describe("getInterestById", () => {
  it("gets a interest record with the correct id", async () => {
    const interest = await getInterestById(INTERESTS[0].id);
    expect(interest).not.toBe(null);
    expect(interest).toEqual(INTERESTS[0]);
  });
  it("will return null if there is no record", async () => {
    const interest = await getInterestById("9999999");
    expect(interest).toBe(null);
  });
});

describe("getInterestByTitle", () => {
  it("gets a interest record with the correct title", async () => {
    const interest = await getInterestByName(INTERESTS[0].name);
    expect(interest).not.toBe(null);
    expect(interest).toEqual(INTERESTS[0]);
  });
  it("will return null if there is no record", async () => {
    const interest = await getInterestById("Doesn't Exist");
    expect(interest).toBe(null);
  });
});

describe("getAllInterests", () => {
  it("will return an array of interests", async () => {
    const interests = await getAllInterests();
    expect(typeof interests).toBe("object");
    expect(interests?.length).toBe(INTERESTS.length);
    expect(interests).toEqual(INTERESTS);
  });
});
