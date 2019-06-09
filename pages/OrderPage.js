import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Register from '../components/Register';
import OrderDisplay from '../components/OrderDisplay';

export default class OrderPage extends React.Component {
    render() {
        return (
            <View style={styles.parentView}>
                <Register />
                <OrderDisplay />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        backgroundColor: '#990000',
    },
});
