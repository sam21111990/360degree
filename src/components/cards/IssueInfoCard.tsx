import React from 'react';
import { View, Text } from 'react-native';

interface InfoItem {
  label: string;
  value: string;
}

interface IssueInfoCardProps {
  data: InfoItem[];
}

const IssueInfoRow: React.FC<InfoItem> = ({ label, value }) => (
  <View className="flex-row justify-between mt-1">
    <Text className="text-[#64748B] text-sm">{label}:</Text>
    <Text className="text-[#1E293B] text-sm font-medium">{value}</Text>
  </View>
);

const IssueInfoCard: React.FC<IssueInfoCardProps> = ({ data }) => (
  <View className="border border-solid border-gray-300 p-3 mt-2 rounded-lg">
    {data.map((item, index) => (
      <IssueInfoRow key={index} label={item.label} value={item.value} />
    ))}
  </View>
);

export default IssueInfoCard;
