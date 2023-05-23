import { Text, View, StyleSheet, ScrollView, Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import React from 'react'
import { Button, Divider } from 'react-native-paper';

import { LightTheme, spacing, fontSize, fontWeight, borderRadius } from './../../Theme';
import Routes from '../../constant/Routes';

export default function Login() {
  return (
    <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                    <View>
                        <KeyboardAvoidingView enabled>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    source={require('../../resource/images/security.png')}
                                    style={{
                                        width: 32,
                                        height: 32,
                                        resizeMode: 'contain',
                                        margin: 30,
                                    }}
                                />
                                <Text>Log in</Text>
                            </View>
                            <View style={styles.SectionStyle}>
                                <TextInput
                                    style={styles.inputStyle}
                                    onChangeText={(UserEmail) =>
                                        {}
                                    }
                                    placeholder="Username" //dummy@abc.com
                                    placeholderTextColor="#8b9cb5"
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    onSubmitEditing={() => {}}
                                    underlineColorAndroid="#f000"
                                    blurOnSubmit={false}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../resource/images/unchecked.png')}
                                    style={{
                                        width: 32,
                                        height: 32,
                                        resizeMode: 'contain',
                                        marginLeft: 30,
                                        marginRight: 6,
                                    }}
                                />
                                <Text>Remember my username</Text>
                            </View>
                            <View style={styles.SectionStyle}>
                                <TextInput
                                    style={styles.inputStyle}
                                    onChangeText={(UserPassword) =>
                                      {}
                                    }
                                    placeholder="Password" //12345
                                    placeholderTextColor="#8b9cb5"
                                    keyboardType="default"
                                    ref={() => {}}
                                    onSubmitEditing={Keyboard.dismiss}
                                    blurOnSubmit={false}
                                    secureTextEntry={true}
                                    underlineColorAndroid="#f000"
                                    returnKeyType="next"
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                activeOpacity={0.5}
                                onPress={() => {}}>
                                <Text style={styles.buttonTextStyle}>Log in</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', marginBottom: 32 }}>
                                <Text
                                    onPress={() => {}}>
                                    Have a Super account, but no online access?
                                </Text>
                                <Text style={styles.registerTextStyle}>Register for online access now</Text>
                            </View>

                            <Divider ></Divider>

                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', margin: 16 }}>
                                <Text style={{ color: LightTheme.lightPalette.mainBlue, lineHeight: 24, marginBottom: 12 }} >Client terms    Security & Privacy    Accessibility    Cookie Policy    Important Legal Infomation</Text>
                                <Text>© Super Limited 2023</Text>
                            </View>

                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: LightTheme.lightPalette.background
  },
  titleText: {
      color: LightTheme.lightPalette.mainBlue,
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
  },
  SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
  },
  buttonStyle: {
      backgroundColor: 'gray',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',

      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
  },
  buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
      fontWeight: 'bold',
  },
  inputStyle: {
      flex: 1,
      color: 'black',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderColor: 'black',
  },
  registerTextStyle: {
      color: LightTheme.lightPalette.mainBlue,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
  },
});