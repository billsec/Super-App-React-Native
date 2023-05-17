import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketDetail from './features/Markets/MarketDetail';
import MarketMain from './features/Markets/MarketMain';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator
        initialRouteName="Markets"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen
          name="MarketMain"
          component={MarketMain}
          options={{
            title: 'Markets',
          }}
        />
        <Stack.Screen
          name="MarketDetail"
          component={MarketDetail}
          options={{
            title: 'Markets',
          }}
        />
      </Stack.Navigator>
    );
  }