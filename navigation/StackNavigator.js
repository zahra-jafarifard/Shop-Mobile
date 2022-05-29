import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import Products from '../screens/shop/Products';
import ProductDetail from '../screens/shop/ProductDetails';
import Favorites from '../screens/shop/Favorites';


const Stack = createNativeStackNavigator();

export const ProductStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Products} options={{
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='menu' iconName='md-menu'
                        onPress={() => { console.log('product drwer') }}
                        />
                    </HeaderButtons>
                ),
            }} />
            <Stack.Screen name='Detail' component={ProductDetail} options={{
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='menu' iconName='md-menu'
                            onPress={() => { console.log('detail drwer ') }}
                        />
                    </HeaderButtons>
                ),
            }} />
        </Stack.Navigator>
    )
}
export const FavoriteStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Favorite' component={Favorites} options={{

                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='menu' iconName='md-menu'
                            onPress={() => { console.log('drwer fav') }}
                        />
                    </HeaderButtons>
                ),

                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='menu' iconName='md-star-outline'
                        onPress={() => { console.log('favv') }}
                        />
                    </HeaderButtons>
                ),
            }} />
        </Stack.Navigator>
    )
}
