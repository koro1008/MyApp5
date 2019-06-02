/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, TextInput, Button} from 'react-native';

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
        <View style={styles.headPart}>
          <View style={styles.firstLine}>
            <Text style={styles.currentNumText}>---</Text>
            <Picker style={styles.picker}>
              <Picker.Item style={styles.pickerItem} label="投" value={1}/>
              <Picker.Item style={styles.pickerItem} label="捕" value={2}/>
              <Picker.Item style={styles.pickerItem} label="一" value={3}/>
              <Picker.Item style={styles.pickerItem} label="二" value={3}/>
              <Picker.Item style={styles.pickerItem} label="三" value={3}/>
              <Picker.Item style={styles.pickerItem} label="遊" value={3}/>
              <Picker.Item style={styles.pickerItem} label="左" value={3}/>
              <Picker.Item style={styles.pickerItem} label="中" value={3}/>
              <Picker.Item style={styles.pickerItem} label="右" value={3}/>
            </Picker>
            <TextInput style={styles.inputName}></TextInput>
            <View style={styles.buttonContainer}>
              <Button title="クリア" color='#0000000'></Button>
            </View>
          </View>
          <View style={styles.firstLine}>
            <Button title="キャンセル"></Button>
            <Button title="登録"></Button>
            <Button title="入れ替え"></Button>
          </View>
        </View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView:{
    flex: 1,
    backgroundColor: '#3cb371',
  },
  headPart:{
    flex: 1,
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe0',
  },
  currentNumText: {
    fontSize: 10,
    textAlign: 'left',
    backgroundColor: '#f5deb3',
  },
  picker: {
    width: 60,
    height: 200,
    backgroundColor: '#FFF',
  },
  pickerItem: {
    fontSize: 8,
    textAlign: 'center',
  },
  inputName: {
    width: 60,
    fontSize: 8,
    backgroundColor: '#f0e68c',
  },
  buttonContainer: {
    width: 80,
    height: 50,
    backgroundColor: '#ffa500',
  },
  orderPart:{
    flex: 1,
    backgroundColor: '#FFF',
  },
  playerContainer:{
    flex: 1,
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    backgroundColor: '#b0c4de',
    margin: 5,
  },
  numberButton:{
    height: 30,
    margin: 0,
  },
  position:{
    margin: 0,
    height: 30,
    backgroundColor: '#FFF',
  },
  playerName:{
    margin: 0,
    height: 30,
    backgroundColor: '#FFF',
  },
});
