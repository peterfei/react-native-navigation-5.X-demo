
import * as React from 'react';
import IconFont from '../../src/iconfont';
import HomeScreen from '../../src/pages/Home/HomeScreen';
import FindScreen from '../../src/pages/Find/findScreen';
import SettingsScreen from '../../src/pages/Settings/SettingsScreen';
import MoreScreen from '../../src/pages/More/moreScreen'
import CourseCreate from '../../src/pages/More/courseCreate'

import DetailsScreen from '../../src/pages/Home/Details';

import OutLine from "../pages/Home/Outline/outline";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const _getHeaderOptions = route => {
    if (!route.state) return {};

    const routeName = route.state.routes[route.state.index].name;
    console.log(`routeName is ${routeName}`);
    const {routes = [], index = 0} = route.state;
    if (!routes || routes.length === 0) return {};

    const params = routes[index].params || {};
    if (params.title) {
        params['headerTitle'] = params.title;
    }
    return params;
};
const tabConfigs = {
    home: {
        screen: HomeScreen,
        tabName: '课程',
        activeIcon: 'shouye-hou',
        options: {tabBarLabel: '课程'},
    },
    social: {
        screen: FindScreen,
        tabName: '云课',
        activeIcon: 'fenlei',
        options: {tabBarLabel: '设置'},
    },
    mine: {
        screen: SettingsScreen,
        tabName: '我的',
        activeIcon: 'ziyuan',
        options: {tabBarLabel: '我的'},
    },
    more: {
        screen: MoreScreen,
        tabName: '更多',
        activeIcon: 'ziyuan',
        options: {tabBarLabel: '更多'},
    },
};
function HomeTabs({navigation, route}) {
    React.useLayoutEffect(() => {
        navigation.setOptions(_getHeaderOptions(route));
    }, [navigation, route]);
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = tabConfigs[route.name].activeIcon;
                    return (
                        <IconFont name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            {Object.keys(tabConfigs).map((key, i) => {
                const item = tabConfigs[key];
                return (
                    <Tab.Screen
                        name={key}
                        component={item.screen}
                        options={item.options}
                        key={`${i}`}
                    />
                );
            })}
        </Tab.Navigator>
    );
}
const configStackScreen = [
    {
        name: '主页',
        componentName: HomeTabs,
    },
    {
        name: 'Details',
        componentName: DetailsScreen,
    },
    {
        name: 'Settings',
        componentName: SettingsScreen,
    },
    {
<<<<<<< HEAD
        name: 'CourseCreate',
        componentName: CourseCreate,
    },
=======
        name:'outLine',
        componentName: OutLine,
    }
>>>>>>> [Fix]添加大纲页
];
export {configStackScreen};
