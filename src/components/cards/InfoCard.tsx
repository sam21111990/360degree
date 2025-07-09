// components/InfoCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconContainer from '../buttons/IconContainer';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '../../assets/colors/AppColors';
import FontStyle from '../../assets/styles/FontStyle';

interface InfoCardProps {
  count: string;
  label: string;
  iconType: any;
  iconName: string;
  iconColor?: string;
  iconSize?: number;
  backgroundColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  count,
  label,
  iconType,
  iconName,
  iconColor = 'rgba(193, 167, 108, 1)',
  iconSize = 24,
  backgroundColor = 'rgba(255,255,255,0.1)',
}) => {
  return (
    <View style={[styles.card, { backgroundColor }]} className='w-40 rounded-xl p-3 items-center flex-row'>
      {/* <IconContainer type={iconType} name={iconName} color={iconColor} size={iconSize} /> */}
      <Feather name={iconName} color={iconColor} size={iconSize}/>
      <View style={styles.textContainer}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    gap: 8,
  },
  textContainer: {
    flexDirection: 'column',
  },
  count: {
    color: '#fff',
    fontSize: 20,
    fontFamily: FontStyle.semiBoldFont,
  },
  label: {
    color: AppColors.white,
    fontSize: 13,
  },
});
