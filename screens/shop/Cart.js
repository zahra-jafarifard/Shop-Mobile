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
import CartItem from '../../components/CartItem';

const Cart = props => {

    const [productState, setProductState] = useState([]);

    const _cartItems = useSelector(state => state.cart.cartItems);
    const _Items = _cartItems.map(item => item.id)

    const _total = useSelector(state => state.cart.totalAmount);


    useEffect(() => {
        fetch(`${REACT_APP_API_ADDRESS}/products/cartItems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cartItems: _Items,
            })
        })
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                // console.log('fetch data', data.fetchData);
                setProductState(data.fetchData)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [setProductState, _cartItems]);


    return (
        <View style={styles.container} >
            {productState.length === 0 ? <Text>Cart is empty.</Text> :
                <FlatList
                    data={productState}
                    keyExtractor={item => item._id}
                    renderItem={(dataItem) => {
                        return (
                            <CartItem
                                id={dataItem.item._id}
                                name={dataItem.item.name}
                                price={dataItem.item.price}
                                image={dataItem.item.image}
                            >

                                <Button
                                    title="Detail"
                                    onPress={() => {
                                        props.navigation.navigate('Detail', {
                                            productId: productState.item._id
                                        })
                                    }}
                                />
                            </CartItem>

                        )
                    }}
                />
            }
            <View style={styles.totalContainer}>
                <TextInput style={styles.total}>Total : $ {_total.toFixed(2)}</TextInput>
                <Button title='Continue' />
            </View>
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

export default Cart;