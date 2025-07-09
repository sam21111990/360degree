// components/IconContainer.tsx

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// Import icon sets
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface IconProps {
  type:
    | 'FontAwesome'
    | 'Ionicons'
    | 'AntDesign'
    | 'FontAwesome5'
    | 'FontAwesome6'
    | 'MaterialCommunityIcons'
    | 'SimpleLineIcons'
    | 'Octicons'
    | 'Foundation'
    | 'EvilIcons'
    | 'Fontisto'
    | 'MaterialIcons'
    | 'Feather'
    | 'Entypo';
  name: string;
  color: string;
  size?: number;
  padding?: number; 
  backgroundColor?: string;
  onPress?: () => void;
}

// Map type to actual component
const iconMap = {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Feather,
  Entypo,
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
  Fontisto,
};

const IconContainer: React.FC<IconProps> = ({
  type,
  name,
  color,
  size = 24,
  padding = 9,
  onPress,
  backgroundColor='rgba(59, 85, 115, 0.7)'
}) => {
  const IconComponent = iconMap[type];

  if (!IconComponent) {
    console.warn(`Icon type "${type}" is not supported.`);
    return null;
  }

  return (
    <TouchableOpacity style={[styles.iconWrapper, { padding ,backgroundColor: backgroundColor}]} onPress={onPress} >
      <IconComponent name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconContainer;

const styles = StyleSheet.create({
  iconWrapper: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
