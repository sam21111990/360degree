import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScreenContainer = ({children}:any) => {
  return (
    <SafeAreaView  className="flex-1">
          <LinearGradient
          colors={['#103662', '#0b2b51','#051f41']} // Light Blue to Dark Blue
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
        flex: 1,
        
      }}
        >{children}
        </LinearGradient>
        </SafeAreaView>
  )
}

export default ScreenContainer