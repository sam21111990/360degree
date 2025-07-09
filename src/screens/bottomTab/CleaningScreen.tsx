import React from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../components/headers/AuthHeader';
import RecentReports from '../../components/cards/RecentReports';
import Footer from '../../components/footer/Footer';
import TopCard from '../../components/cards/TopCard';
import ScreenContainer from '../../components/containers/ScreenContainer';
import HomeHeader from '../../components/headers/HomeHeader';
import ScreenContentContainer from '../../components/containers/ScreenContentContainer';
import AppHeader from '../../components/headers/AppHeader';
import PropertiesRenderItem from '../../components/cards/PropertiesRenderItem';
import IconContainer from '../../components/buttons/IconContainer';
import AppColors from '../../assets/colors/AppColors';
import RenderItem from '../../components/cards/RenderItem';
import CleaningRenderItem from '../../components/cards/CleaningRenderItem';

const CleaningScreen = ({ navigation }: any) => {
  const reports = [
    { id: '1', title: ' Garden Villa', date: 'June 10, 2025', status: 'rejected' ,time:'1hr 45min',user:'Sara Khan'},
    { id: '2', title: ' Seaside Cottage', date: 'June 09, 2025', status: 'validated' ,time:'1hr 45min',user:'Sara Khan'},
    { id: '3', title: ' City Lodge', date: 'June 08, 2025', status: 'to review' ,time:'1hr 45min',user:'Sara Khan'},
    { id: '4', title: 'Hilltop Apartment', date: 'June 07, 2025', status: 'rejected' ,time:'1hr 45min',user:'Sara Khan'},
    { id: '5', title: ' Lakeview Studio', date: 'June 06, 2025', status: 'Resolved',time:'1hr 45min',user:'Sara Khan' },
    { id: '6', title: ' Lakeview Studio', date: 'June 06, 2025', status: 'validated',time:'1hr 45min',user:'Sara Khan' },
    { id: '7', title: ' Lakeview Studio', date: 'June 06, 2025', status: 'Resolved',time:'1hr 45min',user:'Sara Khan' },
    { id: '8', title: ' Lakeview Studio', date: 'June 06, 2025', status: 'Resolved',time:'1hr 45min',user:'Sara Khan' },
    { id: '9', title: ' Lakeview Studio', date: 'June 06, 2025', status: 'Resolved',time:'1hr 45min',user:'Sara Khan' },
  ];

  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <AppHeader
          title="Cleaning Validation"
          showBack={false}
          showNotification={true}
          titleSize="text-2xl"
          search={true}
          filterFields={['property','status', ]}
        />

        <ScreenContentContainer>
          <FlatList
        data={reports}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CleaningRenderItem
            title={item.title}
            date={item.date}
            status={item.status}
            user={item.user}
            time={item.time}
            navigation={navigation}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
        </ScreenContentContainer>
      </View>
    </ScreenContainer>
  );
};

export default CleaningScreen;
