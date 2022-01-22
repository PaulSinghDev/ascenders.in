import { Journey } from "types";
import axios from "axios";

const API_BASE_URL: string = "http://localhost:3000";

export const getAllJourneys = async (): Promise<Journey[] | null> => {
  try {
    const res = (await axios.get(`${API_BASE_URL}/journeys`)).data as Journey[];
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getJourneyById = async (id: string): Promise<Journey | null> => {
  try {
    const res = (await axios.get(`${API_BASE_URL}/journeys`)).data as Journey[];
    const record = res.find((record: Journey) => record.id === id);
    return record ? record : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getJourneyByTitle = async (
  title: string
): Promise<Journey | null> => {
  try {
    const res = (await axios.get(`${API_BASE_URL}/journeys`)).data as Journey[];
    const record = res.find((record: Journey) => record.title === title);
    return record ? record : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};
