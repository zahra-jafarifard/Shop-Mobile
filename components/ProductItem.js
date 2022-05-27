import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import Card from './Card'

const ProductItem = props => {

    return (
        <Card style={styles.card} >
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: `http://192.168.102.208:5000/${props.image}` }} />
                </View>
                <View style={styles.textContainer}>
                    <Text>{props.name} </Text>
                    <Text> $ {props.price}  </Text>
                </View>
                <View style={styles.children}>
                    {props.children}
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
        paddingVertical:8
    },
    
    children: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        borderColor:'red',
        width: 200,
    },
});
export default ProductItem;