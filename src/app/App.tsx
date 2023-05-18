import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountMain from './features/Accounts/AccountMain'
import MarketMain from './features/Markets/MarketMain'
import MarketDetail from './features/Markets/MarketDetail';
import LoginScreen from './features/Authentication/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Markets" component={MarketMain} />
        <Tab.Screen name="Detail" component={MarketDetail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}