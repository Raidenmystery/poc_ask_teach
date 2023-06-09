import { Text, View } from "react-native";
import { useQuery } from "react-query";
import { styles } from "./AxiosTests.styles";

import { pokeApi } from "../../services/pokeAPi";

export default function AxiosTests() {
  const { isLoading, data, isError, error } = useQuery(
    "pokemon-list",
    () => {
      return pokeApi.get(`pokemon`);
    },
    {
      staleTime: 30000, //if the data dont change often, the data stays the same for 30 secs. prevents unnecesaries fetchs
    }
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>{(error as any).message || ""}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data?.data.results.map((pokemon: any) => {
        if (pokemon.name) {
          return <Text>{pokemon.name}</Text>;
        }
      })}
    </View>
  );
}
