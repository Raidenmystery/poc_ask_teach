import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 10,
  },

  textInput: {
    borderColor: "grey",
    borderWidth: 2,
    padding: 7,
    borderRadius: 10,
    backgroundColor: "#e5e5e5",
    width: 200,
  },

  submitButton: {
    backgroundColor: "#047a27",
    padding: 10,
    borderRadius: 10,
  },

  disabledSubmitButton: {
    backgroundColor: "#6c8072",
    padding: 10,
    borderRadius: 10,
  },

  textSubmitButton: {
    color: "white",
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    fontWeight: "600",
  },
});
