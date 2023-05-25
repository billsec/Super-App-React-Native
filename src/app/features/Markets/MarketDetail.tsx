import { ScrollView, StyleSheet, Text, View, useWindowDimensions, ColorValue } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { LineChart } from 'react-native-chart-kit';

import { LightTheme, spacing, fontSize, fontWeight } from './../../Theme';

export default function MarketDetail({ route }) {
  const layout = useWindowDimensions();
  const {title, price, delta, dPercent} = route.params
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'oneDay', title: '1D' },
    { key: 'oneWeek', title: '1W' },
    { key: 'oneMonth', title: '1M' },
    { key: 'sixMonth', title: '6M' },
    { key: 'oneYear', title: '1Y' },
    { key: 'fiveYear', title: '5Y' },
  ]);

  const mockDataLabel = ["09:20", "10:25", "11:25", "01:15", "02:15", "03:15"];

  function getRandomArr(n: number, value: string) {
    const priceArr = value.match(/\d+\.\d+/g)
    const roundMaxPrice = Math.round(priceArr[0])
    const roundMinPrice = Math.round(priceArr[0] * 0.99)
    let data: number[] = []
    for (let i = 0; i < n; i++) {
      data[i] = Math.random() * (roundMaxPrice - roundMinPrice) + roundMinPrice
    }
    return data
  }

  const displayTime = () => {
    const nowDate = new Date()
    const hourString = nowDate.getHours()
    const minString = nowDate.getMinutes()
    const dateString = nowDate.toLocaleDateString()
    return hourString + ':' + minString + ' GMT on ' + dateString
}

  const indexRow = (title: string, price: string, delta: string, dPercent: string) => {
    const color: ColorValue = delta > 0 ? LightTheme.lightPalette.upGreen : LightTheme.lightPalette.downRed;
    return (
      <View>
        <View style={{ alignItems: 'center', gap: spacing.small, margin: spacing.large }}>
          <View style={{ flexDirection: 'row', gap: spacing.smaller, alignItems: 'center' }}>
            <Text style={styles.titleText}>{title}</Text>
            <Icon name='chevron-down' size={22} color={LightTheme.lightPalette.mainBlue}></Icon>
          </View>
          <Text style={styles.priceText}>{price}</Text>
          <Text style={[styles.deltaText, {color: color}]}>{delta + ' ' + dPercent + '%'}</Text>
        </View>
        <Divider />
      </View>
    );
  }

  const timeRow = () => {
    return (
      <View style={{ flexDirection: 'row', paddingVertical: spacing.larger, paddingHorizontal: spacing.small }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: spacing.smaller }}>
          <View style={styles.circle}></View>
          <Text style={styles.secondaryText}>Market closed</Text>
        </View>
        <Text style={[styles.secondaryText, { flex: 1 }]}>{'Last updated at ' + displayTime()}</Text>
      </View>
    )
  }

  const previousTimeRow = () => {
    return (
      <View style={{ flexDirection: 'row', paddingVertical: spacing.medium, paddingHorizontal: spacing.small, justifyContent:'space-between', alignItems:'center' }}>
        <Text style={[styles.secondaryText, { flex: 1, fontWeight: fontWeight.bold }]}>Previous close</Text>
        <Text style={[styles.secondaryText, { flex: 1 }]}>{price}</Text>
      </View>
    )
  }

  const chartView = () => {
    const chartHeight = 280;
    return (
      <View style={{justifyContent: 'center', alignItems:'center', borderColor: LightTheme.lightPalette.divider, borderWidth: 1, paddingVertical: spacing.small, marginHorizontal: spacing.small}}>
        <LineChart
        data={{
          labels: mockDataLabel,
          datasets: [
            {
              data: getRandomArr(48, price)
            }
          ]
        }}
        width={layout.width - spacing.small * 2 - 16}
        height={chartHeight}
        withVerticalLines={false}
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          fillShadowGradientFrom: LightTheme.lightPalette.mainBlue,
          fillShadowGradientOpacity: 1,
          fillShadowGradientTo: LightTheme.lightPalette.mainBlue,
          color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "0",
            strokeWidth: "0",
          }
        }}
      />
      <Text style={{color: LightTheme.lightPalette.secondaryText}}>X axis - Chosen time period</Text>
      <Text style={{color: LightTheme.lightPalette.secondaryText}}>Y axis - Index price</Text>
      </View>
    );
  }

  const renderScene = SceneMap({
    oneDay: chartView,
    oneWeek: chartView,
    oneMonth: chartView,
    sixMonth: chartView,
    oneYear: chartView,
    fiveYear: chartView,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      labelStyle={{ color: LightTheme.lightPalette.primaryText }}
      indicatorStyle={{ backgroundColor: LightTheme.lightPalette.mainBlue }}
      style={{ backgroundColor: LightTheme.lightPalette.background }}
    />
  );

  const chartTitleView = () => {
    return (
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    )
  }

  return (
    <ScrollView style={{ backgroundColor: LightTheme.lightPalette.background }}>
      {indexRow(title, price, delta, dPercent)}
      {timeRow()}
      <Divider></Divider>
      <Text style={{ paddingVertical: spacing.larger, alignSelf: 'center', fontSize: fontSize.xl, fontWeight: fontWeight.semiBold }}>Index price by chosen time period</Text>
      <Divider></Divider>
      <View style={{ flexDirection: 'row', gap: spacing.smaller, paddingVertical: spacing.large, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.secondaryText}>Rotate for chart</Text>
        <Icon name='phone-rotate-landscape' size={18} color={LightTheme.lightPalette.secondaryText}></Icon>
      </View>
      <View style={{ paddingHorizontal: spacing.small }}>
        {chartTitleView()}
      </View>
      {chartView()}
      {previousTimeRow()}
      <Divider></Divider>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    color: LightTheme.lightPalette.mainBlue,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
  },
  priceText: {
    color: LightTheme.lightPalette.primaryText,
    fontSize: 38,
    fontWeight: fontWeight.light,
  },
  deltaText: {
    color: LightTheme.lightPalette.downRed,
    fontSize: fontSize.lg,
  },
  secondaryText: {
    color: LightTheme.lightPalette.secondaryText,
    fontSize: fontSize.md,
  },
  circle: {
    width: 12,
    height: 12,
    backgroundColor: LightTheme.lightPalette.downRed,
    borderRadius: 6,
  }
})