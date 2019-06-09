import React, { Component } from 'react';
import { StyleSheet, View ,Button} from 'react-native';
import Register from '../components/Register';
import OrderDisplay from '../components/OrderDisplay';

export default class OrderPage extends React.Component {
    render() {
        return (
            <View style={styles.parentView}>
                <Register />
                <OrderDisplay />
                <Button 
                title="フィールド" 
                onPress={() => this.props.navigation.navigate('Field')}>
                </Button>
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
