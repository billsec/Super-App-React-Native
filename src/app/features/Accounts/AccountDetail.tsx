import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { LightTheme, spacing, fontSize, fontWeight, borderRadius } from './../../Theme';
import Routes from '../../constant/Routes';


export default function AccountDetail({ route, navigation }) {
    const currencySymbol = '$';
    const { totalValue, aName, aNumber, cashAvailable } = route.params;
    return (
        <View style={{ flex: 1, backgroundColor: LightTheme.lightPalette.mainBackgroundGray }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.lightGrayText, { flex: 2, padding: spacing.small, lineHeight: spacing.medium }]}>Price and valuations update at 14:35 GMT on 02/11/2020</Text>
                <TouchableOpacity style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.smaller }}>
                    <Text style={styles.whiteXSText}>Refresh</Text>
                    <Icon name="refresh" size={18} color={LightTheme.lightPalette.revertColorText} />
                </TouchableOpacity>
            </View>
            <Divider></Divider>
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: spacing.medium, marginVertical: spacing.larger }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: spacing.micro }}>
                    <Text style={styles.whiteXXXLText}>{currencySymbol + totalValue}</Text>
                    <Text style={styles.whiteXSText}>Investments + total cash</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: spacing.micro}}>
                    <Text style={styles.whiteXXLText}>{currencySymbol + cashAvailable}</Text>
                    <Text style={styles.whiteXSText}>Cash available to invest</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title='Add cash'></Button>
                <Button title='Invest now'></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lightGrayText: {
        color: LightTheme.lightPalette.mainLightGray,
        fontSize: fontSize.xs,
    },
    whiteXSText: {
        color: LightTheme.lightPalette.revertColorText,
        fontSize: fontSize.xs,
    },
    whiteXXXLText: {
        color: LightTheme.lightPalette.revertColorText,
        fontSize: fontSize.xxxl,
        fontWeight: fontWeight.regular,
    },
    whiteXXLText: {
        color: LightTheme.lightPalette.revertColorText,
        fontSize: fontSize.xxl,
        fontWeight: fontWeight.bold,
    },
})