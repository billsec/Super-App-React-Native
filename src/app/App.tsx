import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountMain from './features/Accounts/AccountMain';
import Trade from './features/Trade/Trade';
import MarketMain from './features/Markets/MarketMain';
import MarketDetail from './features/Markets/MarketDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Accounts() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accounts" component={AccountMain} />
      <Stack.Screen name="Trade" component={Trade} />
    </Stack.Navigator>
  );
}

function Markets() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Markets" component={MarketMain} />
      <Stack.Screen name="Detail" component={MarketDetail} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Group screenOptions={{ headerShown: false }}>
          <Tab.Screen name="AccountsRoot" component={Accounts} options={{ title: 'Accounts' }} />
          <Tab.Screen name="MarketsRoot" component={Markets} options={{ title: 'Markets' }} />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;