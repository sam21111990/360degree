import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import AppColors from '../../assets/colors/AppColors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StatusBadge from '../buttons/StatusBadge';
import IconContainer from '../buttons/IconContainer';
import { getStatusStyles } from '../../utils/StatusStyle';
import RenderItem from './RenderItem';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import PropertIssueRenderItem from './PropertIssueRenderItem';


// Reusable PropertyInfo Component
const PropertyInfo = ({ address, area,access, instructions, coHost, owner ,status}: { address: string; area: string;access:string; instructions: string; coHost: string; owner: string ;status:string}) => {
    const styles = getStatusStyles(status);
    return(
    <>
    <View className='flex-row justify-between mt-3 mb-1'>
    <Text className="text-sm font-semibold text-black">Property Info</Text>
    <StatusBadge
      text={status}
      textColor={styles.textColor}
      borderColor={styles.borderColor}
      bgColor={styles.bgColor}
      dotColor={styles.dotColor}
      clickable={styles.clickable}
    />
    </View>
  <View className="  border border-gray-300 mb-4 rounded-lg p-3">
    <View className="flex-row items-center mb-1">
          <Feather name="map-pin" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{address}</Text>
        </View>
        <View className="flex-row items-center mb-1">
           <Entypo name="ruler" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{area}</Text>
         </View>
         <View className="flex-row items-center mb-1">
           <Ionicons name="key-outline" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{access}</Text>
         </View>
         <View className="flex-row items-center mb-1">
           <MaterialIcons name="note" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{instructions}</Text>
         </View>
         <View className="flex-row items-center mb-1">
           <FontAwesome6Icon name="user-group" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">{coHost}</Text>
         </View>
         <View className="flex-row items-center mb-1">
           <Feather name="user" size={16} color={AppColors.secondary} />
          <Text style={{color:AppColors.black}} className="ml-2  text-sm font-normal">Owner: {owner}</Text>
         </View>
  </View>
    </>
)};

// Reusable CleaningLog Component
const CleaningLog = ({ logs }: { logs: { date: string; cleaner: string; duration: string; status: string }[] }) => {
  return (
    <>
      <View className='flex-row justify-between mb-1'>
        <Text className="text-sm font-semibold text-black">Cleaning</Text>
        <IconContainer type='FontAwesome' name='calendar' color={AppColors.white} backgroundColor={AppColors.primary} size={14} padding={10} />
      </View>
      <View className="mb-4">
        {logs.map((log, index) => {
          const styles = getStatusStyles(log.status);

          return (
            <View key={index} className="flex-row items-start justify-between mt-2">
              {/* ✅ Left icon for status */}
              <View className="mt-1 mr-3">
                {log.status === 'Completed' ? (
                    <IconContainer type='MaterialIcons' name='check' color={AppColors.white} backgroundColor={AppColors.secondary} size={14} padding={4} />
                //   <MaterialIcons name="check-circle" size={20} color={AppColors.secondary} />
                ) : (
                    <IconContainer type='FontAwesome' name='dot-circle-o' color={AppColors.gray} backgroundColor={AppColors.white} size={20} padding={1} />
                //   <Feather name="circle" size={18} color={AppColors.gray} />
                )}
              </View>

              {/* Text Info */}
              <View className="flex-1">
                <Text className="text-black text-sm">{log.date}</Text>
                <Text className="text-black text-sm">Cleaner: {log.cleaner}</Text>
                <Text className="text-black text-sm">Duration: {log.duration || '-'}</Text>
              </View>

              {/* Status Badge */}
              <StatusBadge
                text={log.status}
                textColor={styles.textColor}
                borderColor={styles.borderColor}
                bgColor={styles.bgColor}
                dotColor={styles.dotColor}
                clickable={styles.clickable}
              />
            </View>
          );
        })}
      </View>
    </>
  );
};


// Reusable ReportedIssues Component
const ReportedIssues = ({ issues }: { issues: { id:string,
title: string; date: string; status: string }[] }) => (
 <>
 <View className='flex-row justify-between mb-1'>
        <Text className="text-sm font-semibold text-black">Reported Issues</Text>
        <IconContainer type='AntDesign' name='plus' color={AppColors.white} backgroundColor={AppColors.primary} size={14} padding={8} />
      </View>
       <View className="bg-transparent border border-solid rounded-xl border-gray-300  ">
 <FlatList
        data={issues}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PropertIssueRenderItem
            title={item.title}
            date={item.date}
            status={item.status}
            // navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      </View>
      </>
);

// Main Screen Component
const PropertyDetail = () => {
  const { width } = useWindowDimensions();
  const propertyData = {
    address: '40A Garden Street, Lahore',
    area: '400 sq. ft. - 3 Rooms - 5 Beds',
    instructions:'Instructions: Guest check-out by 11 AM',
    access: 'Access: Smart Lock (Code: 1020#)',
    coHost: 'Co-Host: Iqra Ahmed (Read-only Access)',
    owner: 'Sarah Khan',
    status: 'Active'
  };

  const cleaningLogs = [
    { date: 'June 10, 2025', cleaner: 'Sarah Khan', duration: '4h 45min', status: 'Completed' },
    { date: 'June 05, 2025', cleaner: 'Ali Raza', duration: '2h 00min', status: 'Completed' },
    { date: 'June 20, 2025 - 10:00 AM', cleaner: 'Sarah Khan', duration: '', status: 'Upcoming' },
  ];

//   const reportedIssues = [
//     { description: 'Broken mirror in guest room', date: 'June 10, 2025', status: 'Open' },
//     { description: 'AC not working in lounge', date: 'May 28, 2025', status: 'Resolved' },
//   ];
const reportedIssues = [
    { id: '1', title: 'Broken mirror in guest room', date: 'June 10, 2025', status: 'Open' },
    { id: '2', title: 'Broken mirror in guest room', date: 'June 09, 2025', status: 'Resolved' },
  ];
  return (
    <SafeAreaView className="flex-1 ">
      <ScrollView contentContainerStyle={{  paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
      <Image
        source={require('../../assets/images/gardenVilla.png')} // Replace with actual image URL
        className="w-full h-48 rounded-lg"
        resizeMode="cover"
      />
      <View >

        <PropertyInfo {...propertyData} />
        <CleaningLog logs={cleaningLogs} />
        <ReportedIssues issues={reportedIssues} />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

NativeWindStyleSheet.create({
  // Add any custom styles if needed
});

export default PropertyDetail;