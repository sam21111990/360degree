import React from 'react';
import { View, Text } from 'react-native';
import TopCard from '../cards/TopCard';
import AppColors from '../../assets/colors/AppColors';
import { Icons } from '../../assets/icons/Icons';
import FontStyle from '../../assets/styles/FontStyle';
import IconContainer from '../buttons/IconContainer';

interface HomeHeaderProps {
  title: string;
  welcom:string
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ title,welcom }) => {
  return (
    <>
      <View className="bg-transparent p-4 mt-4 flex-row justify-between items-center">
        <View>
        <Text style={{color:AppColors.gray,fontSize:14,fontFamily:FontStyle.regularFont}} >{welcom}</Text>
        <Text style={{color:AppColors.white,fontSize:20,fontFamily:FontStyle.regularFont}} >{title}</Text>
        </View>
         <IconContainer type="Fontisto" name="bell" color="#fff" size={18} padding={14}/>
      </View>
      <TopCard />
    </>
  );
};

export default HomeHeader;
