import React from "react";
import Main from './components/Main';
import FullInfo from "./components/FullInfo";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator ();

function Navigate() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{title: 'Главная',
                    headerStyle: { backgroundColor: '#ff0033', height: 100},
                        headertitleStyle: {fontWeight: '200'}
                        }
                    }
                    />
                <Stack.Screen
                    name="FullInfo"
                    component={FullInfo}
                    options={{title: 'Полная информация'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
);

}

export default Navigate
