/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import OrderPage from './pages/OrderPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.parentView}>
        <Text style={styles.header}>野球スタメンアプリ</Text>
        <OrderPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  header: {
    height: 40,
    fontSize: 40,
    backgroundColor: '#009933',
  },
});
