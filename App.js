import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Button } from './src/components/Button';
import Color from './Utils/colors';

export default function App() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://tp.media/r?marker=408934&trs=209963&p=5976&u=https%3A%2F%2Fwayaway.io&campaign_id=200');
    setResult(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        btnText="Search through browser"
        onPress={_handlePressButtonAsync}
        backgroundColor={Color.blueColor}
        btnColor={Color.whiteColor}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
});
