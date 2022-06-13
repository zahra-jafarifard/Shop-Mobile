import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Button,
} from 'react-native';
import ProductItem from '../../components/ProductItem';
import { REACT_APP_API_ADDRESS } from '@env';


const Product = props => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch(`${REACT_APP_API_ADDRESS}/products`)
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                // .log(data.fetchData)
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
                        <Button
                            title="To Cart"
                        />
                    </ProductItem>

                )
            }}
        />
    )
}


export default Product;