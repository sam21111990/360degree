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

const PropertiesScreen = ({ navigation }: any) => {
  const properties = [
    {
      id: '1',
      name: 'Garden Villa',
      location: '12A Garden Street, Lahore',
      status: 'Active',
      owner: 'Owner: Imran Sheikh. ',
      date: 'Next Cleaning Date: June 20, 2025',
      image: require('../../assets/images/gardenVilla.png'),
    },
    {
      id: '2',
      name: 'Seaside Cottage',
      location: '12A Garden Street, Lahore',
      status: 'Available',
      owner: 'Owner: Imran Sheikh. ',
      date: 'Next Cleaning Date: June 20, 2025',
      image: require('../../assets/images/building.png'),
    },
  ];

  return (
    <ScreenContainer>
      <StatusBar barStyle="light-content" />
      <View className="flex-1">
        <AppHeader
          title="All Properties"
          showBack={false}
          showNotification={true}
          titleSize="text-2xl"
          search={true}
          filterFields={['sortBy','status', ]}
        />

        <ScreenContentContainer>
          <FlatList
            data={properties}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PropertiesRenderItem
                key={item.id}
                name={item.name}
                location={item.location}
                status={item.status}
                owner={item.owner}
                date={item.date}
                image={item.image}
                navigation={navigation}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </ScreenContentContainer>
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            right: 20,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
            // backgroundColor: '#007AFF',
            // width: 60,
            // height: 60,
            // shadowColor: AppColors.primary,
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.1,
            // shadowRadius: 1,
          }}
          className="ml-3"
        >
          <IconContainer
            type="AntDesign"
            name="plus"
            color="#fff"
            size={24}
            padding={14}
            backgroundColor={AppColors.primary}
            onPress={() => navigation.navigate('CreateNewPropertyScreen')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default PropertiesScreen;
