import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { LightTheme, DarkTheme } from './../../Theme';

function IndexRow(title: string, price: number, delta: number) {
  return (
    <TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.priceText}>{price + ' USD'}</Text>
        <Text style={styles.deltaText}>{delta + ' (-0.17%)'}</Text>
        <Divider></Divider>
      </View>
    </TouchableOpacity>
  );
}

function MarketView() {
  return (
    <View>
      {IndexRow('NASDAQ', 12179.55, -77.36)}
      {IndexRow('NASDAQ', 12179.55, -77.36)}
      {IndexRow('NASDAQ', 12179.55, -77.36)}
    </View>
  );
}

const renderScene = SceneMap({
  UK: MarketView,
  Europe: MarketView,
  US: MarketView,
  Asia: MarketView,
});

export default function MarketMain({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'UK', title: 'UK' },
    { key: 'Europe', title: 'Europe' },
    { key: 'US', title: 'US' },
    { key: 'Asia', title: 'Asia' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      labelStyle={{ color: LightTheme.lightPalette.primaryText }}
      indicatorStyle={{ backgroundColor: LightTheme.lightPalette.mainBlue }}
      style={{ backgroundColor: LightTheme.lightPalette.background }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: '#0070AA',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  priceText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 10
  },
  deltaText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 10
  }
});

