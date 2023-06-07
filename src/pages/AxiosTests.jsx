import React, { useEffect } from "react";
import { pokeApi } from "../api/pokeAPi";
import { BASE_URL } from "@env";

export default function AxiosTests() {
  const pokemons = () => {
    pokeApi.get(`pokemon/ditto`).then((resp) => console.log(resp.data.abilities[0]));
  };

  useEffect(() => {
    pokemons();
  }, []);

  return "";
}
