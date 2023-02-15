import { Image , View, Text } from 'react-native'
import React from 'react'
import stylesNav from './styledNav'

export default function Navbar() {
  return (
    <View style={stylesNav.navbar}>
            <Image style={stylesNav.logo} source={require('../../assets/logo.png')}/>
            <Image style={stylesNav.menu} source={require('../../assets/menu.png')}/>

         </View>
  )
}