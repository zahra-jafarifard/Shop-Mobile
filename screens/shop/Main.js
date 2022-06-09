import React, { useEffect, useState } from 'react';
import { REACT_APP_API_ADDRESS } from '@env';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Main = props => {

    const [categoryState, setCategoryState] = useState([]);

    useEffect(() => {
        fetch(`${REACT_APP_API_ADDRESS}/products/parentCategories`)
            .then(res => {
                if (!res.ok) {
                    return new Error(res.message)
                }
                return res.json()
            })
            .then(data => {
                // console.log('caaat', data.fetchData)
                setCategoryState(data.fetchData)
            })
            .catch(err => {
                console.log(err.message)
            });
    }, [setCategoryState]);

    const selectedItem = (id, category) => {
        // console.log('idd', id , category)
        props.navigation.navigate(category, {
            productId: id
        })
    }
    return (
        <LinearGradient
            colors={['#6e45e2', '#88d3ce']}
            style={styles.linear}>

            <View style={styles.container} >
                <FlatList
                    data={categoryState}
                    keyExtractor={item => item._id}
                    renderItem={dataItem => {
                        return <Text style={styles.parents} onPress={() => {
                            selectedItem(dataItem.item._id, dataItem.item.name)
                        }}>
                            {dataItem.item.name}'s Clothes
                        </Text>
                    }}
                />
            </View>

        </LinearGradient>

    )
}
const styles = StyleSheet.create({
    container: {
    },

    parents: {
        width: '90%',
        height: 70,
        marginHorizontal: '6%',
        paddingVertical: 23,
        textAlign: 'center',
        fontSize: 18,
        marginTop: 32,

        shadowColor: 'black',
        shadowOpacity: 0.30,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: '#88d3ce',
        color: '#6e45e2',
        


    },
    linear: {
        flex: 1,
    }


});

export default Main;