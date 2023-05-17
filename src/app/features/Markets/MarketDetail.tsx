import * as React from 'react';
import { Button, RefreshControl, SafeAreaView, Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Divider from 'yd-react-native-divider';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

interface Props {
    selectedIndex: number
}

const { width, height } = Dimensions.get('window');
const segmentHeight = 44;

export default class MarketDetail extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    _quoteSection(title: string, price: number, delta: number) {
        return (
            <View style={{ height: (height - segmentHeight * 3) / 3, alignItems: 'center' }}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.priceText}>{price + ' USD'}</Text>
                <Text style={styles.deltaText}>{delta + ' (-0.17%)'}</Text>
                <Divider width={2}></Divider>
            </View>
        );
    }

    _chartSection() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{ margin: 10 }}>Rotate for chart</Text>
                <LineChart
                    data={{
                        labels: ["09:20", "10:20", "11:20", "12:20", "13:20", "14:20", "15:20", "16:20", "17:20"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 12100,
                                    Math.random() * 12100,
                                    Math.random() * 12100,
                                    Math.random() * 12100,
                                    Math.random() * 12100,
                                    Math.random() * 12100,
                                    Math.random() * 12100,
                                    Math.random() * 12100,
                                    Math.random() * 12100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#FFFFFF",
                        backgroundGradientFrom: "#FFFFFF",
                        backgroundGradientTo: "#FFFFFF",
                        fillShadowGradientFrom: '#0070AA',
                        fillShadowGradientTo: '#0070AA',
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(1, 1, 1, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 0
                        },
                        propsForDots: {
                            r: "0",
                            strokeWidth: "0",
                            stroke: "#0070AA"
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 0
                    }}
                />
            </View>
        );
    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center', backgroundColor: '#30363F', height: 44 }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 6 }}>Markets</Text>
                </View>
                <ScrollView>
                    {this._quoteSection('NASDAQ ', 12179.55, -77.36)}
                    <View style={{ flexDirection: 'row', height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.circle}></View>
                            <Text style={styles.secondaryText}>Market closed</Text>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center' }}>
                            <Text style={styles.secondaryText}>Last updated at 16:00 on 10/05/23</Text>
                        </View>

                    </View>
                    <Divider width={2}></Divider>
                    <View style={{ alignSelf: 'center', height: 100 }}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 36 }}>Index price by chosen time period</Text>
                    </View>
                    <Divider width={2}></Divider>
                    {this._chartSection()}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    titleText: {
        color: '#0070AA',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
    },
    priceText: {
        color: 'black',
        fontSize: 38,
        fontWeight: '400',
        marginBottom: 30
    },
    deltaText: {
        color: 'red',
        fontSize: 18,
        marginBottom: 30
    },
    secondaryText: {
        color: 'gray',
        fontSize: 16,
    },
    circle: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 12,
        height: 12,
        backgroundColor: 'red',
        borderColor: 'green',
        borderStyle: 'solid',
        borderRadius: 6,
    }
});