import { StyleSheet, Text, View, TouchableOpacity, ScrollView, useWindowDimensions, ColorValue } from 'react-native'
import React from 'react'
import { Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { LightTheme, spacing, fontSize, fontWeight } from './../../Theme';
import Routes from '../../constant/Routes';



export default function AccountDetail({ route, navigation }) {
    const currencySymbol = '$';
    const layout = useWindowDimensions();

    const displayTime = () => {
        const nowDate = new Date()
        const hourString = nowDate.getHours()
        const minString = nowDate.getMinutes()
        const dateString = nowDate.toLocaleDateString()
        return hourString + ':' + minString + ' GMT on ' + dateString
    }
    
    const { totalValue, aName, aNumber, cashAvailable } = route.params;

    const titleView = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[styles.lightGrayText, { flex: 2, padding: spacing.small, lineHeight: spacing.small }]}>{'Price and valuations update at ' + displayTime()}</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.smaller }}>
                        <Text style={styles.whiteXSText}>Refresh</Text>
                        <Icon name="refresh" size={18} color={LightTheme.lightPalette.revertColorText} />
                    </TouchableOpacity>
                </View>
                <Divider></Divider>
            </View>
        );
    }

    const performanceTitle = () => {
        return (
            <View style={{ justifyContent: 'center'}}>
                <Text style={[styles.whiteXXLText, {padding: 18, alignSelf: 'center'}]}>Performance</Text>
                <Divider></Divider>
            </View>
        );
    }

    const indicatorView = (index: number) => {
        const color: ColorValue = index == 0 ? LightTheme.lightPalette.mainBlue : LightTheme.lightPalette.revertColorText;
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: spacing.medium, paddingVertical: spacing.medium }}>
                <TouchableOpacity style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color }}></TouchableOpacity>
                <TouchableOpacity style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color }}></TouchableOpacity>
            </View>
        );
    }

    const footView = (title: string, index: number) => {
        return (
            <View>
                {indicatorView(index)}
                <Button mode='contained' buttonColor={LightTheme.lightPalette.revertColorText} textColor={LightTheme.lightPalette.mainBlue} style={{ borderRadius: 0, paddingVertical: spacing.micro }} labelStyle={{ fontWeight: fontWeight.semiBold }} onPress={() => { 
                    if (index == 0) {
                        
                    } else {
                        navigation.push(Routes.Analysis)
                    }
                }}>{title}</Button>
                <Divider></Divider>
            </View>
        );
    }

    const valueView = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: spacing.medium }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: spacing.micro }}>
                    <Text style={styles.whiteXXXLText}>{currencySymbol + totalValue}</Text>
                    <Text style={styles.whiteXSText}>Investments + total cash</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: spacing.micro }}>
                    <Text style={styles.whiteXXLText}>{currencySymbol + cashAvailable}</Text>
                    <Text style={styles.whiteXSText}>Cash available to invest</Text>
                </View>

            </View>
        );
    }

    const performanceValueView = () => {
        return (
            <View  style={{ justifyContent: 'center', gap: spacing.larger }}>
                {valueRow('Gain/loss', 89154.44, false)}
                <Divider></Divider>
                {valueRow('Total return', 22.94, true)}
                <Divider></Divider>
                {valueRow('Annualised return (%)', 7.27, true)}
            </View>
        )
    }

    const valueRow = (title: string, value: number, isPercent: boolean) => {
        const displayValue = isPercent ? value + '%' : currencySymbol + value
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: spacing.small }}>
                <Text style={styles.whiteXSText}>{title}</Text>
                <Text style={styles.valueText}>{displayValue}</Text>
            </View>
        )
    }

    const actionView = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: spacing.medium }}>
                <Button mode='contained' buttonColor={LightTheme.lightPalette.mainGreen} textColor={LightTheme.lightPalette.mainBackgroundGray} style={{ borderRadius: 0 }} onPress={() => { }}>Add cash</Button>
                <Button mode='contained' buttonColor={LightTheme.lightPalette.revertColorText} textColor={LightTheme.lightPalette.mainBackgroundGray} style={{ borderRadius: 0 }} onPress={() => { navigation.push(Routes.Trade) }}>Invest now</Button>
            </View>
        );
    }

    return (
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.scrollContent, {width: layout.width}]}>
                    {titleView()}
                    {valueView()}
                    {actionView()}
                    {footView('Show customer reference number', 0)}
                </View>
                <View style={[styles.scrollContent, {width: layout.width}]}>
                    {performanceTitle()}
                    {performanceValueView()}
                    {footView('See account holding report', 1)}
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scrollContent: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: LightTheme.lightPalette.mainBackgroundGray,
    },
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
        fontSize: 42,
        fontWeight: fontWeight.regular,
    },
    whiteXXLText: {
        color: LightTheme.lightPalette.revertColorText,
        fontSize: fontSize.xxl,
        fontWeight: fontWeight.regular,
    },
    valueText: {
        color: LightTheme.lightPalette.mainGreen,
        fontSize: fontSize.xxxl,
    },
})