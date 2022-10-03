import axios from "axios";
import { Interest } from "types";

const API_BASE_URL: string = "http://localhost:3000";

export const getAllInterests = async (): Promise<Interest[] | null> => {
  try {
    const res = (await axios.get(`${API_BASE_URL}/interests`))
      .data as Interest[];
    return res || null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getInterestById = async (id: string): Promise<Interest | null> => {
  try {
    const res = (await axios.get(`${API_BASE_URL}/interests`))
      .data as Interest[];
    const interest = res.find((i) => i.id === id);
    return interest || null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getInterestByName = async (
  name: string
): Promise<Interest | null> => {
  try {
    const res = (await axios.get(`${API_BASE_URL}/interests`))
      .data as Interest[];
    const interest = res.find((i) => i.title === name);
    return interest || null;
  } catch (e) {
    console.log(e);
    return null;
  }
};
