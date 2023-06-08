import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { STORYBOOK_ENABLED } from "@env";

import StorybookUIRoot from './.storybook/Storybook';

import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';
import QRCameraPage from './pages/QRCameraPage';
import AxiosTestPage from './pages/AxiosTests';

export default function App() {
  const Stack = createNativeStackNavigator();

  if(Boolean(STORYBOOK_ENABLED === 'true'))
    return StorybookUIRoot();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Form" component={FormPage} />
        <Stack.Screen name="List" component={ListPage} />
        <Stack.Screen name="QRCamera" component={QRCameraPage} />
        <Stack.Screen name="AxiosTest" component={AxiosTestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



/* export { StorybookUIRoot as default }; */