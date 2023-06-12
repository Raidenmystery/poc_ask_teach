import { BASE_URL } from "@env";
import axios from "axios";

export const pokeApi = axios.create({
  baseURL: BASE_URL,
});
