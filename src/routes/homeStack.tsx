import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { SimpleBeamWithUDL, SimpleBeamWithUIL } from '../components/SymplySupportedBeams';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="SimpleBeamWithUDL" component={SimpleBeamWithUDL} />
            <HomeStack.Screen name="SimpleBeamWithUIL" component={SimpleBeamWithUIL} />
        </HomeStack.Navigator>
    );
};

