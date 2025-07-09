import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList, TextInput, useWindowDimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../headers/AuthHeader';
import RecentReports from './RecentReports';
import Footer from '../footer/Footer';
import TopCard from './TopCard';
import ScreenContainer from '../containers/ScreenContainer';
import HomeHeader from '../headers/HomeHeader';
import ScreenContentContainer from '../containers/ScreenContentContainer';
import AppHeader from '../headers/AppHeader';
import PropertiesRenderItem from './PropertiesRenderItem';
import IconContainer from '../buttons/IconContainer';
import AppColors from '../../assets/colors/AppColors';
import PropertyDetail from './PropertyDetail';
import { Dropdown } from 'react-native-element-dropdown';
import LongButton from '../buttons/LongButton';
import Feather from 'react-native-vector-icons/Feather';


// Reusable Input Component
const CustomInput = ({ label, value, onChangeText, placeholder, secureTextEntry, large }: { label: string; value: string; onChangeText: (text: string) => void; placeholder: string; secureTextEntry?: boolean; large?: boolean }) => (
  <View className="mb-1 mt-3">
    <Text className="font-semibold text-xs mb-2">{label}</Text>
    <TextInput
      className={`border border-gray-300 rounded-lg p-2 ${large ? 'h-24' : ''}`}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={AppColors.gray}
      secureTextEntry={secureTextEntry}
      multiline={large}
    />
  </View>
);



const CreateChecklistTemplate = ({ navigation }: any) => {
   const { width } = useWindowDimensions();
  const [tamplateName, setTamplateName] = useState('');
  const [task, setTask] = useState('');

  const handleCreateProperty = () => {
    // Handle property creation logic here
    console.log({ tamplateName, task,  });
  };
  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <AppHeader title="Create New Property" />
        <ScreenContentContainer>
        <CustomInput label="Template Name" value={tamplateName} onChangeText={setTamplateName} placeholder="" />
        <CustomInput label="Enter Task" value={task} onChangeText={setTask} placeholder=""  />        
        <TextInput className={`border border-gray-300 rounded-lg p-2  'h-24' `} value={task} onChangeText={(val)=>setTask(val)} placeholderTextColor={AppColors.gray} />
        <TouchableOpacity className="flex-row items-center justify-end mt-2">
    <Feather name="plus" size={16} color={AppColors.primary} />
    <Text className="text-sm font-semibold text-black ml-1">Add Task</Text>
  </TouchableOpacity>
        <LongButton textColor='text-white' title='Save Template' bgColor={AppColors.primary}/>
        </ScreenContentContainer>
      </View>
    </ScreenContainer>
  );
};

export default CreateChecklistTemplate;
