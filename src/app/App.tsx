import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Routes from './constant/Routes';
import { LightTheme, DarkTheme, spacing } from './Theme';
import AccountMain from './features/Accounts/AccountMain';
import AccountDetail from './features/Accounts/AccountDetail';
import Trade from './features/Trade/Trade';
import Analysis from './features/Accounts/Analysis';
import MarketMain from './features/Markets/MarketMain';
import MarketDetail from './features/Markets/MarketDetail';
import Login from './features/Authentication/Login';
import { LogBox, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  let isLoggedIn = true;

  function Accounts() {
    return (
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name={Routes.Accounts} component={AccountMain} options={() => ({
              headerBackTitleVisible: false, headerRight: () => (
                <TouchableOpacity style={{ flexDirection: 'row-reverse', gap: spacing.smaller }}>
                  <Icon name="user" size={24} />
                  <Icon name="search1" size={24} />
                  <Icon name="menufold" size={24} />
                </TouchableOpacity>
              ), headerLeft: () => (
                <Icon name="github" size={24} color={LightTheme.lightPalette.mainBlue} />
              ),
            })} />
            <Stack.Screen name={Routes.AccountDetail} component={AccountDetail} options={() => ({ headerBackTitleVisible: false })} />
            <Stack.Screen name={Routes.Analysis} component={Analysis} />
            <Stack.Screen name={Routes.Trade} component={Trade} options={() => ({ headerBackTitleVisible: false })} />
          </Stack.Group>
        ) :
          (
            <Stack.Group>
              <Stack.Screen name={Routes.Login} component={Login} />
            </Stack.Group>
        )}


      </Stack.Navigator>
    );
  }

  function Markets() {
    return (
      <Stack.Navigator>
        <Stack.Screen name={Routes.Markets} component={MarketMain} options={() => ({
          headerBackTitleVisible: false, headerRight: () => (
            <TouchableOpacity style={{ flexDirection: 'row-reverse', gap: spacing.smaller }}>
              <Icon name="user" size={24} />
              <Icon name="search1" size={24} />
              <Icon name="menufold" size={24} />
            </TouchableOpacity>
          ), headerLeft: () => (
            <Icon name="github" size={24} color={LightTheme.lightPalette.mainBlue} />
          ),
        })} />
        <Stack.Screen name={Routes.MarketsDetail} component={MarketDetail} options={() => ({ headerBackTitleVisible: false })} />
      </Stack.Navigator>
    );
  }

  LogBox.ignoreAllLogs();

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