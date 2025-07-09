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

// Reusable Input Component
const CustomInput = ({ label, value, onChangeText, placeholder, secureTextEntry, large }: { label: string; value: string; onChangeText: (text: string) => void; placeholder: string; secureTextEntry?: boolean; large?: boolean }) => (
  <View className="mb-4">
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

// Reusable ImageUpload Component
const ImageUpload = ({ onPress }: { onPress: () => void }) => (
  <>
<Text className="font-semibold text-xs">
        Upload Photos <Text style={{ color: AppColors.gray }}>(max 5)</Text>
      </Text>
      <TouchableOpacity onPress={onPress} className="w-16 h-16 bg-gray-100 flex items-center justify-center my-2">
      <Text className="text-gray-400">+</Text>
    </TouchableOpacity>
  </>
);

// Reusable Dropdown Component
const CustomDropdown = ({ label,navigation, value, onChangeText, options }: { label: string; navigation:any;value: string; onChangeText: (text: string) => void; options: string[] }) => {
  const statusOptions = [
    { label: 'Standard Cleaning', value: 'Standard Cleaning' },
    { label: 'Deep Cleaning', value: 'Deep Cleaning' },
    { label: 'Post-Guest Cleaning', value: 'Post-Guest Cleaning' },
    { label: '+ Create New Template' , value: '__add_new__'}
  ];
  const [status, setStatus] = useState(null);
  return(
  <View className="my-1">
    <Text className="font-semibold text-xs mb-1">{label}</Text>
      <Dropdown
         data={statusOptions}
         labelField="label"
         valueField="value"
         placeholder="Select Template"
         value={status}
         onChange={item => {
         if (item.value === '__add_new__') {
           // Navigate to NewOptionScreen
           setStatus(null)
           navigation.navigate('CreateChecklistTemplate');
         } else {
           setStatus(item.value);
         }
         }}
         // onChange={(item) => setStatus(item.value)}
         style={{ borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, paddingHorizontal: 12, height: 40,marginBottom:5 }}
         placeholderStyle={{ color: '#94A3B8' }}
         selectedTextStyle={{ color: '#1E293B' }}
         iconStyle={{ width: 20, height: 20 }}
       />
  </View>
)};
const CreateNewPropertyScreen = ({ navigation }: any) => {
   const { width } = useWindowDimensions();
  const [propertyName, setPropertyName] = useState('');
  const [address, setAddress] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [template, setTemplate] = useState('');

  const handleCreateProperty = () => {
    // Handle property creation logic here
    console.log({ propertyName, address, ownerEmail, template });
  };
  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <AppHeader title="Create New Property" />
        <ScreenContentContainer>
        <CustomInput label="Property Name" value={propertyName} onChangeText={setPropertyName} placeholder="" />
        <CustomInput label="Address" value={address} onChangeText={setAddress} placeholder="" large />        
        <ImageUpload onPress={() => console.log('Upload photos')} />
        <CustomDropdown navigation={navigation} label="Checklist Template" value={template} onChangeText={setTemplate} options={['Select Template', 'Template 1', 'Template 2']} />
        <CustomInput label="Add Owner" value={ownerEmail} onChangeText={setOwnerEmail} placeholder="owner@example.com" />
        <LongButton textColor='text-white' title='Create Property' bgColor={AppColors.primary}/>
        </ScreenContentContainer>
      </View>
    </ScreenContainer>
  );
};

export default CreateNewPropertyScreen;
