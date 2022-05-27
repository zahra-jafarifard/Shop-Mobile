import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Button,
} from 'react-native';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';
import ProductItem from '../../components/ProductItem';

const Product = props => {
    const [productsState, setProductsState] = useState([]);

    useEffect(() => {
        fetch('http://192.168.102.208:5000/products')
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                // console.log(data.fetchData)
                setProductsState(data.fetchData)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [setProductsState]);

    const selectedItem = (id)=>{
        console.log('idd', id)
        props.navigation.navigate('Detail' , {
            productId:id
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