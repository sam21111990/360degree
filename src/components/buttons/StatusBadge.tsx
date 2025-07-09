import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface StatusBadgeProps {
  text: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  dotColor: string;
  clickable?: boolean;
  onPress?: () => void;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  text,
  textColor,
  borderColor,
  bgColor,
  dotColor,
  clickable = false,
  onPress,
}) => {
  const Content = () => (
    <View className={`flex-row items-center px-2 py-1 rounded-full border ${bgColor} ${borderColor}`}>
      <View className={`w-2 h-2 rounded-full mr-2 ${dotColor}`} />
      <Text className={`text-xs ${textColor}`}>{text}</Text>
    </View>
  );

  return clickable ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Content />
    </TouchableOpacity>
  ) : (
    <Content />
  );
};

export default StatusBadge;
