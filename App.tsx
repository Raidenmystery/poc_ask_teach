import { STORYBOOK_ENABLED } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StorybookUIRoot from "./.storybook/Storybook";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";
import QRCameraPage from "./pages/QRCameraPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { StyleSheet } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  if (STORYBOOK_ENABLED === "true") return StorybookUIRoot();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AxiosTest"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Form" component={FormPage} />
          <Stack.Screen name="List" component={ListPage} />
          <Stack.Screen name="QRCamera" component={QRCameraPage} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
