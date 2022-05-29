import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './TabNavigator';


const MainNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>



    )
}

export default MainNavigator;