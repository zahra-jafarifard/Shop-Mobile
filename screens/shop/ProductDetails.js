import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native';
import Card from '../../components/Card'

const ProductDetail = props => {
    const [productState, setProductState] = useState([]);

    useEffect(() => {
        const productId = props.route.params.productId;
        fetch(`http://192.168.100.46:5000/products/${productId}`)
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                // console.log(data.fetchData);
                setProductState(data.fetchData)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [])
    return (
        <Card style={styles.card} >
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: `http://192.168.102.208:5000/${productState.image}` }} />
                </View>
                <View style={styles.textContainer}>
                    <Text>{productState.name} </Text>
                    <Text> {productState.price} </Text>
                    <Text> {productState.description} </Text>
                </View>
                <View style={styles.children}>
                    <Button title='to cart' />
                    <Button title='back' onPress={props.navigation.goBack} />
                </View>
            </View>
        </Card>


    )
}
const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 260,
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
});
export default ProductDetail;