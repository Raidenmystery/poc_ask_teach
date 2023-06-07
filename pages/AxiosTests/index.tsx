import { useEffect } from "react";
import { Text, View } from 'react-native';
import { styles } from './AxiosTests.styles';
import { pokeApi } from "../../services/pokeAPi";

export default function AxiosTests() {

  let pokemon: any = {};

  const pokemons = () => {
    pokeApi.get(`pokemon/ditto`).then((resp:any) => {
      pokemon = resp.data;
      console.log(resp.data.abilities[0])
    });
  };

  useEffect(() => {
    pokemons();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{pokemon?.abilities?.[0]}</Text>
    </View>
  );
}
