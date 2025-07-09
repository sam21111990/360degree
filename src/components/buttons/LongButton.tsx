import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type LongButtonProps = TouchableOpacityProps & {
  bgColor: string;      // background color class from NativeWind (e.g. 'bg-blue-500')
  textColor: string;    // text color class (e.g. 'text-white')
  title: string;
};

const LongButton: React.FC<LongButtonProps> = ({ bgColor, textColor, title, ...rest }) => {
  return (
    <View className="absolute bottom-4 left-0 right-0  justify-center items-center ">

    <TouchableOpacity style={{backgroundColor:`${bgColor}`, }}  className={` w-80 px-4 py-3 rounded-full`} {...rest}>
      <Text  className={` text-center text-base font-semibold ${textColor}`}>
        {title}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

export default LongButton;
