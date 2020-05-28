import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableOpacity} from 'react-native'
import {Input, Button} from "react-native-elements";
import Toast, {DURATION} from 'react-native-easy-toast'
import Icon from "../../iconfont/index";

export default class RegisterIndex extends Component {

    componentDidMount() {
        this.props.navigation.setOptions({
            headerBackTitle:"",
            title:this.props.route.params.type=1?"注册":"密码找回",//this.props.navigation.params.type==1?"注册":"密码找回"

        });
    }

    constructor(props) {
        super(props);
        this._getCode = this._getCode.bind(this);
        this._register = this._register.bind(this);
        this._get_UserInfo = this._get_UserInfo.bind(this);
        this.state = {
            type:0,
            username: '',
            password: '',
            other_password: '',
            verify_code: '',
            show_password: false,
            img_eye_close: true,//设置默认显示眼睛关闭的图标
            is_show_pwd: true, //设置是否明文显示密码
            secureText: true,
            time: 0,
            time_lab: '获取验证码',
        }
    }

    render() {

        return (
            <View style={styles.container} behavior="padding">
                <View style={styles.login_view}>
                    <Input
                        ref='ffname'
                        shake={true}
                        inputStyle={{fontSize: 14}}
                        placeholder='用户名'
                        leftIcon={<Icon name='user' size={24} color='#FF783C'/>

                        }
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
                        inputStyle={{fontSize: 12}}
                        ref='verify_code'
                        shake={true}
                        leftIcon={<Icon name='code' size={24} color='#FF783C'/>}
                        rightIcon={
                            <Button
                                titleStyle={{fontSize: 12}}
                                disabled={this.state.username.length > 0 ? false : true}
                                disabledStyle={{backgroundColor: '#F6F9FA'}}
                                title={this.state.time_lab}
                                onPress={() => this._getCode()}
                            />

                        }
                        leftIconContainerStyle={{marginRight: 20}}
                        clearButtonMode={'while-editing'}
                        autoCapitalize='none' // 取消首字母大写
                        autoComplete={'password'}
                        onChangeText={(text) => this.setState({verify_code: text})}
                    />
                    <Input
                        containerStyle={{marginTop: 20}}
                        inputStyle={{fontSize: 14}}
                        ref='password'
                        shake={true}
                        placeholder='请输入密码'
                        leftIcon={<Icon name='lock' size={24} color='#FF783C'/>}
                        secureTextEntry={true}
                        leftIconContainerStyle={{marginRight: 20}}
                        errorMessage={'密码由字母、符号和数字组成'}
                        clearButtonMode={'while-editing'}
                        autoCapitalize='none' // 取消首字母大写
                        autoComplete={'password'}
                        onChangeText={(text) => this.setState({password: text})}
                    />
                    <Input
                        containerStyle={{marginTop: 20}}
                        inputStyle={{fontSize: 14}}
                        ref='password_confirmation'
                        shake={true}
                        placeholder='请输重复密码'
                        leftIcon={<Icon name='lock' size={24} color='#FF783C'/>}
                        secureTextEntry={true}
                        leftIconContainerStyle={{marginRight: 20}}
                        errorMessage={'两次输入的密码必须一致'}
                        clearButtonMode={'while-editing'}
                        autoCapitalize='none' // 取消首字母大写
                        autoComplete={'password'}
                        onChangeText={(text) => this.setState({other_password: text})}
                    />

                </View>
                <Button buttonStyle={{marginTop: 40}}
                        title="提交"
                        onPress={() => this._register()}
                />

                <Toast ref="toast" position='center'/>

            </View>
        );
    }

    _getCode() {
        if (this.state.time > 0) {
            return;
        };

        // this.countTime(60);

        // HttpsUtils.post_no(Tools.USER_PATH('/api/register/get_verify_code'), {'account': this.state.username})
        //     .then(response => {
        //         if (response.status===200) {
        //             this.refs.toast.show('验证码发送成功，请注意接收!', 500)
        //             this.countTime(60);
        //         }else {
        //             alert(JSON.stringify(response))
        //         }
        //     })
        //     .then(result => {
        //         this.refs.toast.show(result.message, 500)
        //     })
        //     .catch(error => {
        //         this.refs.toast.show('获取验证码失败', 500)
        //     })
    }

    countTime(num) {
        let new_time = num;
        this._timer = setInterval(() => {
            new_time--;
            this.setState({time: new_time});
            if (this.state.time <= 0) {
                this.setState({
                    time: new_time,
                    time_lab: '获取验证码',
                });
                this._timer && clearInterval(this._timer);
            } else {
                this.setState({
                    time: new_time,
                    time_lab: `重新获取(${new_time}s)`,
                });
            }
        }, num * 10);
    }

    _register() {

        // this.refs.toast.show('注册成功，正在登录...', 500, () => {
        //     this.props.navigation.navigate('App')
        // })

        let data = {
            'account': this.state.username,
            'password': this.state.password,
            'password_confirmation': this.state.other_password,
            'verify_code': this.state.verify_code,
        }

    //     HttpsUtils.post(Tools.USER_PATH('/api/register'), data)
    //         .then(result => {
    //             if (result.message) {
    //                 this.refs.toast.show(result.message, 500)
    //                 return;
    //             } else {
    //                 DeviceStorage.save('login_back', result)
    //                 this._get_UserInfo({'ticket': result.ticket});
    //             }
    //
    //         })
    //         .catch(error => {
    //             this.refs.toast.show(error, 500)
    //         })
    }

    _get_UserInfo(data) {
        // HttpsUtils.post(Tools.GET_PATH('/api/auth/login'), data)
        //     .then(result => {
        //         if (result.message) {
        //             alert(result.message)
        //             return;
        //         }
        //
        //         DeviceStorage.save('user_info', result)
        //         this.refs.toast.show('成功，正在录入信息...', 500, () => {
        //             this.props.navigation.navigate('App')
        //         })
        //
        //     })
        //     .catch(error => {
        //         this.refs.toast.show(error, 500);
        //     })
    }

    componentWillUnmount() {
        this._timer && clearInterval(this._timer);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F4F4F4',
    },
    login_view: {
        marginTop: 90,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: '#efecea',
        borderWidth: 1
    },
});
