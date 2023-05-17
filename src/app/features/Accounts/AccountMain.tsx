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

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

export default class AccountMain extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <SafeAreaView>
        <View style={{ height: 60 }}>
          <Text style={{ fontSize: 24, margin: 16 }}>Analysis Report</Text>
        </View>
        <Divider width={2}></Divider>
        <View style={{ height: 60 }}>
          <Text style={{ fontSize: 16, margin: 16 }}>Asset Allocation</Text>
        </View>
        <Divider width={2}></Divider>

        <PieChart
          data={data}
          width={width}
          height={240}
          chartConfig={{
            backgroundColor: "#000000",
            backgroundGradientFrom: "#000000",
            backgroundGradientTo: "#000000",
            color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 50]}
          absolute
        />
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