import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    SectionList,
    Alert,
    TouchableOpacity, Button, TextInput
} from "react-native";
import Icon from '../../../iconfont';
import {Input} from "react-native-elements";
import {postFetch} from "../../../Common/network/request/HttpExtension";
import  {PATH}  from '../../../constants/urls'
export default class ReleaseSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            chapters : {},
        }
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerTitle: this.props.route.params?'编辑章节':'发布章节',
            headerBackTitleVisible: false,
            headerBackImage: () => (
                <Icon name='guanbi' size={20} color={'#303133'} style={{marginLeft: 20}}/>
            ),

            headerRight: () => (
                <Button title="发布" onPress={() => this._releaseAction()} color='#FF783C'/>
            )

        });

        this.setState({
            title:this.props.route.params?this.state.chapters.title:'',
            content:this.props.route.params?this.state.chapters.content:'',
            chapters : this.props.route.params?this.props.route.params.chapters_data:'',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{margin: 20, minHeight: 40, borderBottomColor: '#EDF0F2', borderBottomWidth: 1}}>
                    <TextInput placeholder={"请输入章节名称（20字内）"}
                               ref={'title'}
                               maxLength={20}
                               multiline={true}
                               numberOfLines={2}
                               style={{fontSize: 20}}
                               allowFontScaling={false}
                               onChangeText={(text) => {
                                   this.setState({title: text})
                               }}

                               value={this.state.title}
                    />
                </View>
                <View style={{marginTop: 5, marginLeft: 20, marginRight: 20, minHeight: 40}}>
                    <TextInput placeholder={"请输入章节介绍（60字内）"}
                               ref={'content'}
                               maxLength={60}
                               multiline={true}
                               style={{fontSize: 15}}
                               textAlignVertical={'top'}
                               allowFontScaling={false}
                               onChangeText={(text) => {
                                   this.setState({content: text})
                               }}

                               value={this.state.content}
                    />
                </View>

            </View>

        )

    }

    async _releaseAction() {

        try {
            const data = await  postFetch(PATH.ADDCHAPTERS+this.state.chapters.course_id+"/chapters", {title:this.state.title,intro:this.state.contain})
            this.props.navigation.goBack();
        }catch (e) {
                alert(e)
        }


    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
});