import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StatusBadge from '../buttons/StatusBadge';
import { getStatusStyles } from '../../utils/StatusStyle';

interface PropertIssueRenderItemProps {
  title: string;
  date: string;
  status: string;
  navigation?:any
}

const PropertIssueRenderItem: React.FC<PropertIssueRenderItemProps> = ({ title, date, status,navigation }) => {
  const [beforeDash, afterDash] = title.split(/-(.+)/);

const styles = getStatusStyles(status);
const handleBadgePress = () => {
    console.log('Status Badge Pressed:', status);
    navigation.navigate('IssueDetailScreen')
    // Add navigation or any other logic here
  };
  return (
    <View className="bg-transparent border-b border-gray-300 rounded-xl p-3  ">
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

export default PropertIssueRenderItem;
