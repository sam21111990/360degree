import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SplashScreen = ({navigation}:any) => {
     useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('LoginScreen'); // or navigate, replace avoids going back
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout); // cleanup on unmount
  }, [navigation]);
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="light-content" />
      <View className="flex-1 justify-center items-center p-4">
        <Image source={require('../../assets/images/Logo.png')} className='w-48 h-24'/>
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen