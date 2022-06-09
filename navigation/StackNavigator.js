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

const Stack = createNativeStackNavigator();


export const ProductStackNavigator = () => {
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

            }}/>
            <Stack.Screen name='Woman' component={WomenProducts} />
            <Stack.Screen name='Man' component={MenProducts} />
            <Stack.Screen name='Children' component={ChildrenProducts} />

            <Stack.Screen name='Detail' component={ProductDetail}  /> 

        </Stack.Navigator>
    )
}

export const FavoriteStackNavigator = () => {
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

                // headerRight: () => (
                //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
                //         <Item title='menu' iconName='md-star-outline'
                //         onPress={() => { console.log('favv') }}
                //         />
                //     </HeaderButtons>
                // ),
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