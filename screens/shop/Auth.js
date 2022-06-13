import React, { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import Card from '../../components/Card'

const Auth = props => {


    // useEffect(() => {
    //     const productId = props.route.params.productId;
    //     fetch(`http://192.168.215.206:5000/products/${productId}`)
    //         .then(res => {
    //             if (!res.ok) {
    //                 return new Error(res.message)
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             // console.log(data.fetchData);
    //             setProductState(data.fetchData)
    //         })
    //         .catch(err => {
    //             console.log(err.message)
    //         });
    // }, []);


    return (
        <Card style={styles.card} >
            <View style={styles.container} >

                <View style={styles.textContainer}>
                    <Text>E-mail</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='E-mail'
                        keyboardType='email-address'
                        border='solid'
                    />

                    <Text>Password</Text>
                    <TextInput
                        style={styles.textInput}

                        placeholder='Password'
                        textContentType='password' />
                </View>

                <View>
                    <View style={styles.children}>

                        <Button title='log in' color={'#FFC0CB'} />
                    </View>
                    <View style={styles.children}>

                        <Button
                            color={'#FFC0CB'}
                            title='switch to sign up' />
                    </View>
                </View>

            </View>
        </Card>


    )
}
const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 270,
        marginHorizontal: '10%',
        marginVertical: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    textContainer: {
        alignItems: 'center',
        paddingVertical: 8,
        marginVertical: 12,


    },
    textInput: {
        borderColor: 'black',
        backgroundColor: '#FFC0CB',
        width: 200,
        // borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 15,
        borderRadius: 25,
        paddingLeft: 12,

    },
    container: {
        marginTop: 19,
    },

    children: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,


    },


    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    tddextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    }

});
export default Auth;