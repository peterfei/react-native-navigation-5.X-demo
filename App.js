import * as React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from './Theme';
import navigationHelper from './src/navigation/navigationHelper';
import {configStackScreen} from './src/navigation/navigationStackConfig';

import Login from './src/pages/Login/loginIndex';
const RootStack = createStackNavigator();
import {PATH} from './src/constants/urls';
import {postFetch} from './src/Common/network/request/HttpExtension';
import AsyncStorage from '@react-native-community/async-storage';
const _ref = (ref: NavigationContainerRef) => {
    navigationHelper.setNavigator(ref);
};
export const AuthContext = React.createContext();
export default function App() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isSignout: false,
            userToken: null,
        },
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({type: 'RESTORE_TOKEN', token: userToken});
        };

        bootstrapAsync();
    }, []);
    const authContext = React.useMemo(
        () => ({
            signIn: async (username, password) => {
                try {
                    const login_data = await postFetch(PATH.LOGIN, {
                        username: username,
                        password: password,
                    });
                    const token = login_data.access_token;
                    console.log("login_data", token);
                    userToken = await AsyncStorage.setItem('userToken', token);
                    console.log("userToken's", token);
                    dispatch({type: 'SIGN_IN', token: token});
                } catch (e) {
                    /* handle error */
                    console.log(e)
                }
            },
            signOut: () => dispatch({type: 'SIGN_OUT'}),
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token

                dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
            },
        }),
        [],
    );
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer ref={_ref}>
                <RootStack.Navigator>
                    {state.userToken == null ? (
                        <RootStack.Screen
                            name="SignIn"
                            component={Login}
                            options={{
                                title: 'Sign in',
                                // When logging out, a pop animation feels intuitive
                                animationTypeForReplace: state.isSignout
                                    ? 'pop'
                                    : 'push',
                            }}
                        />
                    ) : (
                        configStackScreen.map((m, v) => {
                            return (
                                <RootStack.Screen
                                    name={m.name}
                                    component={m.componentName}
                                />
                            );
                        })
                    )}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
export const AuthConsumer = AuthContext.Consumer;
