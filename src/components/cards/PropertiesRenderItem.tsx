import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../../assets/colors/AppColors';
import StatusBadge from '../buttons/StatusBadge';

interface PropertiesRenderItemProps {
  name: string;
  location: string;
  owner: string;
  date: string;
  image: ImageSourcePropType;
  status: string;
  navigation: any;
}

const PropertiesRenderItem: React.FC<PropertiesRenderItemProps> = ({
  name,
  location,
  owner,
  date,
  image,
  status,
  navigation,
}) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active':
        return { textColor: 'text-green-700',
      borderColor: 'border-green-300',
      bgColor: 'bg-green-50',
      dotColor: 'bg-green-600',
      clickable: false, };
      case 'Available':
        return { textColor: 'text-red-700',
      borderColor: 'border-red-300',
      bgColor: 'bg-red-50',
      dotColor: 'bg-red-600',
      clickable: true, };
      default:
        return {textColor: 'text-gray-700',
      borderColor: 'border-gray-300',
      bgColor: 'bg-gray-50',
      dotColor: 'bg-gray-500',
      clickable: true, };
    }
  };

  const styles = getStatusStyle(status);
const handleBadgePress = () => {
    console.log('Status Badge Pressed:', status);
    navigation.navigate('IssueDetailScreen')
    // Add navigation or any other logic here
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PropertyDetail')}
      className="border border-gray-300 mb-4 rounded-lg shadow-md bg-white"
    >
      <Image source={image} className="w-full h-48 rounded-t-lg" />
      <View className="p-4">
        {/* Name + Status Badge Row */}
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-[#1E293B] text-md font-semibold">{name}</Text>
          {/* <View
            className="px-2 py-1 rounded-full"
            style={{ backgroundColor: statusStyle.backgroundColor }}
          >
            <Text className="text-white text-xs font-semibold">{statusStyle.text}</Text>
          </View> */}
          <StatusBadge
          text={status}
          textColor={styles.textColor}
          borderColor={styles.borderColor}
          bgColor={styles.bgColor}
          dotColor={styles.dotColor}
          clickable={styles.clickable}
          onPress={handleBadgePress}
        />
        </View>

        {/* Location */}
        <View className="flex-row items-center mb-1">
          <Feather name="map-pin" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-medium">{location}</Text>
        </View>

        



{/* Date */}
<View className="flex-row items-center mb-1">
  <MaterialIcons name="date-range" size={16} color={AppColors.secondary} />
  <Text className="ml-2 text-sm">
    <Text style={{ color: '#64748B' }}>
      {date.includes(':') ? date.split(':')[0] + ':' : ''}
    </Text>
    <Text style={{ color: AppColors.black, fontWeight: '500' }}>
      {date.includes(':') ? ' ' + date.split(':')[1] : date}
    </Text>
  </Text>
</View>

        {/* Owner */}
<View className="flex-row items-center mb-1">
  <Feather name="home" size={16} color={AppColors.secondary} />
  <Text className="ml-2 text-sm">
    <Text style={{ color: '#64748B' }}>
      {owner.includes(':') ? owner.split(':')[0] + ':' : ''}
    </Text>
    <Text style={{ color: AppColors.black, fontWeight: '500' }}>
      {owner.includes(':') ? ' ' + owner.split(':')[1] : owner}
    </Text>
  </Text>
</View>

      </View>
    </TouchableOpacity>
  );
};

export default PropertiesRenderItem;
