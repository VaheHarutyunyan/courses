import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import { Course } from "../types/types";

const API_URL = "https://logiclike.com/docs/courses.json";

export async function getCourses(): Promise<AxiosResponse<Course[]>> {
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: API_URL,
  };

  try {
    const response: AxiosResponse<Course[]> = await axios(requestConfig);
    return response;
  } catch (err) {
    throw new Error("error");
  }
}
