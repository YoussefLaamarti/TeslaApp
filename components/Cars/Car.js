import {  Image , ImageBackground,Text, View } from 'react-native'
import React from 'react'
import styles from './Styles'
import Button from '../StyledButtons/Button'
const Car = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={props.image}
        style={styles.image}
        
        />    
        
       <View style={styles.carTitles}>   
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>

        <View style={styles.buttonContainer}>
        <Button Title='CUSTOM ORDERS' Background='#F0EEED' color='#181823'message='Get a custom Order' />
        <Button Title='EXISTING INVENTORY' Background='#44444C' color='white' message='Go to existing inventory'/>
        </View>
       </View>
      )
}

export default Car

