// import React, { useState } from "react";
// import { StyleSheet, SafeAreaView, Linking, TextInput } from "react-native";
// import * as WebBrowser from "expo-web-browser";
// import { Button } from "./src/components/Button";
// import Color from "./Utils/colors";
// import { getAllCities } from "country-state-city";

// export default function App() {
//   const [result, setResult] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [toCountry, setToCountry] = useState("");
//   const [cityName, setCityName] = useState("");
//   const [cityAbbreviation, setCityAbbreviation] = useState(null);

//   useEffect(() => {
//     const cities = getAllCities();
//     const city = cities.find((city) => city.name === cityName);
//     setCityAbbreviation(city ? city.abbreviation : null);
//   }, [cityName]);
//   const _handlePressButtonAsync = () => {
//     const url = `https://tp.media/r?marker=408934&trs=209963&p=5976&u=https%3A%2F%2Fwayaway.io&campaign_id=200?search=${result}`;
//     console.log("🚀 ~ file: App.js:14 ~ App ~ url", url);
//     Linking.canOpenURL(url).then((supported) => {
//       if (supported) {
//         Linking.openURL(url);
//       } else {
//         console.log("Don't know how to open URL: " + url);
//       }
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//         placeholder="Search"
//         value={cityName}
//         onChangeText={setCityName}
//       />
//       <Text>City abbreviation: {cityAbbreviation || "N/A"}</Text>
//       <TextInput
//         placeholder="Search"
//         value={toCountry}
//         onChangeText={(text) => setToCountry(text)}
//       />
//       <Button
//         btnText="Search through browser"
//         onPress={_handlePressButtonAsync}
//         backgroundColor={Color.blueColor}
//         btnColor={Color.whiteColor}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: 10,
//     backgroundColor: "#ecf0f1",
//   },
// });
