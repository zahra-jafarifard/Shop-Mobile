import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import  DrawerNavigator  from './DrawerNavigator';
import BottomTabNavigator from './TabNavigator';



const MainNavigator = () => {
    return (

        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

export default MainNavigator;