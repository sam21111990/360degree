import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppProvider } from './src/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/screens/splash/SplashScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import HomeScreen from './src/screens/bottomTab/HomeScreen';
import TabNavigation from './src/navigation/TabNavigation';
import ViewReports from './src/screens/bottomTab/ViewReports';
// in App.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import IssueDetailScreen from './src/screens/bottomTab/IssueDetailScreen';
import PropertyDetailScreen from './src/screens/bottomTab/PropertyDetailScreen';
import CreateNewPropertyScreen from './src/components/cards/CreateNewPropertyScreen';
import CreateChecklistTemplate from './src/components/cards/CreateChecklistTemplate';

library.add(fab, faSquareCheck, faMugSaucer);
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
const App = () => {
  return (
    <AppProvider>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="AuthStack"
          >
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TabScreens"
              component={TabNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewReports"
              component={ViewReports}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IssueDetailScreen"
              component={IssueDetailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PropertyDetailScreen"
              component={PropertyDetailScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateNewPropertyScreen"
              component={CreateNewPropertyScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateChecklistTemplate"
              component={CreateChecklistTemplate}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
};
export default App;
