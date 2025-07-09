import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/inputs/Input';
import Button from '../../components/buttons/Button';
import AppColors from '../../assets/colors/AppColors';
import AuthHeader from '../../components/headers/AuthHeader';
import LinearGradient from 'react-native-linear-gradient';
import ScreenContainer from '../../components/containers/ScreenContainer';


const LoginScreen = ({navigation}:any) => {
  const loginHandler=()=>navigation.navigate('TabScreens')
  return (
    <ScreenContainer>
      <StatusBar barStyle="default"  />
      <View className="flex-1 justify-center items-center pt-4">
        <AuthHeader title="👋 Welcome back" subTitle="Welcome back! Please enter your details"  />
        <View className="flex-1 bg-white rounded-t-3xl w-full max-w-md p-6">
        <Input placeholder="Enter your email" title='Email' secure={false} />
      <Text  className="text-gray-700 text-md">Password</Text>
        <View className={`bg-white p-1 mb-3 rounded-lg border border-gray-100 w-full h-12 mt-2`}>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry={true}
        className="text-gray-700 "
        placeholderTextColor="#888"
      />
    </View>
        {/* <Input placeholder="Enter your password" title='Password' secure={true} className="mt-4" /> */}
        <Button title="Log In" className="mt-8" onPress={loginHandler}/>
        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} className='mt-2'>
          <Text style={{color:AppColors.secondary}} className="font-bold text-md">Forgot password?</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScreenContainer>
  );
};

export default LoginScreen;