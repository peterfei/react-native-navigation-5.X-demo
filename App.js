1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './Theme';
import navigationHelper from './src/navigation/navigationHelper';
import {configStackScreen} from "./src/navigation/navigationStackConfig"

const RootStack = createStackNavigator();
const _ref = (ref: NavigationContainerRef) => {
    navigationHelper.setNavigator(ref);
};
export default function App() {
    return (
        <NavigationContainer ref={_ref}>
            <RootStack.Navigator>
                {configStackScreen.map((m,v)=>{

                    return (
                        <RootStack.Screen name={m.name} component={m.componentName} />
                    )
                })}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

