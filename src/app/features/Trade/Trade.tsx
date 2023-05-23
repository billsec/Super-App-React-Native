import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { LightTheme, spacing, fontSize, fontWeight, borderRadius } from './../../Theme';
import Routes from '../../constant/Routes';

export default function Trade() {
  return (
    <View style={{backgroundColor: LightTheme.lightPalette.background, padding: spacing.small}}>
      <Text style={{fontSize: fontSize.xxxl, fontWeight: fontWeight.ultraLight}}>Buy, Sell, Swich</Text>
    </View>
  )
}

const styles = StyleSheet.create({})