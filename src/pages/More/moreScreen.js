
import React,{PureComponent} from 'react';
import {StyleSheet,View,Button,FlatList,TouchableOpacity,Image,Text,Dimensions} from 'react-native';
import navigationHelper from "../../navigation/navigationHelper";
// import {Image,} from 'react-native-ui-lib';
const width = Dimensions.get("window").width;
class more extends PureComponent{
    constructor(props) {
        super(props);
        this.state={
            special:[{pic: 'http://static.ibodao.com/Public/uploads/images/2019/0902/5d6cbcffbf6b3.png?x-oss-process=image/resize,w_320,h_240',name:'精品课'},
                {pic: 'http://static.ibodao.com/Public/uploads/images/2019/0902/5d6cbcffbf6b3.png?x-oss-process=image/resize,w_320,h_240',name:'教学包'},
                {pic: 'http://static.ibodao.com/Public/uploads/images/2019/0902/5d6cbcffbf6b3.png?x-oss-process=image/resize,w_320,h_240',name:'备课区'},
                {pic: 'http://static.ibodao.com/Public/uploads/images/2019/0902/5d6cbcffbf6b3.png?x-oss-process=image/resize,w_320,h_240',name:'社区'}],
        }
    }
    async componentDidMount(){
        setTimeout(
            function () {
                navigationHelper.setParams({
                    title: '更多',
                })
            }.bind(this),
            1000,
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.special}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderLikeItem}
                    numColumns={4}

                />
            </View>
        )
    }
    /**
     * 列表样式
     * @param item
     * @returns {*}
     */
    renderLikeItem = ({ item,index }) => {
        return (
            <TouchableOpacity  style={styles.likeItem} onPress={() => {
                // this.props.navigation.navigate('CourseInfo',{category_id:item.id})
            }}>
                <Image  roundAsCircle={true} source={{uri:item.pic}} style={styles.likeImg} />
                <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    likeItem: {width: width / 4, marginTop: 10},
    likeImg: {width: width / 4 - 40, height: width / 4 - 40, borderRadius: 5, alignSelf: 'center'},
    textStyle:{alignSelf: 'center',padding:5}
})
export default more;
