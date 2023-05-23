import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, useWindowDimensions, ColorValue } from 'react-native';
import { Divider, List } from 'react-native-paper';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { LightTheme, spacing, fontSize, fontWeight } from './../../Theme';
import Routes from '../../constant/Routes';

const mockData = [
  [{ title: 'FTSE 100', value: '7799.92', detal: '28.93', detalPercent: '(0.37)' },
  { title: 'FTSE 200', value: '19277.33', detal: '3.99', detalPercent: '(0.02)' },
  { title: 'FTSE 100', value: '4247.47', detal: '13.33', detalPercent: '(0.31)' },],
  [{ title: 'DAX', value: '16177.95', detal: '-46.04', detalPercent: '(-0.28)' },
  { title: 'CAC 40', value: '7407.47', detal: '-7.69', detalPercent: '(-0.95)' },
  { title: 'AEX', value: '768.33', detal: '0.72', detalPercent: '(0.09)' },],
  [{ title: 'NASDAQ', value: '12720.78', detal: '62.88', detalPercent: '(0.49)' },
  { title: 'S&P 500', value: '4192.63', detal: '0.65', detalPercent: '(0.01)' },
  { title: 'DJIA', value: '33286.58', detal: '-140.05', detalPercent: '(-0.42)' },],
  [{ title: 'Hang Seng', value: '19431.25', detal: '-246.92', detalPercent: '(-1.27)' },
  { title: 'Nikkei 225', value: '30957.77', detal: '-129.05', detalPercent: '(-0.41)' },
  { title: 'Japan Topix', value: '2161.49', detal: '-14.41', detalPercent: '-(0.66)' },],
];

export default function MarketMain({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'UK', title: 'UK' },
    { key: 'Europe', title: 'Europe' },
    { key: 'US', title: 'US' },
    { key: 'Asia', title: 'Asia' },
  ]);

  function IndexRow(title: string, price: string, delta: string, dPercent: string) {
    const color: ColorValue = delta > 0 ? LightTheme.lightPalette.upGreen : LightTheme.lightPalette.downRed;
    return (
      
      <TouchableOpacity onPress={() => navigation.navigate(Routes.MarketsDetail)}>
        <View style={{ alignItems: 'center', gap: spacing.small, margin: spacing.medium }}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.priceText}>{price}</Text>
          <Text style={[styles.deltaText, {color: color}]}>{delta + ' ' + dPercent + '%'}</Text>
        </View>
        <Divider />
      </TouchableOpacity>
    );
  }



  function MarketView(index: number) {
    const data = mockData[index]
    let currency = ''
    switch (index) {
      case 0:
        currency = 'GBP'
        break
      case 1:
        currency = 'EUR'
        break
      case 2:
        currency = 'USD'
        break
      case 3:
        currency = 'HKD'
        break
    }
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch', backgroundColor: LightTheme.lightPalette.background, paddingVertical: spacing.large }}>
        {IndexRow(data[0].title, data[0].value + ' ' + currency, data[0].detal, data[0].detalPercent)}
        {IndexRow(data[1].title, data[1].value + ' ' + currency, data[1].detal, data[1].detalPercent)}
        {IndexRow(data[2].title, data[2].value + ' ' + currency, data[2].detal, data[2].detalPercent)}
      </View>
    );
  }

  // const renderScene = SceneMap({
  //   UK: marketView(0),
  //   Europe: MarketView(1),
  //   US: MarketView(2),
  //   Asia: MarketView(3),
  // });

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'UK':
        return MarketView(0)
      case 'Europe':
        return MarketView(1)
      case 'US':
        return MarketView(2)
      case 'Asia':
        return MarketView(3)
    }
  }

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

