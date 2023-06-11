import { StatusBar } from "expo-status-bar";
import { useFormik } from "formik";
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from "react-native";

import { validationSchema } from "./FormPage.constants";
import { alertPrompt } from "./FormPage.functions";
import { styles } from "./FormPage.styles";

export default function FormPage() {
  // --- Hooks -----------------------------------------------------------------
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      text: "",
      numeric: undefined,
      email: "",
    },
    onSubmit: values =>
      alertPrompt(
        `Text: ${values?.text} \n Numeric: ${values?.numeric} \n Email: ${values?.email}`
      ),
    validationSchema,
  });
  // --- END: Hooks ------------------------------------------------------------

  // --- Local state -----------------------------------------------------------
  const haveErrors = Boolean(errors?.email || errors?.numeric || errors?.text);
  // --- END: Local state ------------------------------------------------------

  // --- Refs ------------------------------------------------------------------
  // --- END: Refs -------------------------------------------------------------

  // --- Redux -----------------------------------------------------------------
  // --- END: Redux ------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers -----------------------------------------------------
  const onPress = (e: any) => handleSubmit?.(e);
  // --- END: Data and handlers ------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <Text>Form Page</Text>
      <TextInput
        placeholder="Regular Text"
        inputMode="text"
        style={styles.textInput}
        onChangeText={handleChange("text")}
        returnKeyType="next"
      />
      {errors?.text && <Text style={styles.errorText}>{errors?.text}</Text>}
      <TextInput
        placeholder="Numeric Input"
        inputMode="numeric"
        style={styles.textInput}
        onChangeText={handleChange("numeric")}
        returnKeyType="next"
      />
      {errors?.numeric && (
        <Text style={styles.errorText}>{errors?.numeric}</Text>
      )}
      <TextInput
        placeholder="Email Input"
        inputMode="email"
        style={styles.textInput}
        onChangeText={handleChange("email")}
        returnKeyType="send"
      />
      {errors?.email && <Text style={styles.errorText}>{errors?.email}</Text>}

      <TouchableHighlight
        style={haveErrors ? styles.disabledSubmitButton : styles.submitButton}
        activeOpacity={0.6}
        onPress={onPress}
        disabled={haveErrors}>
        <Text style={styles.textSubmitButton}>Submit</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
