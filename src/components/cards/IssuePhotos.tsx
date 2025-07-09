import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import AppColors from '../../assets/colors/AppColors';

interface IssuePhotosProps {
  photos: ImageSourcePropType[];
}

const IssuePhotos: React.FC<IssuePhotosProps> = ({ photos }) => (
  <>
    <Text style={{ color: AppColors.black }} className="mt-4 mb-2 text-sm font-bold">
      Photos
    </Text>
    <View className="flex-row mt-4 gap-3 rounded-lg">
      {photos.map((photo, index) => (
        <Image key={index} source={photo} className="w-28 h-28 rounded-lg" />
      ))}
    </View>
  </>
);

export default IssuePhotos;
