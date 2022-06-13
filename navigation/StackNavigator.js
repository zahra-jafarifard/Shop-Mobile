import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

// import Products from '../screens/shop/Products';
// import Auth from '../screens/shop/Auth';

import ProductDetail from '../screens/shop/ProductDetails'
import Main from '../screens/shop/Main';
import ChildrenProducts from '../screens/shop/categories/ChildrenProducts';
import WomenProducts from '../screens/shop/categories/WomenProducts';
import MenProducts from '../screens/shop/categories/MenProducts';
import Favorites from '../screens/shop/Favorites';
import Cart from '../screens/shop/Cart';

const Stack = createNativeStackNavigator();


export const ProductStackNavigator = (props) => {

    const cartHeaderButton = (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='cart' iconName='cart'
                onPress={() => {
                    props.navigation.navigate('Cart')
                }}
            />
        </HeaderButtons>
    )


    return (

        <Stack.Navigator>
            <Stack.Screen name='Main' component={Main} options={{
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='menu' iconName='md-menu'
                            onPress={() => { console.log('drwer fav') }}
                        />
                    </HeaderButtons>
                ),
                headerRight: () => cartHeaderButton
            }} />
            <Stack.Screen name='Woman' component={WomenProducts} options={{
                headerRight: () => cartHeaderButton
            }} />
            <Stack.Screen name='Man' component={MenProducts} options={{
                headerRight: () => cartHeaderButton
            }} />
            <Stack.Screen name='Children' component={ChildrenProducts} options={{
                headerRight: () => cartHeaderButton
            }} />

            <Stack.Screen name='Detail' component={ProductDetail} options={{
                headerRight: () => cartHeaderButton
            }} />
            <Stack.Screen name='Cart' component={Cart} />

        </Stack.Navigator>
    )
}

export const FavoriteStackNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Favorites' component={Favorites} options={{

                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='menu' iconName='md-menu'
                            onPress={() => { console.log('drwer fav') }}
                        />
                    </HeaderButtons>
                ),
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='cart' iconName='cart'
                            onPress={() => {
                                props.navigation.navigate('Cart')
                            }}
                        />
                    </HeaderButtons>
                )

            }} />
        </Stack.Navigator>
    )
}






// export const AuthStackNavigator = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name='Auth' component={Auth} />
//         </Stack.Navigator>
//     )
// }




/* <Stack.Screen name='Home' component={Products} options={{
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
        }} /> */