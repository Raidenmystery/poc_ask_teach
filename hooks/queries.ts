import axios from "axios";
import { useQuery } from "react-query";

function useGetValues() {
  const data = useQuery(
    "data",
    async () => {
      const result = {};
      /* const {
        data: { result },
      } = await fetchCurrency() */
      return result;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return data;
}

function usePokemonData(name: string) {
  return useQuery(["pokemon", name], async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
    );
    return response.data;
  });
}

export { useGetValues, usePokemonData };
