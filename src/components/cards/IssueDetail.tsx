import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import IssueInfoCard from './IssueInfoCard';
import IssueDescription from './IssueDescription';
import IssuePhotos from './IssuePhotos';
import AppColors from '../../assets/colors/AppColors';
import MediumButton from '../buttons/MediumButton';

interface DetailProps {
  title: string;
}

const IssueDetail: React.FC<DetailProps> = ({ title }) => {
  const issueInfo = [
    { label: 'Property', value: 'Hilltop Apartment' },
    { label: 'Reported On', value: 'June 7, 2025' },
    { label: 'Created on', value: 'May 20, 2025' },
    { label: 'Assigned Cleaner', value: 'Ali Raza' },
  ];

  const photos = [
    require('../../assets/images/bedroom.png'),
    require('../../assets/images/lounge.png'),
  ];

  return (
    <SafeAreaView className="flex-1 ">
      <ScrollView contentContainerStyle={{  paddingBottom: 100 }}>
        <Text style={{ color: AppColors.black }} className="text-md font-bold">
          {title}
        </Text>
        <IssueInfoCard data={issueInfo} />
        <IssueDescription text="Balcony railing is loose and poses a safety risk. Needs immediate attention." />
        <IssuePhotos photos={photos} />
      </ScrollView>

      {/* Fixed Footer */}
      <View className="absolute bottom-0 left-0 right-0   ">
        <View className="flex-row justify-between space-x-3">
          <MediumButton
          title="Mark as In Progress"
          backgroundColor={AppColors.secondary}
          textColor={AppColors.white}
        />
        <MediumButton
          title="Message Owner"
          backgroundColor={AppColors.primary}
          textColor={AppColors.white}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IssueDetail;
