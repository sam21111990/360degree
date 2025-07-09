import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type LongButtonProps = TouchableOpacityProps & {
  bgColor: string;      // background color class from NativeWind (e.g. 'bg-blue-500')
  textColor: string;    // text color class (e.g. 'text-white')
  title: string;
};

const LongButton: React.FC<LongButtonProps> = ({ bgColor, textColor, title, ...rest }) => {
  return (
    <TouchableOpacity style={{backgroundColor:`${bgColor}`}}  className={` w-80 px-4 py-2 rounded-full`} {...rest}>
      <Text style={{fontFamily:'Poppins-Medium'}} className={` text-center text-lg font-bold ${textColor}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LongButton;
