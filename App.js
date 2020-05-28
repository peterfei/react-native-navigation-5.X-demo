
import * as React from 'react';
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

