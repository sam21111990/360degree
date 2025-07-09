import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AppColors from '../../assets/colors/AppColors';

interface ButtonProps {
  title: string;
  className?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, className = '', onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{backgroundColor:AppColors.primary,marginTop:30}}
      className={` p-2 rounded-full w-full ${className}`}
    >
      <Text className="text-white text-center text-base font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;