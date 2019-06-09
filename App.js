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
import FieldPage from './pages/FieldPage';
import { createStackNavigator, createAppContainer } from "react-navigation";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: OrderPage,
    Field: FieldPage
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);