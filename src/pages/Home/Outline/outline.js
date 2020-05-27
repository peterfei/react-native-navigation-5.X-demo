import React, {Component} from "react";
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    SectionList,
    Alert,
    TouchableOpacity} from "react-native";
import Icon from '../../../iconfont';

export default class OutLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 42,
            cellDataArray:[]

        };

        this.cellDatas = [
            {
                id:'0',
                title:'第1章 开宗明义【告诉你：学什么+收获什么】',
                video:3,
                test:6,
                task:2,
                ziliao:1,
                show:true,
                data:[
                    {id:'1',title:'1-1 Java并发成神之路——精通JUC并发工具…'} ,
                    {id:'2',title:'1-2 课程介绍及学习指导'} ,
                ]
            },
            {
                id:'1',
                title:'第2章 类型初步',
                video:3,
                test:6,
                task:2,
                ziliao:1,
                show:true,
                data:[
                    {id:'1',title:'2-1 基本类型'} ,
                    {id:'2',title:'2-2 数组'} ,
                ]
            },
        ];
    }

    componentDidMount() {
        let newArray = JSON.parse(JSON.stringify(this.cellDatas));
        this.setState({
            cellDataArray:newArray
        });
    }

    handlerSectionHeader=(info)=>{//Alert.alert('sss', 'd');
        if(info.section.show){
            //清空要隐藏的数据条目
            this.state.cellDataArray.map((item, index)=>{
                    if(item === info.section){
                        item.show = !item.show;
                        //清空要隐藏的数据条目
                        item.data=[{id:'close'}];
                        // Alert.alert('item.show',' '+item.show);
                    }
                }
            );
        }else{
            this.cellDatas.map((item, index) => {
                //判断要显示的那个组
                if(item.id === info.section.id){
                    //重新获取条目数据
                    let data = item.data;
                    this.state.cellDataArray.map((cellItem, index)=>{
                        if(cellItem === info.section){
                            cellItem.show = !cellItem.show;
                            cellItem.data = data;
                        }
                    });
                }
            });
        }

        /**
         * 所以请先检查你的renderItem函数所依赖的props数据（包括data属性以及可能用到的父组件的state），
         * 如果是一个引用类型（Object或者数组都是引用类型），则需要先修改其引用地址（比如先复制到一个新的Object或者数组中），
         * 然后再修改其值，否则界面很可能不会刷新。
         */
        let newsDatas = JSON.parse(JSON.stringify(this.state.cellDataArray));
        this.setState({
            cellDataArray:newsDatas,
        });
    }

    _renderItem=(info)=>{
        //如果title为undefined(解决空数据section之间不显示的问题)
        if(info.item.title == undefined){
            return(<View></View>);
        }else{
            return (
                <View style={{height:40,backgroundColor:'white',justifyContent:'center'}}>
                    <Text style={{color:'red'}}>
                        {info.item.title}
                    </Text>
                </View>
            );
        }
    }

    _renderSectionHeader=(item)=>{
        return  (
            <TouchableOpacity style={{backgroundColor:'white',height:60,justifyContent:'center',margin:5}} onPress={this.handlerSectionHeader.bind(this, item)}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Icon name="paichu" size={14} color={'#303133'} style={{marginLeft:10,marginRight:10}}/>
                        <Text style={{fontSize:15,color:'#303133'}}>{item.section.title}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <Text>视频课：{item.section.video}</Text>
                        <Text>测试：{item.section.test}</Text>
                        <Text>作业：{item.section.task}</Text>
                        <Text>资料：{item.section.ziliao}</Text>
                    </View>
            </TouchableOpacity>);
    }

    render(){
        /**
         * 特别注意的地方:
         * 如需用setState来更新页面 需要设置：
         * extraData={this.state}
         */
        return(
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={this._renderSectionHeader}
                    renderItem={this._renderItem}
                    sections={this.state.cellDataArray}
                    extraData={this.state}
                    keyExtractor={(item, index) => item + index}
                    // sections={this.cellDatas}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});
