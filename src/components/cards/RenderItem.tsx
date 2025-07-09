import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StatusBadge from '../buttons/StatusBadge';

interface RenderItemProps {
  title: string;
  date: string;
  status: string;
  navigation:any
}

const RenderItem: React.FC<RenderItemProps> = ({ title, date, status,navigation }) => {
  const [beforeDash, afterDash] = title.split(/-(.+)/);

  // Centralized status style config
  const statusStylesMap: Record<string, {
    textColor: string;
    borderColor: string;
    bgColor: string;
    dotColor: string;
    clickable: boolean
  }> = {
    Open: {
      textColor: 'text-red-700',
      borderColor: 'border-red-300',
      bgColor: 'bg-red-50',
      dotColor: 'bg-red-600',
      clickable: true,
    },
    Resolved: {
      textColor: 'text-green-700',
      borderColor: 'border-green-300',
      bgColor: 'bg-green-50',
      dotColor: 'bg-green-600',
      clickable: false,
    },
    'In Progress': {
      textColor: 'text-yellow-700',
      borderColor: 'border-yellow-300',
      bgColor: 'bg-yellow-50',
      dotColor: 'bg-yellow-500',
      clickable: true,
    },
    default: {
      textColor: 'text-gray-700',
      borderColor: 'border-gray-300',
      bgColor: 'bg-gray-50',
      dotColor: 'bg-gray-500',
      clickable: true,
    },
  };

  const styles = statusStylesMap[status] || statusStylesMap.default;
const handleBadgePress = () => {
    console.log('Status Badge Pressed:', status);
    navigation.navigate('IssueDetailScreen')
    // Add navigation or any other logic here
  };
  return (
    <View className="bg-transparent border border-solid border-gray-300 p-3 mb-2 rounded-xl">
      {/* Title */}
      <Text className="text-sm flex-row flex-wrap">
        <Text className="text-black font-semibold">{beforeDash?.trim()}</Text>
        {afterDash && <Text className="text-gray-500 font-normal"> - {afterDash.trim()}</Text>}
      </Text>

      {/* Date & Status */}
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-gray-500 font-normal text-xs">Reported: {date}</Text>
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
    </View>
  );
};

export default RenderItem;
