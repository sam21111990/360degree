import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RenderItem from './RenderItem';

const ReportedIssues = ({navigation}:any) => {
  const reports = [
    { id: '1', title: 'Broken mirror - Garden Villa', date: 'June 10, 2025', status: 'Open' },
    { id: '2', title: 'AC not working - Seaside Cottage', date: 'June 09, 2025', status: 'Resolved' },
    { id: '3', title: 'Stained bedsheets - City Lodge', date: 'June 08, 2025', status: 'In Progress' },
    { id: '4', title: 'Broken balcony railing - Hilltop Apartment', date: 'June 07, 2025', status: 'Open' },
    { id: '5', title: 'Water leakage - Lakeview Studio', date: 'June 06, 2025', status: 'Resolved' },
    { id: '6', title: 'Water leakage - Lakeview Studio', date: 'June 06, 2025', status: 'Resolved' },
    { id: '7', title: 'Water leakage - Lakeview Studio', date: 'June 06, 2025', status: 'Resolved' },
    { id: '8', title: 'Water leakage - Lakeview Studio', date: 'June 06, 2025', status: 'Resolved' },
    { id: '9', title: 'Water leakage - Lakeview Studio', date: 'June 06, 2025', status: 'Resolved' },
  ];

  return (
    <View className="">
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

export default ReportedIssues;
