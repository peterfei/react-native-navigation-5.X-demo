import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconFont from './src/iconfont';
import HomeScreen from './src/pages/Home/HomeScreen';
import DetailsScreen from './src/pages/Home/Details';
import SettingsScreen from './src/pages/Settings/SettingsScreen';
import theme from './Theme';
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="课程"
                component={HomeScreen}
                //options={{
                //    headerRight: () => (
                //        <Button
                //            onPress={() => alert('This is a button!')}
                //            title="Info"
                //            color="#000"
                //        />
                //    ),
                //}}
            />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'yulan' : 'yulan';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ziyuan' : 'ziyuan';
                        }

                        // You can return any component that you like here!
                        return (
                            <IconFont
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
