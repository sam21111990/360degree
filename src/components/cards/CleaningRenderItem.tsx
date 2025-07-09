import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StatusBadge from '../buttons/StatusBadge';
import { getStatusStyles } from '../../utils/StatusStyle';
import AppColors from '../../assets/colors/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CleaningRenderItemProps {
  title: string;
  date: string;
  time: string;
  user: string;
  status: string;
  navigation?:any
}

const CleaningRenderItem: React.FC<CleaningRenderItemProps> = ({ title,time,user, date, status,navigation }) => {
  const [beforeDash, afterDash] = title.split(/-(.+)/);

const styles = getStatusStyles(status);
const handleBadgePress = () => {
    console.log('Status Badge Pressed:', status);
    navigation.navigate('IssueDetailScreen')
    // Add navigation or any other logic here
  };
  return (
    <View className="bg-transparent border border-solid border-gray-300 p-3 mb-2 rounded-xl">
      {/* Title */}
      <View className='flex-row justify-between  mb-1'>
      <Text className="text-sm flex-row flex-wrap">
        <Text className="text-black font-semibold">{beforeDash?.trim()}</Text>
        {afterDash && <Text className="text-gray-500 font-normal"> - {afterDash.trim()}</Text>}
      </Text>
      <StatusBadge
      text={status}
      textColor={styles.textColor}
      borderColor={styles.borderColor}
      bgColor={styles.bgColor}
      dotColor={styles.dotColor}
      clickable={styles.clickable}
    />
      </View>

      {/* Date & Status */}
      
      <View className="flex-row items-center mb-1">
           <Feather name="user" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{user}</Text>
         </View>
         <View className='flex-row space-x-16  mb-1'>
         <View className="flex-row items-center mb-1">
           <MaterialIcons name="calendar-today" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{date}</Text>
         </View>
         <View className="flex-row items-center mb-1">
           <Feather name="clock" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{time}</Text>
         </View>
      </View>
    </View>
  );
};

export default CleaningRenderItem;
