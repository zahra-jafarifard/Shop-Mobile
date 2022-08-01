import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import Card from '../../components/Card';
import { login } from '../../store/actions/actions';
import { REACT_APP_API_ADDRESS } from '@env';
import { loginRequest } from '../../store/actions/actions';
import { addToClientSQLite } from '../../dbSQLite/db';

const Auth = (props) => {

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [signIn, setSignIn] = useState(true);

    const dispatch = useDispatch();
    const _erorr = useSelector(state => state.shop.error);

   
    const switchHandler = () => {
        setSignIn(prevState => !prevState)
    };

    const authHandler = async () => {
        if (signIn) {
            dispatch(login(mobile, password));

            //   props.navigation.navigate('Main');

        }
        else {
            return fetch(`${REACT_APP_API_ADDRESS}/clients/signUp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mobile: mobile,
                    password: password,
                }),
            })
                .then((response) => {
                    if (response.status === 422 || response.status === 403 || (!response.ok)) {
                        return response.json().then((res) => {
                        });
                    }
                    else {
                        return response.json();
                    }
                })
                .then(res => {
                    dispatch(loginRequest(res.mobile, res.token, res.clientId));
                    addToClientSQLite(res.clientId, res.mobile, res.token);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <Card style={styles.card} >
            <View style={styles.container} >
                <View style={styles.textContainer}>
                    {_erorr ? <Text style={styles.error}>  Error : {_erorr}</Text> : null}
                    <TextInput
                        style={styles.textInput}
                        placeholder='Mobile'
                        keyboardType='phone-pad'
                        border='solid'
                        onChangeText={value => setMobile(value)}
                        defaultValue={mobile}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        textContentType='password'
                        onChangeText={value => setPassword(value)}
                        defaultValue={password}
                    />
                </View>

                <View>

                    <View style={styles.children}>
                        <Button title={signIn ? 'Sign In' : 'Sign Up'}
                            color={'#FFC0CB'}
                            onPress={authHandler} />
                    </View>
                    <View style={styles.children}>
                        <Button title={signIn ? 'Switch To Sign up' : 'Switch To Sign In'}
                            color={'#FFC0CB'}
                            onPress={switchHandler} />
                    </View>

                </View>

            </View>
        </Card>


    )
}
const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 300,
        marginHorizontal: '11%',
        marginVertical: 42,
        alignItems: 'center',

    },

    textContainer: {
        alignItems: 'center',
        paddingVertical: 8,
        marginVertical: 22,


    },
    textInput: {
        borderColor: '#FFC0CB',
        width: 200,
        borderWidth: 1,
        fontSize: 11,
        borderRadius: 9,
        paddingLeft: 12,
        margin: 7,


    },


    children: {
        alignItems: 'center',
        marginVertical: 7,

    },

    error: {
        fontSize: 11,
        margin: 4,
        color: '#ff0000',
        textAlign: "center"


    },


});
export default Auth;