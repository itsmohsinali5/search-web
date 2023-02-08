import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Utils/colors'

export const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.container, backgroundColor: props.backgroundColor, width: props.width}}>
                <Text style={{...styles.text, color: props.btnColor}}>{props.btnText}</Text>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: Color.blueColor,
    borderRadius: 5,
    marginTop: 30
  },
  text: { fontSize: 18, fontWeight: 'bold' },
});
