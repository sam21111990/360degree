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
import PropertyDetail from '../../components/cards/PropertyDetail';

const PropertyDetailScreen = ({ navigation }: any) => {

  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <AppHeader
          title="Garden Villa"
        />

        <ScreenContentContainer>
            <PropertyDetail />
        </ScreenContentContainer>
      </View>
    </ScreenContainer>
  );
};

export default PropertyDetailScreen;
