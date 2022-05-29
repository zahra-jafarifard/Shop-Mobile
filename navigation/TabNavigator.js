import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ProductStackNavigator } from "./StackNavigator";
import { FavoriteStackNavigator } from "./StackNavigator";
import { Ionicons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name='Products' component={ProductStackNavigator}
                options={{
                    tabBarIcon: (tabInfo) => (<Ionicons
                        name="md-home"
                        size={23}
                    />)
                    ,
                    headerShown: false
                }}
            />
            <Tab.Screen name='Favorites' component={FavoriteStackNavigator}
                options={{
                    tabBarIcon: (tabInfo) => (<Ionicons
                        name="star"
                        size={23}
                    />)
                    ,
                    headerShown: false

                }}
            />
        </Tab.Navigator>


    )
}

export default BottomTabNavigator;