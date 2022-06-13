import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Card from './Card';
import { REACT_APP_API_ADDRESS } from '@env';
import { Ionicons } from '@expo/vector-icons';
import { removeFromFavorites } from '../store/actions/actions';
const FavoriteItem = props => {

    const dispatch = useDispatch();
    return (
        <Card style={styles.card} >
            <View style={styles.icon}>
                <Ionicons
                    color={'#3355ff'}
                    name={"close"}
                    size={20}
                    onPress={() => {
                        dispatch(removeFromFavorites(props.id));
                    }}
                />
            </View>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: `${REACT_APP_API_ADDRESS}/upload/${props.image}` }} />
                <View>
                    <Text>{props.name} </Text>
                    <Text> $ {props.price}  </Text>
                </View>
                <View>
                    {props.children}
                </View>
            </View>

        </Card>


    )
}
const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 89,
        paddingHorizontal: '3%',
        marginHorizontal: '2%',
        marginVertical: 12,
        padding: 16


    },
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        height: 22,
        width: 22,
        position: 'absolute',
        right: 9,
        top: 6,

    },

});
export default FavoriteItem;