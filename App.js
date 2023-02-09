import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Button } from "./src/components/Button";
import Color from "./Utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import CalenderPicker from "./src/components/Calender";

export default function App() {
  const [result, setResult] = useState(null);
  const [date, setDate] = useState("09-10-2020");

  const [open, setOpen] = useState(false);
  const [drafting, setDrafting] = useState(null);

  const [openDes, setOpenDes] = useState(false);
  const [draftingDes, setDraftingDes] = useState(null);
  const [openPes, setOpenPes] = useState(false);
  const [draftingPes, setDraftingPes] = useState(null);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  //Item array for the dropdown
  const items = [
    //name key is must.It is to show the text in front
    { id: 1, name: "angellist" },
    { id: 2, name: "codepen" },
    { id: 3, name: "envelope" },
    { id: 4, name: "etsy" },
    { id: 5, name: "facebook" },
    { id: 6, name: "foursquare" },
    { id: 7, name: "github-alt" },
    { id: 8, name: "github" },
    { id: 9, name: "gitlab" },
    { id: 10, name: "instagram" },
  ];

  const items2 = [
    //name key is must.It is to show the text in front
    { id: 1, name: "angellist" },
    { id: 2, name: "codepen" },
    { id: 3, name: "envelope" },
    { id: 4, name: "etsy" },
    { id: 5, name: "facebook" },
    { id: 6, name: "foursquare" },
    { id: 7, name: "github-alt" },
    { id: 8, name: "github" },
    { id: 9, name: "gitlab" },
    { id: 10, name: "instagram" },
  ];

  const items3 = [
    //name key is must.It is to show the text in front
    { id: 1, name: "angellist" },
    { id: 2, name: "codepen" },
    { id: 3, name: "envelope" },
    { id: 4, name: "etsy" },
    { id: 5, name: "facebook" },
    { id: 6, name: "foursquare" },
    { id: 7, name: "github-alt" },
    { id: 8, name: "github" },
    { id: 9, name: "gitlab" },
    { id: 10, name: "instagram" },
  ];

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://tp.media/r?marker=408934&trs=209963&p=5976&u=https%3A%2F%2Fwayaway.io&campaign_id=200"
    );
    setResult(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flightsIcon}>
        <MaterialIcons name="flight" size={24} color={Color.blueColor} />
        <Text style={styles.title}>Flights</Text>
      </View>

      <View style={{ width: "90%" }}>
        <Text style={{ ...styles.text, marginTop: 10 }}>Origin</Text>
        <View style={{ zIndex: 1, marginTop: 10 }}>
          <DropDownPicker
            open={open}
            value={drafting}
            items={
              items &&
              items.map((item) => ({
                label: item.name,
                value: item.name,
              }))
            }
            setOpen={setOpen}
            setValue={setDrafting}
            placeholder="Required Origin"
            placeholderStyle={styles.placeholderStyles}
            style={styles.dropDown}
            searchable={true}
          />
        </View>

        <Text style={{ ...styles.text, marginTop: 20 }}>Destination</Text>
        <View style={{ zIndex: open ? 0 : 1, marginTop: 10 }}>
          <DropDownPicker
            open={openDes}
            value={draftingDes}
            items={
              items2 &&
              items2.map((item) => ({
                label: item.name,
                value: item.name,
              }))
            }
            setOpen={setOpenDes}
            setValue={setDraftingDes}
            placeholder="Required Destination"
            placeholderStyle={styles.placeholderStyles}
            style={styles.dropDown}
            searchable={true}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* <Text style={{ ...styles.text, marginTop: 20 }}>Depart Date</Text> */}
          <View style={styles.calender}>
            <CalenderPicker
              fontSize={15}
              getDate={(date) => {
                setDepartDate(date);
              }}
              defaultDate={departDate == "" ? "Depart Date" : departDate}
              mode={"date"}
              setDepartDate={setDepartDate}
            />
          </View>

          {/* <Text style={{ ...styles.text, marginTop: 20 }}>Return Date</Text> */}
          <View style={styles.calender}>
            <CalenderPicker
              fontSize={15}
              getDate={(date) => {
                setReturnDate(date);
              }}
              defaultDate={returnDate == "" ? "Return Date" : returnDate}
              mode={"date"}
              setReturnDate={setReturnDate}
            />
          </View>
        </View>

        <Text style={{ ...styles.text, marginTop: 20 }}>Passengers</Text>
        <View style={{ zIndex: open || openDes ? 0 : 1, marginTop: 10 }}>
          <DropDownPicker
            open={openPes}
            value={draftingPes}
            items={
              items3 &&
              items3.map((item) => ({
                label: item.name,
                value: item.name,
              }))
            }
            setOpen={setOpenPes}
            setValue={setDraftingPes}
            placeholder="Required Pessanger"
            placeholderStyle={styles.placeholderStyles}
            style={styles.dropDown}
            searchable={true}
          />
        </View>

        <Button
          btnText="Search"
          onPress={_handlePressButtonAsync}
          backgroundColor={Color.blueColor}
          btnColor={Color.whiteColor}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: Color.whiteColor,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.blueColor,
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: Color.blackColor,
    marginLeft: 10,
  },
  flightsIcon: {
    width: 150,
    flexDirection: "row",
    backgroundColor: Color.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    borderBottomWidth: 2,
    borderColor: Color.blueColor,
    borderRadius: 5,
    marginTop: 5,
  },
  dropDown: {
    borderColor: Color.blueColor,
    height: 40,
  },
  placeholderStyles: {
    color: Color.greyColor,
    fontWeight: "600",
    fontSize: 14,
  },
  calender: {
    zIndex: 1,
    marginTop: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Color.blueColor,
    borderRadius: 5,
    width: "49%",
    paddingHorizontal: 10,
  },
});
