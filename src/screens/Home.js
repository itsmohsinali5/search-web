import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Button } from "../../src/components/Button";
import Color from "../../Utils/colors";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import CalenderPicker from "../../src/components/Calender";
import axios from "axios";

export const Home = () => {
  const [result, setResult] = useState(null);
  const [pessanger, setPessanger] = useState({
    adults: null,
    children: null,
    infants: null,
  });

  const [open, setOpen] = useState(false);
  const [drafting, setDrafting] = useState(null);
  const [items, setItems] = useState([]);

  const [openDes, setOpenDes] = useState(false);
  const [draftingDes, setDraftingDes] = useState(null);

  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://tp.media/r?marker=408934&trs=209963&p=5976&u=https%3A%2F%2Fwayaway.io&campaign_id=200"
    );
    setResult(result);
  };

  useEffect(() => {
    // Fetching airports data
    axios
      .get("http://api.travelpayouts.com/data/en/airports.json")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                label: `${item?.name} (${item?.city_code})`,
                value: item?.city_code,
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
            dropDownContainerStyle={{ backgroundColor: "white", zIndex: 999 }}
            items={
              items &&
              items.map((item) => ({
                label: `${item?.name} (${item?.city_code})`,
                value: item?.city_code,
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
          }}
        >
          <View style={{ width: "49%" }}>
            <Text style={styles.text}>Departure date</Text>
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
          </View>
          <View style={{ width: "49%" }}>
            <Text style={styles.text}>Return date</Text>
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
        </View>

        <View style={{ zIndex: open || openDes ? 0 : 1, marginTop: 10 }}>
          <Text
            style={{ ...styles.title, color: Color.blackColor, fontSize: 16 }}
          >
            Select Passengers
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>adults</Text>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Text style={{ ...styles.text, marginRight: 10 }}>
                {pessanger.adults ? pessanger.adults : 0}
              </Text>
              <TouchableOpacity
                style={{ marginRight: 5 }}
                onPress={() => {
                  if (pessanger.adults > 0) {
                    setPessanger((prevState) => ({
                      ...prevState,
                      adults: prevState.adults - 1,
                    }));
                  }
                }}
              >
                <AntDesign
                  name="minuscircleo"
                  size={22}
                  color={Color.redColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setPessanger((prevState) => ({
                    ...prevState,
                    adults: prevState.adults + 1,
                  }))
                }
              >
                <Ionicons
                  name="add-circle-outline"
                  size={26}
                  color={Color.blueColor}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>children</Text>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Text style={{ ...styles.text, marginRight: 10 }}>
                {pessanger.children ? pessanger.children : 0}
              </Text>
              <TouchableOpacity
                style={{ marginRight: 5 }}
                onPress={() => {
                  if (pessanger.children > 0) {
                    setPessanger((prevState) => ({
                      ...prevState,
                      children: prevState.children - 1,
                    }));
                  }
                }}
              >
                <AntDesign
                  name="minuscircleo"
                  size={22}
                  color={Color.redColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setPessanger((prevState) => ({
                    ...prevState,
                    children: prevState.children + 1,
                  }))
                }
              >
                <Ionicons
                  name="add-circle-outline"
                  size={26}
                  color={Color.blueColor}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>infants</Text>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Text style={{ ...styles.text, marginRight: 10 }}>
                {pessanger.infants ? pessanger.infants : 0}
              </Text>
              <TouchableOpacity
                style={{ marginRight: 5 }}
                onPress={() => {
                  if (pessanger.infants > 0) {
                    setPessanger((prevState) => ({
                      ...prevState,
                      infants: prevState.infants - 1,
                    }));
                  }
                }}
              >
                <AntDesign
                  name="minuscircleo"
                  size={22}
                  color={Color.redColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setPessanger((prevState) => ({
                    ...prevState,
                    infants: prevState.infants + 1,
                  }))
                }
              >
                <Ionicons
                  name="add-circle-outline"
                  size={26}
                  color={Color.blueColor}
                />
              </TouchableOpacity>
            </View>
          </View>
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
};

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
    zIndex: 999,
  },
  placeholderStyles: {
    color: Color.greyColor,
    fontWeight: "600",
    fontSize: 14,
  },
  calender: {
    zIndex: 1,
    marginTop: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Color.blueColor,
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    margin: 20,
    backgroundColor: Color.baseColor,
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  modalBody: {
    alignItems: "center",
  },
  modalButton: {
    flexDirection: "row",
    width: 150,
    backgroundColor: Color.whiteColor,
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});
