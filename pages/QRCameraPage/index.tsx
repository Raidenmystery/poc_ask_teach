import { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import Paragraph from "../../src/atoms/Paragraph/index";

import { styles } from "./QRCameraPage.styles";

export default function QRCameraPage() {
  // --- Hooks ---------------------------------------------------------------------------------
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  // --- END: Hooks ---------------------------------------------------------------------------

  // --- Local state ---------------------------------------------------------------------------
  // --- END: Local state ----------------------------------------------------------------------

  // --- Refs ----------------------------------------------------------------------------------
  // --- END: Refs -----------------------------------------------------------------------------

  // --- Redux ---------------------------------------------------------------------------------
  // --- End: Redux ----------------------------------------------------------------------------

  // --- Side effects --------------------------------------------------------------------------
  useEffect(() => {
    setScanned(false);
    askForCameraPermission();
  }, []);
  // --- END: Side Effects ---------------------------------------------------------------------

  // --- Data and handlers ---------------------------------------------------------------------
  const askForCameraPermission = async () => {
    // (async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
    // })
    // };
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setText(data);
  };
  // --- End: Data and handlers ----------------------------------------------------------------

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Paragraph>Requesting for camera Permission</Paragraph>
      </View>
    );
  }

  if (!Boolean(hasPermission)) {
    return (
      <View style={styles.container}>
        <Paragraph style={styles.margin10}>No access to camera</Paragraph>
        <Button title={"Allow camera"} onPress={() => askForCameraPermission()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.barCodeBox}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.scanner} />
      </View>
      <Paragraph style={styles.mainText}>{text}</Paragraph>

      {scanned && <Button title={"Scan again?"} onPress={() => setScanned(false)} />}
    </View>
  );
}
