import React from 'react';
import { View, Text, Image } from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import LinearGradient from 'react-native-linear-gradient';

interface AuthHeaderProps {
  title: string;
  subTitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subTitle }) => {
  return (
    
    <View  className="max-w-md w-full py-6 pt-12 bg-transparent justify-center items-center">
        <Image source={require('../../assets/images/Logo.png')} className='w-32 h-16'/>
        <Text style={{fontSize:24}} className="text-white font-bold  text-xl mt-8">{title}</Text>
        <Text style={{color:AppColors.gray}} className=" text-sm">{subTitle}</Text>
    </View>
    // </LinearGradient>
  );
};

export default AuthHeader;