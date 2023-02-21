import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Color from "../../Utils/colors";

const CalenderPicker = ({
  mode = "date",
  fontSize = 16,
  getDate,
  defaultDate,
  disabled = false,
  opacity = 1,
  setReturnDate,
  setDepartDate,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateText, setDateText] = useState(defaultDate);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    if (setReturnDate) {
      setReturnDate("");
    }
    if (setDepartDate) {
      setDepartDate("");
    }
  };

  const handleConfirm = (date) => {
    if (mode == "date") {
      hideDatePicker();

      setDateText(moment(date).format("DD/MM/YYYY"));
      getDate(moment(date).format("DD/MM/YYYY"));
    } else if (mode == "time") {
      hideDatePicker();

      setDateText(moment(date).format("hh:mm A"));
      getDate(moment(date).format("hh:mm A"));
    } else {
      hideDatePicker();

      setDateText(moment(date).format("DD/MM/YYYY hh:mm A"));
      getDate(moment(date).format("DD/MM/YYYY hh:mm A"));
    }
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={showDatePicker}
        disabled={disabled}
      >
        <Text
          style={[styles.dateText, { fontSize: fontSize, opacity: opacity }]}
        >
          {/\d/.test(defaultDate) ? dateText : defaultDate}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        // minimumDate={new Date()}
        maximumDate={new Date()}
        isVisible={isDatePickerVisible}
        date={
          /\d/.test(defaultDate)
            ? defaultDate.includes("AM")
              ? new Date()
              : defaultDate.includes("PM")
              ? new Date()
              : new Date(
                  defaultDate.split("/").reverse().join("/").replace(/\//g, "-")
                )
            : new Date()
        }
        // date={date}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dateText: {
    color: Color.blackColor,
  },
});
export default CalenderPicker;
