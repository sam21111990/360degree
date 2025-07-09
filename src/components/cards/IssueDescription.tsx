import React from 'react';
import { View, Text } from 'react-native';
import AppColors from '../../assets/colors/AppColors';

interface IssueDescriptionProps {
  text: string;
}

const IssueDescription: React.FC<IssueDescriptionProps> = ({ text }) => (
  <>
    <Text style={{ color: AppColors.black }} className="mt-4 text-sm font-bold">
      Description
    </Text>
    <View className="border border-solid border-gray-300 p-3 mt-2 rounded-lg">
      <Text style={{ color: AppColors.black }} className="text-sm font-normal">
        {text}
      </Text>
    </View>
  </>
);

export default IssueDescription;
