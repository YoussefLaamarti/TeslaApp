import { Pressable, View, Text } from 'react-native'
import React from 'react'
import StylesButton from './StylesButton'
const Button = (props) => {
  return (
   
        <Pressable  
        style={[StylesButton.button ,{backgroundColor:props.Background}]}
        onPress={() => { 
            console.warn(props.message)
        }}>
      <Text  style={[StylesButton.title, {color:props.color}]}>{props.Title}</Text>
    </Pressable>
 
  )
}

export default Button