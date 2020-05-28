
import React,{PureComponent}from 'react';
import {StyleSheet,View,Text,TextInput}from 'react-native';
import IconFont from "../../iconfont";
class courseCreate extends PureComponent{

    constructor(props){
        super (props)
        this.state = {

        }
}
    async componentDidMount(){
    }
     render(){
        return(
            <View style={styles.container}>
                <View style={styles.viewStyle}>
                    <TextInput style={styles.textInputStyle}
                           placeholder='请输入课程名'
                           placeholderTextColor={"#8A9199"}
                           multiline={true}
                           onChangeText={(text) => this.setState({ text })}
                    />
                    <View style={styles.addViewStyle}>
                        <IconFont   name="tianjia2" size={40} color={['#909499']} onPress={() => {}}/>
                        <Text style={styles.addTextStyle}>添加封面</Text>
                    </View >
                    <View style={styles.viewOptionsStyle}>
                        <IconFont  name="tianjia1" size={20} color={['#606366']}/>
                        <Text style={styles.textOptionsStyle}>课程分类</Text>
                        <IconFont name="youjiantouD"/>
                    </View>
                    <View style={styles.viewOptionsStyle}>
                        <IconFont  name="tianjia1" size={20} color={['#606366']}/>
                        <Text style={styles.textOptionsStyle}>添加班级</Text>
                        <IconFont name="youjiantouD"/>
                    </View>
                    <View style={styles.viewOptionsStyle}>
                        <IconFont  name="fangshi" size={20} color={['#606366']}/>
                        <Text style={styles.textOptionsStyle}>加入方式</Text>
                        <IconFont name="youjiantouD"/>
                    </View>
                    <View style={styles.viewOptionsStyle}>
                        <IconFont  name="guankanshu" size={20} color={['#606366']}/>
                        <Text style={styles.textOptionsStyle}>加入角色</Text>
                        <IconFont name="youjiantouD"/>
                    </View>
                </View>
            </View>
        )
     }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    viewStyle: {
        marginLeft: 20,
        marginRight: 20
    },
    textInputStyle: {
        fontSize: 20,
        marginTop: 10,
    },
    addViewStyle: {
        marginTop:10,
        marginBottom:50,
        width: 110,
        height: 80,
        padding: 30,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    addTextStyle: {
        marginTop: 5,
        fontSize: 12,
        color: "#C0C6CC"
    },
    viewOptionsStyle: {
        marginTop: 15,
        flexDirection:'row'
    },
    textOptionsStyle:{
      marginLeft:10,
      fontSize:15,
      color: "#303133",
    }

})
export default courseCreate;
