import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import { REACT_APP_API_ADDRESS } from '@env';
import { addToFavorites } from '../../store/actions/actions';
import { removeFromFavorites } from '../../store/actions/actions';
import { addToCart } from '../../store/actions/cart';
import { addToCartSQLite } from '../../dbSQLite/db';

const ProductDetail = props => {
    const [productState, setProductState] = useState([]);
    const [favoriteState, setFavoriteState] = useState(false);


    const productId = props.route.params.productId;
    const dispatch = useDispatch();
    const favProd = useSelector(state => state.shop.favoriteProducts)

    const FavIconFunction = favProd.filter(item => {
        return item === productId
    })

    useEffect(() => {
        fetch(`${REACT_APP_API_ADDRESS}/products/${productId}`)
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                setProductState(data.fetchData)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, []);


    return (
        <Card style={styles.card} >
            <View style={styles.icon}>
                <Ionicons
                    onPress={() => {
                        setFavoriteState((prevState) => !prevState)
                        if (favoriteState) {
                            return dispatch(addToFavorites(productId))
                        } else {
                            return dispatch(removeFromFavorites(productId))
                        }
                    }}
                    color={'#3355ff'}
                    name={(FavIconFunction.toString() === productId.toString()) ? "heart" : "heart-outline"}
                    size={24}
                />
            </View>
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    {productState.image &&
                        <Image style={styles.image}
                            source={{ uri: `${REACT_APP_API_ADDRESS}/upload/${productState.image}` }} />}
                </View>
                <View style={styles.textContainer}>
                    <Text>{productState.name} </Text>
                    <Text> {productState.price} </Text>
                    <Text> {productState.description} </Text>
                </View>
                <View style={styles.children}>
                    <Button title='to cart' onPress={() => {
                        addToCartSQLite(productId, productState.name, productState.image, productState.price)
                        dispatch(addToCart(productId, productState.price));

                        props.navigation.navigate('Cart', {
                            productId: productId
                        })
                    }} />
                    <Button title='back' onPress={props.navigation.goBack} />
                </View>

            </View>
        </Card>


    )
}
const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 290,
        marginHorizontal: '10%',
        marginVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',


    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    textContainer: {
        alignItems: 'center',
        paddingVertical: 8
    },

    children: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        borderColor: 'red',
        width: 200,
    },
    icon: {
        height: 25,
        width: 25,
        position: 'absolute',
        right: 9,
        top: 6

    }
});
export default ProductDetail;