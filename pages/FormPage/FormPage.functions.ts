import { Alert } from "react-native";

export const alertPrompt = (text: string) =>
  Alert.alert("Information", text, [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
