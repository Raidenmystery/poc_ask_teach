import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './FormPage.styles';

export default function FormPage() {
  return (
    <View style={styles.container}>
      <Text>Form Page</Text>
      <StatusBar style="auto" />
    </View>
  )
}