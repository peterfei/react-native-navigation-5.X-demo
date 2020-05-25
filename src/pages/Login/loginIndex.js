import React, {Component} from 'react';
import {Alert, StyleSheet, View, Dimensions, Image, Text, TextInput, TouchableOpacity} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from "react-native-elements";
import Toast, {DURATION} from 'react-native-easy-toast'

export default class LoginIndex extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this._Submission = this._Submission.bind(this);
        this.state = {
            username: '',
            password: '',
            keep_password: false,
            img_eye_close: true,//设置默认显示眼睛关闭的图标
            is_show_pwd: true, //设置是否明文显示密码
            secureText: true,
        }
    }


    render() {
        return (
            <View style={styles.container} behavior="padding">

                <View style={styles.login_view}>
                    <Input
                        ref='username'
                        shake={true}
                        placeholder='手机号/邮箱'
                        leftIconContainerStyle={{marginRight: 20}}
                        errorMessage={''}
                        clearButtonMode={'while-editing'}
                        autoCapitalize='none' // 取消首字母大写
                        autoComplete={'password'}
                        returnKeyType={"next"}
                        onChangeText={(text) => this.setState({username: text})}
                    />
                    <Input
                        containerStyle={{marginTop: 20}}
                        ref='password'
                        shake={true}
                        placeholder='密码'
                        rightIcon={
                            <TouchableOpacity onPress={() => this.setState({secureText: !this.state.secureText})}>
                                <FontAwesomeIcon name={this.state.secureText ? 'eye' : 'eye-slash'} size={22}
                                                 color='#555555'/>
                            </TouchableOpacity>

                        }
                        secureTextEntry={this.state.secureText}
                        leftIconContainerStyle={{marginRight: 20}}
                        errorMessage={'密码由字母、符号和数字组成'}
                        // clearButtonMode={'while-editing'}
                        autoCapitalize='none' // 取消首字母大写
                        autoComplete={'password'}
                        onChangeText={(text) => this.setState({password: text})}
                    />

                </View>
                <Button buttonStyle={{marginTop: 40}}
                        title="登录"
                        onPress={() => this._Submission()}
                />
                <Button buttonStyle={{marginTop: 40}}
                        title="注册"
                        onPress={() => this.props.navigation.push('Register')}
                    // onPress={() => this._zhuce()}

                />

                <Toast ref="toast" position='center'/>

            </View>
        );
    }

    _Submission() {

        let data = {
            'account': this.state.username,
            'password': this.state.password
        };

        // HttpsUtils.post(Tools.USER_PATH('/api/login?backUrl=http://uc.test'), data)
        //     .then(result => {
        //         if (result.message) {
        //             this.refs.toast.show(result.message, 500);
        //             return;
        //         }
        //
        //         DeviceStorage.save('login_back', result, function () {
        //
        //         });
        //         this._getUserInfo({'ticket': result.ticket});
        //         // DeviceStorage.get('login_back').then((username) => {
        //         //     alert(JSON.stringify(username));
        //         // });
        //
        //     })
        //     .catch(error => {
        //         this.refs.toast.show(error, 500);
        //     })
    }

    _getUserInfo(data) {

        // HttpsUtils.post(Tools.GET_PATH('/api/auth/login'), data)
        //     .then(result => {
        //         if (result.message) {
        //             this.refs.toast.show(result.message, 500);
        //             return;
        //         }
        //         DeviceStorage.save('user_info', result, function () {
        //
        //         });
        //
        //         this.refs.toast.show('成功，正在录入信息...', 500, () => {
        //             this.props.navigation.navigate('App');
        //             this.props.navigation.goBack();
        //         })
        //
        //     })
        //     .catch(error => {
        //         this.refs.toast.show(error, 500);
        //     })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',//'#F4F4F4',
    },
    login_view: {
        marginTop: 90,
        padding: 20,
        justifyContent: 'center',
        // backgroundColor: 'white',
        // borderRadius: 6,
        // borderColor: "#efecea",
        // borderWidth: 1
    },
});
