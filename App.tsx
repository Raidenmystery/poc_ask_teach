import { STORYBOOK_ENABLED } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StorybookUIRoot from "./.storybook/Storybook";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";
import QRCameraPage from "./pages/QRCameraPage";

export default function App() {
  const Stack = createNativeStackNavigator();

  if (STORYBOOK_ENABLED === "true") return StorybookUIRoot();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Form" component={FormPage} />
        <Stack.Screen name="List" component={ListPage} />
        <Stack.Screen name="QRCamera" component={QRCameraPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
