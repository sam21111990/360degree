import React from 'react';
import { View, TextInput, Text } from 'react-native';
import AppColors from '../../assets/colors/AppColors';

interface InputProps {
  placeholder: string;
  secure?: boolean;
  className?: string;
  title:string
}

const Input: React.FC<InputProps> = ({ placeholder,title, secure = false, className = '' }) => {
  return (
    <View className={`bg-white p-2 mb-3 rounded-lg border border-gray-100 w-full h-16 ${className}`}>
      <Text style={{color:AppColors.gray}} className=" text-sm">{title}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        className="text-gray-700 "
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default Input;