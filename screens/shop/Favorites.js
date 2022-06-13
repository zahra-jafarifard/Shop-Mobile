import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
} from 'react-native';

import { REACT_APP_API_ADDRESS } from '@env';
import FavoriteItem from '../../components/FavoriteItem';
import { addToCart } from '../../store/actions/cart';


const Favorites = props => {

    const [favProducts, setFavProducts] = useState([]);

    const _favorites = useSelector(state => state.shop.favoriteProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${REACT_APP_API_ADDRESS}/products/favoriteProducts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                favoriteProducts: _favorites,
            })
        })
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                // console.log(data.fetchData);
                setFavProducts(data.fetchData)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [_favorites, setFavProducts]);

    return (
        <View style={styles.container} >
            {favProducts.length === 0 ? <Text>There is no favorites product.</Text> :
                <FlatList
                    data={favProducts}
                    keyExtractor={item => item._id}
                    renderItem={dataItem => {
                        return (
                            <FavoriteItem
                                id={dataItem.item._id}
                                name={dataItem.item.name}
                                price={dataItem.item.price}
                                image={dataItem.item.image}
                            >

                                <Button
                                    title="To Cart" onPress={() => {
                                        dispatch(addToCart(dataItem.item._id, dataItem.item.price));

                                        props.navigation.navigate('Cart', {
                                            productId: dataItem.item._id
                                        })
                                    }}
                                />
                            </FavoriteItem>

                        )
                    }}
                />}
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


});

export default Favorites;