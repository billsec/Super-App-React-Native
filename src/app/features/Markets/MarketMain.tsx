import * as React from 'react';
import { Button, RefreshControl, SafeAreaView, Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Divider from 'yd-react-native-divider';

interface Props {
  selectedIndex: number,
}

// const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   }, []);

const {width, height} = Dimensions.get('window');
const segmentHeight = 44;

export default class MarketMain extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      title: "Pull down to refresh",
      isRefreshing: false,
    }
  }

  _gotoDetial() {

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

  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <SegmentedControl
          style={{height: segmentHeight}}
          values={['UK', 'Europe', 'US', 'Asia']}
          selectedIndex={ this.state.selectedIndex }
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />
        <ScrollView style={{ marginTop: 24 }}>
            { this._quoteSection('NASDAQ', 12179.55, -77.36) }
            { this._quoteSection('S&P', 12179.55, -77.36) }
            { this._quoteSection('DJIA', 12179.55, -77.36) }
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
    marginBottom: 10,
    marginTop: 10,
  },
  priceText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 10
  },
  deltaText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 10
  }
});