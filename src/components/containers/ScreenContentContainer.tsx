import { View, Text } from 'react-native'
import React from 'react'

const ScreenContentContainer = ({children}:any) => {
  return (
            <View className="flex-1 bg-white rounded-t-3xl w-full max-w-md p-4">
    {children}
    </View>
  )
}

export default ScreenContentContainer