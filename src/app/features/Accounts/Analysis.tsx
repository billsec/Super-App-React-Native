import { ColorValue, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
import { PieChart } from 'react-native-chart-kit';

import { LightTheme, spacing, fontSize, fontWeight, borderRadius } from './../../Theme';

const mockData = [
    {
        name: "Stocks",
        population: 61160000,
        color: LightTheme.lightPalette.mainBlue,
    },
    {
        name: "Bonds",
        population: 24110000,
        color: "#34BEE5",
    },
    {
        name: "Cash",
        population: 3420000,
        color: "#86AB58",
    },
    {
        name: "Other",
        population: 5920000,
        color: "#FFD549",
    },
    {
        name: "Not Classified",
        population: 5400000,
        color: "#E65E1A",
    }
];


export default function Analysis() {
    const layout = useWindowDimensions();

    const titleView = () => {
        return (
            <View style={{ paddingHorizontal: spacing.small }}>
                <Text style={[styles.titleText, { paddingVertical: spacing.medium }]}>Analysis Report</Text>
                <Divider></Divider>
            </View>
        );
    }

    const tableTitleView = (title: string, isExpend: boolean = true) => {
        const iconName = isExpend ? 'chevron-up' : 'chevron-down'
        return (
            <TouchableOpacity>
                <View style={{ paddingHorizontal: spacing.small }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.sectionText, { paddingVertical: spacing.medium }]}>{title}</Text>
                        <Icon name={iconName} size={28} color={LightTheme.lightPalette.mainBlue}></Icon>
                    </View>
                    <Divider></Divider>
                </View>
            </TouchableOpacity>

        );
    }

    const pieChart = () => {
        const height = 220;
        return (
            <PieChart
                data={mockData}
                width={layout.width}
                height={height}
                chartConfig={{
                    backgroundColor: "#000000",
                    backgroundGradientFrom: "#000000",
                    backgroundGradientTo: "#000000",
                    color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={'0'}
                center={[(layout.width - height) / 2, 0]}
                hasLegend={false}
                style={{
                    marginVertical: spacing.smaller,
                }}
            />
        )
    }

    const sectionTitle = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: spacing.micro, paddingHorizontal: spacing.small }}>
                <Text style={{ flex: 2 }}>Asset</Text>
                <Text style={{ flex: 1 }}>{'Net(%)'}</Text>
                <Text style={{ flex: 1 }}>{'Bmark(%)'}</Text>
            </View>
        );
    }

    const rowView = (title: string, value: number, color: string) => {
        const displayColor: ColorValue = color
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: spacing.micro, paddingHorizontal: spacing.small, paddingVertical: spacing.tiny }}>
                <View style={{ flex: 2, flexDirection: 'row', gap: spacing.micro, alignItems: 'center' }}>
                    <View style={{ width: 10, height: 10, backgroundColor: displayColor }}></View>
                    <Text style={{}}>{title}</Text>
                </View>
                <Text style={{ flex: 1 }}>{value / 1000000}</Text>
                <Text style={{ flex: 1 }}>0.00</Text>
            </View>
        );
    }

    return (
        <View>
            <ScrollView>
                <View style={{ backgroundColor: LightTheme.lightPalette.background }}>
                    {titleView()}
                    {tableTitleView('Asset Allocation')}
                    {pieChart()}
                    {sectionTitle()}
                    <FlatList style={{ paddingVertical: spacing.smaller }} data={mockData}
                        renderItem={
                            ({ item }) => rowView(item.name, item.population, item.color)
                        }>

                    </FlatList>
                    <TouchableOpacity style={{ padding: spacing.small, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: LightTheme.lightPalette.mainBlue, fontWeight: fontWeight.semiBold }}>Show long and short position</Text>
                        <Icon name='chevron-down' size={22} color={LightTheme.lightPalette.mainBlue}></Icon>
                    </TouchableOpacity>
                    {tableTitleView('World Regions', false)}
                    {tableTitleView('Other', false)}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: LightTheme.lightPalette.primaryText,
        fontSize: fontSize.xxl,
    },
    sectionText: {
        color: LightTheme.lightPalette.primaryText,
        fontSize: fontSize.md,
    },
})