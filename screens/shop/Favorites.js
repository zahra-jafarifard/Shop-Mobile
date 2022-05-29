import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Card from '../../components/Card';

const Favorites = props => {

    return (
        <Card style={styles.card} >
            <View style={styles.container} >
                <Text>Favorites screens</Text>
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

export default Favorites;