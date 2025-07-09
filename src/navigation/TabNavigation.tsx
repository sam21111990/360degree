import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/bottomTab/HomeScreen';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // Using FontAwesome 6 (Pro or Free)
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewReports from '../screens/bottomTab/ViewReports';
import AppColors from '../assets/colors/AppColors';
import PropertiesScreen from '../screens/bottomTab/PropertiesScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Active and inactive colors
const ACTIVE_COLOR = AppColors.primary; // Active icon color
const INACTIVE_COLOR = AppColors.gray; // Inactive icon color
const TAB_BG = '#FFFFFF'; // Tab background
let iconSize = 18;
// //Tab Variables Start
const reelsIconSize = 19;
const focusedColor = AppColors.primary;
const notfocusedColor = AppColors.gray;
const tabColor = AppColors.white;

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      name="ViewReports"
      component={ViewReports}
      options={{ headerShown: false }}
    /> */}
  </Stack.Navigator>
);
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: TAB_BG,
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
        tabBarItemStyle: { backgroundColor: tabColor },
        tabBarActiveTintColor: focusedColor,
        tabBarInactiveTintColor: notfocusedColor,
        tabBarHideOnKeyboard: 'true',
        tabBarPressColor: 'rgba(255,255,255,0.6)',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'house'; // FontAwesome 6 icon name
              break;
            case 'Properties':
              iconName = 'building';
              break;
            case 'Cleanings':
              iconName = 'paintbrush';
              break;
            case 'Users':
              iconName = 'users';
              break;
            case 'Profile':
              iconName = 'user-large';
              break;
            default:
              iconName = 'circle';
          }

          return (
            <Icon
              name={iconName}
              size={20}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              solid={focused} // Filled icon if focused
            />
          );
        },
        // tabBarActiveTintColor: ACTIVE_COLOR,
        // tabBarInactiveTintColor: INACTIVE_COLOR,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Properties" component={PropertiesScreen} />
      <Tab.Screen name="Cleanings" component={HomeScreen} />
      <Tab.Screen name="Users" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
