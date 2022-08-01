import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// import  DrawerNavigator  from './DrawerNavigator';
import BottomTabNavigator from './TabNavigator';
import { AuthStackNavigator } from './StackNavigator';
import { fetchClientSQLite } from '../dbSQLite/db';


const MainNavigator = () => {

    const [token, setToken] = useState(useSelector(state => state.shop.token));

   const fetchTokenFromSQLite = useCallback(()=>{
        return fetchClientSQLite()
        .then((value)=>{
            if (value.rows.length !== 0){

                setToken(value.rows._array[0].token)
            }
        })
        .catch(err =>{
            console.log( err);
        });
    } , [token]);

    useEffect(()=>{
        fetchTokenFromSQLite();
    })

    const _token = useSelector(state => state.shop.token);
    return (
        <NavigationContainer>
            {!token ? <AuthStackNavigator /> : <BottomTabNavigator />}
        </NavigationContainer>
    )
}

export default MainNavigator;




 