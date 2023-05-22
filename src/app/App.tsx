import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Routes from './constant/Routes';
import { LightTheme, DarkTheme } from './Theme';
import AccountMain from './features/Accounts/AccountMain';
import Trade from './features/Trade/Trade';
import MarketMain from './features/Markets/MarketMain';
import MarketDetail from './features/Markets/MarketDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Accounts() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Accounts} component={AccountMain} />
      <Stack.Screen name={Routes.Trade} component={Trade} />
    </Stack.Navigator>
  );
}

function Markets({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Markets} component={MarketMain} />
      <Stack.Screen name={Routes.MarketsDetail} component={MarketDetail} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: LightTheme.lightPalette.mainBlue,
          tabBarInactiveTintColor: LightTheme.lightPalette.primaryText,
        }}
      >
        <Tab.Group screenOptions={{ headerShown: false }}>
          <Tab.Screen name={Routes.AccountsTab} component={Accounts} options={{
            tabBarLabel: 'Accounts',
            tabBarIcon: () => (
              <Icon name="home" size={24} />
            ),
          }}
          />
          <Tab.Screen name={Routes.MarketsTab} component={Markets} options={{
            tabBarLabel: 'Markets',
            tabBarIcon: () => (
              <Icon name="linechart" size={24} />
            ),
          }}
          />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;