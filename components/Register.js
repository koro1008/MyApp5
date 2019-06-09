import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, TextInput, Button } from 'react-native';

export default class Register extends React.Component {
    render() {
        return (
            <View style={styles.headPart}>
                <View style={styles.firstLine}>
                    <Text style={styles.currentNumText}>---</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item style={styles.pickerItem} label="投" value={1} />
                        <Picker.Item style={styles.pickerItem} label="捕" value={2} />
                        <Picker.Item style={styles.pickerItem} label="一" value={3} />
                        <Picker.Item style={styles.pickerItem} label="二" value={3} />
                        <Picker.Item style={styles.pickerItem} label="三" value={3} />
                        <Picker.Item style={styles.pickerItem} label="遊" value={3} />
                        <Picker.Item style={styles.pickerItem} label="左" value={3} />
                        <Picker.Item style={styles.pickerItem} label="中" value={3} />
                        <Picker.Item style={styles.pickerItem} label="右" value={3} />
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
        );
    }
}

const styles = StyleSheet.create({
    headPart: {
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
})

