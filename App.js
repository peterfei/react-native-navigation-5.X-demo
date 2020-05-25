import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconFont from './src/iconfont';
import HomeScreen from './src/pages/Home/HomeScreen';
import DetailsScreen from './src/pages/Home/Details';
import FindScreen from './src/pages/Find/findScreen';
import SettingsScreen from './src/pages/Settings/SettingsScreen';
import theme from './Theme';
import navigationHelper from './src/navigation/navigationHelper';

const Tab = createBottomTabNavigator();

function HomeTabs({navigation, route}) {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === '课程') {
                        iconName = focused ? 'shouye-hou' : 'shouye-hou';
                    } else if (route.name === '云课') {
                        iconName = focused ? 'fenlei' : 'fenlei';
                    } else if (route.name === '我的') {
                        iconName = focused ? 'ziyuan' : 'ziyuan';
                    }

                    // You can return any component that you like here!
                    return (
                        <IconFont name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="课程"
                component={HomeScreen}
                navigation={navigation}
            />
            <Tab.Screen name="云课" component={FindScreen} />
            <Tab.Screen name="我的" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

const RootStack = createStackNavigator();
const _ref = (ref: NavigationContainerRef) => {
    navigationHelper.setNavigator(ref);
};
export default function App() {
    return (
        <NavigationContainer ref={_ref}>
            <RootStack.Navigator>
                <RootStack.Screen name="主页" component={HomeTabs} />
                <RootStack.Screen name="Details" component={DetailsScreen} />
                <RootStack.Screen name="Settings" component={SettingsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
