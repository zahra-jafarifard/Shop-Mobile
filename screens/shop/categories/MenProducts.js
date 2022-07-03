import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Button,
    Text
} from 'react-native';
import { useDispatch } from 'react-redux';

import ProductItem from '../../../components/ProductItem';
import { REACT_APP_API_ADDRESS } from '@env';
import { addToCart } from '../../../store/actions/cart';
import { addToSQLite } from '../../../dbSQLite/db';


const MenProducts = props => {
    const [productsState, setProductsState] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${REACT_APP_API_ADDRESS}/products/men`)
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                setProductsState(data.fetchData)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [setProductsState]);

    const selectedItem = (id) => {
        props.navigation.navigate('Detail', {
            productId: id
        })
    }
    return (
        <FlatList
            data={productsState}
            keyExtractor={item => item._id}
            renderItem={dataItem => {
                return (
                    <ProductItem
                        name={dataItem.item.name}
                        price={dataItem.item.price}
                        image={dataItem.item.image}
                    >

                        <Button
                            title="Details"
                            onPress={() => {
                                selectedItem(dataItem.item._id)
                            }}
                        />
                        <Button title='to cart' onPress={() => {
                            addToSQLite(dataItem.item._id, dataItem.item.name, dataItem.item.image, dataItem.item.price)
                            dispatch(addToCart(dataItem.item._id, dataItem.item.price));

                            props.navigation.navigate('Cart', {
                                productId: dataItem.item._id
                            })
                        }} />
                    </ProductItem>

                )
            }}
        />
    )
}


export default MenProducts;