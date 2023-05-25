import { StyleSheet, Text, View, FlatList, RefreshControl, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import { LightTheme, spacing, fontSize, fontWeight, borderRadius } from './../../Theme';
import Routes from '../../constant/Routes';

const currencySymbol = '$';
const mockData: [string: any] = [
  { 'aName': 'Hamiltom Knight Associates Ltd - 372161', 'aType': 'Investment ISA', 'aNumber': 'SHEX002915', 'totalValue': 47245.71, 'cashAvailableToInvest': 33478.21 },
  { 'aName': 'Hamiltom Knight Associates Ltd - 372161', 'aType': 'Cash Management Account', 'aNumber': 'AWM0064750', 'totalValue': 390.82, 'cashAvailableToInvest': 186.22 },
  { 'aName': 'Hamiltom Knight Associates Ltd - 372161', 'aType': 'Investment ISA', 'aNumber': 'SHEX729304', 'totalValue': 4745.71, 'cashAvailableToInvest': 3378.21 }];

export default function AccountMain({ navigation }) {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  function valueItem(title: string, value: string) {
    return (
      <View style={{ gap: spacing.micro }}>
        <Text style={styles.valueText}>{value}</Text>
        <Text style={styles.valueLableText}>{title}</Text>
      </View>
    );
  }

  const listItem = (item: [string: any]) => {
    return (
      <View style={{ marginVertical: spacing.smaller, marginHorizontal: spacing.small }}>
        <TouchableOpacity onPress={() => navigation.push(Routes.AccountDetail, {
          totalValue: item['totalValue'],
          aName: item['aName'],
          aNumber: item['aNumber'],
          cashAvailable: item['cashAvailableToInvest'],
        })} style={{ borderWidth: 1, borderColor: LightTheme.lightPalette.divider, padding: spacing.small }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ gap: spacing.smaller }}>
              <Text style={styles.aNameText}>{item['aName']}</Text>
              <Text style={styles.aTypeText}>{item['aType']}</Text>
              <Text style={styles.aNumberText}>{item['aNumber']}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', marginTop: spacing.small }}>
                {valueItem('Total Value', currencySymbol + item['totalValue'])}
                {valueItem('Cash available to invest', currencySymbol + item['cashAvailableToInvest'])}
              </View>
            </View>
            <Icon name="right" size={24} color={LightTheme.lightPalette.secondaryText} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const listFooter = () => {
    return (
      <View style={{ marginVertical: spacing.smaller, marginHorizontal: spacing.small }}>
        <TouchableOpacity onPress={() => navigation.push(Routes.AccountDetail, {
          totalValue: item['totalValue'],
          aName: item['aName'],
          aNumber: item['aNumber'],
          cashAvailable: item['cashAvailableToInvest'],
        })} style={{ borderWidth: 1, borderColor: LightTheme.lightPalette.divider, padding: spacing.small }}>
          <View style={{ gap: spacing.small }}>
              <Text style={styles.footerText}>Start planning for retirement with a Super SIPP</Text>
              <Text style={{ alignSelf: 'flex-start', color: LightTheme.lightPalette.mainGray, backgroundColor: LightTheme.lightPalette.mainGreen, padding: spacing.small }}>View your options here</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
  }

  const headerView = () => {
    return (
      <View style={{backgroundColor: LightTheme.lightPalette.mainGray}}>
        <Text style={{color: LightTheme.lightPalette.revertColorText, fontSize: fontSize.lg, paddingHorizontal: spacing.small, paddingVertical: spacing.small, fontWeight: fontWeight.semiBold}}>All accounts</Text>

      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: LightTheme.lightPalette.background}} >
      <FlatList data={mockData}
        renderItem={
          ({ item }) =>
            listItem(item)
        }
        ListFooterComponent={() => listFooter()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{paddingVertical: spacing.small }}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  aNameText: {
    color: LightTheme.lightPalette.mainGray,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
  },
  aTypeText: {
    color: LightTheme.lightPalette.mainBlue,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
  aNumberText: {
    color: LightTheme.lightPalette.secondaryText,
    fontSize: fontSize.sm,
  },
  valueText: {
    color: LightTheme.lightPalette.secondaryText,
    fontSize: fontSize.md,
  },
  valueLableText: {
    color: LightTheme.lightPalette.secondaryText,
    fontSize: fontSize.xs,
  },
  footerText: {
    color: LightTheme.lightPalette.mainGray,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
})