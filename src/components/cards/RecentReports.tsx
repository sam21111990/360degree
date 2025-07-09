import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RenderItem from './RenderItem';

const RecentReports = ({navigation}:any) => {
  const reports = [
    { id: '1', title: 'Broken mirror - Garden Villa', date: 'June 10, 2025', status: 'Open' },
    { id: '2', title: 'AC not working - Seaside Cottage', date: 'June 09, 2025', status: 'Resolved' },
    { id: '3', title: 'Stained bedsheets - City Lodge', date: 'June 08, 2025', status: 'In Progress' },
    { id: '4', title: 'Broken balcony railing - Hilltop Apartment', date: 'June 07, 2025', status: 'Open' },
    { id: '5', title: 'Water leakage - Lakeview Studio', date: 'June 06, 2025', status: 'Resolved' },
  ];

  return (
    <View className="flex-1">
      {/* Header Row */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-black font-semibold text-lg">Recent Reports</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("ViewReports")}>
          <Text className="text-yellow-700 text-sm font-medium underline">View All</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList */}
      <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderItem
            title={item.title}
            date={item.date}
            status={item.status}
            navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentReports;
