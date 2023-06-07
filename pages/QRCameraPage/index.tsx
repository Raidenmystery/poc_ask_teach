import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './QRCameraPage.styles';

export default function QRCameraPage() {
  return (
    <View style={styles.container}>
      <Text>QRCamera Page</Text>
      <StatusBar style="auto" />
    </View>
  )
}