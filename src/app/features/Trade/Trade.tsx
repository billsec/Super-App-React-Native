import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';

import { LightTheme, spacing, fontSize, fontWeight, borderRadius } from './../../Theme';
import Routes from '../../constant/Routes';

export default function Trade() {

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={{ backgroundColor: LightTheme.lightPalette.background, padding: spacing.small }}>
      <Text style={{ fontSize: fontSize.xxxl, fontWeight: fontWeight.ultraLight }}>Buy, Sell, Switch</Text>
      <TouchableOpacity style={{ paddingHorizontal: spacing.small, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: LightTheme.lightPalette.divider, paddingVertical: spacing.large, marginVertical: spacing.large }}>
        <Text style={{ color: LightTheme.lightPalette.mainBlue, fontWeight: fontWeight.regular }}>Select the account you'd like to use</Text>
        <Icon name='chevron-down' size={22} color={LightTheme.lightPalette.mainBlue}></Icon>
      </TouchableOpacity>

      <Text style={{ marginVertical: spacing.large }}>What would you like to do today?</Text>
      <TouchableOpacity style={{ backgroundColor: LightTheme.lightPalette.mainBlue, opacity: 0.3, alignItems: 'center', gap: spacing.smaller, paddingVertical: spacing.medium, marginVertical: spacing.smaller }}>
        <Icon name="ios-arrow-back" size={18} color={LightTheme.lightPalette.revertColorText} />
        <Text style={{ color: LightTheme.lightPalette.revertColorText }} >Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ opacity: 0.5, alignItems: 'center', gap: spacing.smaller, paddingVertical: spacing.medium, marginVertical: spacing.smaller, borderWidth: 1, borderColor: LightTheme.lightPalette.mainBlue }}>
        <Icon name="ios-arrow-forward" size={18} color={LightTheme.lightPalette.mainGray} />
        <Text style={{ color: LightTheme.lightPalette.mainGray }} >Sell</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ opacity: 0.5, alignItems: 'center', gap: spacing.smaller, paddingVertical: spacing.medium, marginVertical: spacing.smaller, borderWidth: 1, borderColor: LightTheme.lightPalette.mainBlue }}>
        <Icon name="md-swap-horizontal" size={18} color={LightTheme.lightPalette.mainGray} />
        <Text style={{ color: LightTheme.lightPalette.mainGray }} >Switch</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});