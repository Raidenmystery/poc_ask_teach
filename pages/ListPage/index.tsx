import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { styles } from "./ListPage.styles";

export default function ListPage() {
  return (
    <View style={styles.container}>
      <Text>List Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
