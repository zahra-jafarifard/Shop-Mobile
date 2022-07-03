import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Card from './Card';
import { REACT_APP_API_ADDRESS } from '@env';
import { removeFromCart } from '../store/actions/cart';

const OrderDetails = props => {

    const dispatch = useDispatch();
    const _cartItems = useSelector(state => state.cart.cartItems);


    const countHandler = _cartItems.map(item => {
        if (item.id === props.id) {
            return item.count
        }

    })

    return (
        <Card style={styles.card} >
            <View style={styles.icon}>

            </View>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: `${REACT_APP_API_ADDRESS}/upload/${props.image}` }} />
                <View>
                    <Text>{props.name} </Text>
                    <Text> $ {props.price}  </Text>
                </View>
                <View>
                    <Ionicons
                        color={'#3355ff'}
                        name={"add"}
                        size={23}
                        onPress={() => {
                            addToSQLite(props.id, props.name, props.image, props.price);
                        }}
                    />
                    <TextInput editable={false} style={styles.count}>{countHandler}</TextInput>
                    <Ionicons
                        color={'#3355ff'}
                        name={"remove"}
                        size={23}
                        onPress={() => {
                            return dispatch(removeFromCart(props.id, props.price));
                        }}
                    />

                </View>
            </View>

        </Card>


    )
}
const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 109,
        paddingHorizontal: '3%',
        marginHorizontal: '2%',
        marginVertical: 10,
        padding: 8


    },
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 3,
        marginHorizontal: '5%',

    },
    icon: {
        height: 32,
        width: 32,
        position: 'absolute',
        right: 13,
        top: 6,
        flexDirection: 'row-reverse'

    },
    count: {
        textAlign: 'center',
        fontWeight: '700'
    }
});
export default OrderDetails;