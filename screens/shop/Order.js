import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TextInput
} from 'react-native';
import { REACT_APP_API_ADDRESS } from '@env';
import OrderDetails from '../../components/OrderDetails';

const Order = props => {



    return (
        <View style={styles.container} >
            <Text>
                order id: 
                {props.route.params.productId}
            </Text>
            
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%'
    },

    total: {
        fontWeight: '600',
        fontSize: 19,
        color: 'gray',
        padding: 25,


    },
    totalContainer: {
        paddingBottom: 25,

    }
});

export default Order;