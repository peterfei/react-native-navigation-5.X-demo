/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Keyboard,
} from 'react-native'
import { size, isIPhoneXPaddTop,isIPhoneXFooter } from '../../../src/Common/tool/ScreenUtil';

import { postFetch } from '../../Common/network/request/HttpExtension';

import Icon from "../../iconfont/index";
import color from '../../../Theme';
import Toast, { DURATION } from 'react-native-easy-toast'

const width = Dimensions.get('window').width
import { Header, Text, Input, Button } from 'react-native-elements'
import {getFetch} from "../../Common/network/request/HttpExtension";
import {PATH} from "../../constants/urls";
import navigationHelper from "../../navigation/navigationHelper";
import navigation from "../../navigation/navigationHelper";

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            name_error: '',
            pass_error: '',
            isClick_Bnt: true,
            isMessage: false,
            isShowPass: false,
            time_lab: '获取验证码'
        }
        this.name_input = React.createRef()
        this.pass_input = React.createRef()
        this._onClickLogin = this._onClickLogin.bind(this) //登录
        this._getPhoneCode = this._getPhoneCode.bind(this) //获取验证码
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerShown:false
        });
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    Keyboard.dismiss()
                }}
                activeOpacity={1}
            >
                <Header
                    backgroundColor={'#FFFFFF'}
                    leftComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={() => {
                                this.props.navigation.goBack()
                            }}
                        >
                            <Icon name={'guanbi'} size={17} color={color.title} />
                        </TouchableOpacity>
                    }
                    rightComponent={
                        <Text
                            style={{ fontSize: 17, color: color.title }}
                            onPress={() =>
                                this.props.navigation.push('RegisterAndReset', { type: 1 })
                            }
                        >
                            注册
                        </Text>
                    }
                />
                <Text
                    h4
                    style={{
                        marginTop: 10,
                        textAlign: 'center',
                        color: color.title
                    }}
                >
                    {this.state.isMessage ? '短信登录' : '账号登录'}
                </Text>

                <View style={styles.center_view}>
                    <Input
                        ref={this.name_input}
                        placeholder={
                            this.state.isMessage ? '短信登录仅限中国大陆用户' : '手机号/邮箱'
                        }
                        leftIcon={
                            this.state.isMessage ? (
                                <Text
                                    style={{ color: color.title, fontSize: 17, marginRight: 20 }}
                                >
                                    +86
                                </Text>
                            ) : null
                        }
                        value={this.state.username}
                        errorStyle={{ color: 'red' }}
                        clearButtonMode={'always'}
                        errorMessage={this.state.name_error}
                        placeholderTextColor={color.gray}
                        containerStyle={{ marginBottom: 40 }}
                        inputStyle={{ fontSize: 17, color: color.title }}
                        keyboardType={this.state.isMessage ? 'numeric' : 'default'}
                        onChangeText={text => {
                            this.setState({ username: text })
                        }}
                    />
                    <Input
                        ref={this.pass_input}
                        placeholder={this.state.isMessage ? '请输入验证码' : '密码'}
                        rightIcon={
                            this.state.isMessage ? (
                                <Button
                                    type={'Clear'}
                                    titleStyle={{ fontSize: 12 }}
                                    disabled={this.state.username.length > 10 ? false : true}
                                    disabledStyle={{ backgroundColor: '#edeeef' }}
                                    title={this.state.time_lab}
                                    onPress={this._getPhoneCode}
                                />
                            ) : (
                                <Icon
                                    name={'yulan'}
                                    size={30}
                                    style={{ margin: 10 }}
                                    color={this.state.isShowPass ? color.title : color.subhead}
                                    onPress={() => {
                                        this.setState({ isShowPass: !this.state.isShowPass })
                                    }}
                                />
                            )
                        }
                        value={this.state.password}
                        secureTextEntry={
                            this.state.isMessage
                                ? false
                                : this.state.isShowPass
                                ? false
                                : true
                        }
                        selectTextOnFocus={true}
                        clearButtonMode={'always'}
                        errorStyle={{ color: 'red' }}
                        errorMessage={this.state.pass_error}
                        placeholderTextColor={color.gray}
                        containerStyle={{ marginBottom: 40 }}
                        inputStyle={{ fontSize: 17, color: color.subhead }}
                        onChangeText={text => {
                            this.setState({ password: text })
                        }}
                        keyboardType={this.state.isMessage ? 'numeric' : 'default'}
                    />

                    <Button
                        title={'登录'}
                        titleStyle={{ color: '#FFFFFF', fontSize: 17 }}
                        buttonStyle={{
                            backgroundColor: color.orange,
                            margin: 10,
                            height: 55
                        }}
                        disabled={
                            this.state.username.length < 11 && this.state.password.length < 6
                        }
                        disabledStyle={{ backgroundColor: color.gray }}
                        disabledTitleStyle={{ color: '#FFFFFF', fontSize: 17 }}
                        onPress={this._onClickLogin}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 0,
                            marginRight: 0,
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button
                            type="clear"
                            title={this.state.isMessage ? '账号密码登录' : '手机短信登录'}
                            titleStyle={{ color: color.subhead, fontSize: 17 }}
                            onPress={() => {
                                this.setState({ isMessage: !this.state.isMessage })
                            }}
                        />
                        <Button
                            type="clear"
                            title={'忘记密码'}
                            titleStyle={{ color: color.subhead, fontSize: 17 }}
                            onPress={() => {
                                this.props.navigation.push('RegisterAndReset', { type: 2 })
                            }}
                        />
                    </View>
                </View>

                <Text
                    style={{
                        marginTop: size(180),
                        textAlign: 'center',
                        color: color.title,
                        fontSize: 16,
                        height: 30
                    }}
                >
                    第三方账号登录
                </Text>
                <View style={styles.bottom_icon}>
                    <Icon
                        name={'weixin1'}
                        size={38}
                        onPress={() => {
                            this._otherClick(0)
                        }}
                    />
                    <Icon
                        name={'weibo1'}
                        size={38}
                        onPress={() => {
                            this._otherClick(1)
                        }}
                    />
                    <Icon
                        name={'qq'}
                        size={38}
                        onPress={() => {
                            this._otherClick(2)
                        }}
                    />
                </View>
                <Toast ref="toast" position="center" />
            </TouchableOpacity>
        )
    }

    _onClickLogin = () => {
        //登录
        const login_data = postFetch(PATH.LOGIN,{'username':this.state.username,'password':this.state.password});

        alert(login_data);

    }

    getCourseLists() {
        return getFetch(PATH.COURSE_LIST, {});
    }

    _otherClick(num) {

        let HH = '';
        switch (num) {
            case 0: //微信
                HH = "微信";
                break
            case 1: //微博
                HH = "微博";
                break
            case 2: //QQ
                HH = "QQ";
                break
        }

        alert(HH);

    }

    _getPhoneCode = () => {
        //获取验证码
        if (this.state.time > 0) {
            return
        }

        postFetch(
            '/api/register/get_verify_code',
            { account: this.state.username },
            response => {
                if (response && response.data.length > 0) {
                    if (response.status === 200) {
                        this.refs.toast.show('验证码发送成功，请注意接收!', 500)
                        this.countTime(60)
                    } else {
                        alert(JSON.stringify(response))
                    }
                } else {
                    this.refs.toast.show('获取验证码失败', 500)
                }
            }
        )
    }

    countTime(num) {
        let new_time = num
        this._timer = setInterval(() => {
            new_time--
            this.setState({ time: new_time })
            if (this.state.time <= 0) {
                this.setState({
                    time: new_time,
                    time_lab: '获取验证码'
                })
                this._timer && clearInterval(this._timer)
            } else {
                this.setState({
                    time: new_time,
                    time_lab: `重新获取(${new_time}s)`
                })
            }
        }, num * 10)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    center_view: {
        marginTop: size(30),
        marginLeft: 0,
        marginRight: 0,
        padding: 30
    },
    bottom_icon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 60,
        marginRight: 60,
        marginBottom: isIPhoneXFooter(40),
        height: size(50)
    }
})
