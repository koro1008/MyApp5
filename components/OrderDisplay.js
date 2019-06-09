import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, TextInput, Button } from 'react-native';

export default class OrderDisplay extends React.Component {

  render() {
    return (
      <View style={styles.orderPart}>
        <View style={styles.playerContainer}>
          <Button style={styles.numberButton} title="１番"></Button>
          <Text style={styles.position}>---</Text>
          <Text style={styles.playerName}>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="２番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="３番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="４番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="５番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="６番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="７番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="８番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
        <View style={styles.playerContainer}>
          <Button title="９番"></Button>
          <Text>---</Text>
          <Text>----</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  orderPart: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  playerContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#b0c4de',
    margin: 5,
  },
  numberButton: {
    height: 40,
    margin: 0,
  },
  position: {
    margin: 0,
    height: 40,
    backgroundColor: '#FFF',
  },
  playerName: {
    margin: 0,
    height: 40,
    backgroundColor: '#FFF',
  },

})



