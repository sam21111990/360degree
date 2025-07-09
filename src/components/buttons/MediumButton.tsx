import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface MediumButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  outlined?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const MediumButton: React.FC<MediumButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  outlined = false,
  style,
  textStyle,
}) => {
  const containerStyle: ViewStyle = {
    backgroundColor: outlined ? 'transparent' : backgroundColor ?? '#6B7280', // fallback bg
    borderWidth: borderColor ? 1 : 0,
    borderColor: borderColor ?? 'transparent',
    height: 44,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    ...style,
  };

  const textStyles: TextStyle = {
    color: textColor ?? '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    ...textStyle,
  };

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MediumButton;
