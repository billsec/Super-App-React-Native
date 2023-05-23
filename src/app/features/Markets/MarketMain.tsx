import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { LightTheme, spacing, fontSize, fontWeight } from './../../Theme';
import Routes from '../../constant/Routes';

const mockData = [[{ 'symbol': 'NASDAQ' }], [], [], []]

export default function MarketMain({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'UK', title: 'UK' },
    { key: 'Europe', title: 'Europe' },
    { key: 'US', title: 'US' },
    { key: 'Asia', title: 'Asia' },
  ]);

  function IndexRow(title: string, price: number, delta: number) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.MarketsDetail)}>
        <View style={{ alignItems: 'center', gap: spacing.small, margin: spacing.medium }}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.priceText}>{price + ' USD'}</Text>
          <Text style={styles.deltaText}>{delta + ' (-0.17%)'}</Text>
        </View>
        <Divider />
      </TouchableOpacity>
    );
  }

  function MarketView() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch', backgroundColor: LightTheme.lightPalette.background, paddingVertical: spacing.large }}>
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
    color: LightTheme.lightPalette.mainBlue,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  priceText: {
    color: LightTheme.lightPalette.primaryText,
    fontSize: fontSize.xxl,
  },
  deltaText: {
    color: LightTheme.lightPalette.downRed,
    fontSize: fontSize.lg,
  }
});

