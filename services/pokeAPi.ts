import axios from "axios";
import { BASE_URL } from "@env";

export const pokeApi = axios.create({
  baseURL: BASE_URL,
});
