import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../components/headers/AuthHeader';
import RecentReports from '../../components/cards/RecentReports';
import Footer from '../../components/footer/Footer';
import TopCard from '../../components/cards/TopCard';
import ScreenContainer from '../../components/containers/ScreenContainer';
import HomeHeader from '../../components/headers/HomeHeader';
import ScreenContentContainer from '../../components/containers/ScreenContentContainer';
import AppHeader from '../../components/headers/AppHeader';


const HomeScreen = ({navigation}:any) => {
  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <HomeHeader welcom="👋 Welcome," title="Viva Host"  />
        {/* <AppHeader title='Reported Issues'/> */}
        <ScreenContentContainer>
        <RecentReports navigation={navigation}/>
        </ScreenContentContainer>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;