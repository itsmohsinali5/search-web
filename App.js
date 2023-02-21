import { City } from "country-state-city";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [cityAbbreviation, setCityAbbreviation] = useState(null);
  console.log("🚀 ~ file: App.js:7 ~ App ~ cityName", cityName);
  // useEffect(() => {

  // }, [cityName]);
  const onSubmit = () => {
    const cities = City.getAllCities();
    const city = cities.find((city) => city.name === cityName);
    setCityAbbreviation(city ? city.abbreviation : null);
    console.log("DITY===", cityAbbreviation);
  };
  return (
    <View style={styles.container}>
      {/* <TextInput
        placeholder="City name"
        value={cityName}
        onChangeText={setCityName}
      />
      <Text>City abbreviation: {cityAbbreviation || "N/A"}</Text>
      <Button title="submit" onPress={onSubmit} /> */}
      <Text>hi</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
