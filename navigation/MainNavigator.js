import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// import  DrawerNavigator  from './DrawerNavigator';
import BottomTabNavigator from './TabNavigator';
import { AuthStackNavigator } from './StackNavigator';


const MainNavigator = () => {
    const _token = useSelector(state => state.shop.token);

    return (

        <NavigationContainer>
            {
                _token ? <BottomTabNavigator /> : <AuthStackNavigator />
            }

        </NavigationContainer>
    )
}

export default MainNavigator;