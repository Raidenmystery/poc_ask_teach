import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";
import QRCameraPage from "./pages/QRCameraPage";
import AxiosTestPage from "./pages/AxiosTests";

const queryClient = new QueryClient();

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AxiosTest" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Form" component={FormPage} />
          <Stack.Screen name="List" component={ListPage} />
          <Stack.Screen name="QRCamera" component={QRCameraPage} />
          <Stack.Screen name="AxiosTest" component={AxiosTestPage} />
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
