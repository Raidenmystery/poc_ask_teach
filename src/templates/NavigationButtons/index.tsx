import { TouchableHighlight, View, Text } from "react-native";

import { styles } from "./NavigationButtons.styles";

export default function NavigationButtons({
  navigation,
  type,
}: {
  navigation: any;
  type: "Form" | "QRCamera" | "List";
}) {
  // --- Hooks ---------------------------------------------------------------------------------
  // --- END: Hooks ---------------------------------------------------------------------------

  // --- Local state ---------------------------------------------------------------------------
  const labels =
    type === "Form"
      ? ["List", "QRCamera"]
      : type === "QRCamera"
      ? ["List", "Form"]
      : ["Form", "QRCamera"];
  // --- END: Local state ----------------------------------------------------------------------

  // --- Refs ----------------------------------------------------------------------------------
  // --- END: Refs -----------------------------------------------------------------------------

  // --- Redux ---------------------------------------------------------------------------------
  // --- End: Redux ----------------------------------------------------------------------------

  // --- Side effects --------------------------------------------------------------------------
  // --- END: Side Effects ---------------------------------------------------------------------

  // --- Data and handlers ---------------------------------------------------------------------
  // --- End: Data and handlers ----------------------------------------------------------------

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.buttonStyles}
        activeOpacity={0.6}
        onPress={() => navigation?.navigate(labels?.[0])}>
        <Text style={styles.textButton}>{`Go to ${labels?.[0]}`}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.buttonStyles}
        activeOpacity={0.6}
        onPress={() => navigation?.navigate(labels?.[1])}>
        <Text style={styles.textButton}>{`Go to ${labels?.[1]}`}</Text>
      </TouchableHighlight>
    </View>
  );
}
