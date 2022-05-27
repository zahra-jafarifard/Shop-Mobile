import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from '../screens/shop/Products';
import ProductDetail from '../screens/shop/ProductDetails';

const Stack = createNativeStackNavigator();

const Navigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Products' component={Products}/>
                <Stack.Screen name='Detail' component={ProductDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;