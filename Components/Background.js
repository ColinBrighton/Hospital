import React from 'react'
import{View,ImageBackground} from "react-native"

export const BackgroundComp = ({children,source}) => {
  return (
    <View>
        <ImageBackground source={source} style={{height:"100%"}}/>
        <View style={{position:'absolute'}}>
        {children}
        </View>
    </View>

   
  )
}
