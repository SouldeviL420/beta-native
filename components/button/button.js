import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({onPress,title,textColor,bgColor,width}) {
  return (
    <TouchableOpacity
    onPress={onPress}
    className={`${bgColor} py-3 rounded-xl mt-4 mb-2 ${width}`}
    >
        <Text className={`${textColor} text-center font-bold`}>{title}</Text>
        
    </TouchableOpacity>
  )
}