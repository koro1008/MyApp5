import React, { Component } from 'react';
import { StyleSheet, View , Text} from 'react-native';

export default class FieldPage extends React.Component {
    render() {
        return (
            <View style={styles.parentView}>
                <Text>フィールド画面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        backgroundColor: '#33ff99',
        justifyContent:'center',
    },
});
