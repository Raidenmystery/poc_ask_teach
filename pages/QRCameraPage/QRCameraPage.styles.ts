import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barCodeBox: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
  },
  scanner: {
    height: 400,
    width: 400,
  },
  mainText: {
    fontSize: 16,
    margin: 20,
  },
  margin10: {
    margin: 10,
  },
});
