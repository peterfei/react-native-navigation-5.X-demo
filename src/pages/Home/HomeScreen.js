import React, {PureComponent, useEffect, useState} from 'react';
import {
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {
    View,
    Text,
    Card,
    Button,
    ConnectionStatusBar,
    Typography,
    Colors,
    ActionSheet,
} from 'react-native-ui-lib';
import ListParagraph from '../../compoments/ListParagraph';
import IconFont from '../../iconfont';
import navigationHelper from '../../navigation/navigationHelper';
ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
    // console.warn('what what?!? connection has been lost');
});
import {getFetch, postFetch} from '../../Common/network/request/HttpExtension';
import {PATH} from '../../constants/urls';

class Home extends PureComponent {
    keyExtractor = item => item.id;
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            lastRefresh: Date(Date.now()).toString(),
            loading: true,
            showNative: false,
            courseLists: [],
            headerTabContent: [
                {tabName: '推荐', tabKey: 'top', buttonSize: 'large'},
                {tabName: '个人', tabKey: 'personal', buttonSize: 'small'},
            ],
            tempTabKey: 'top',
        };
        this.refreshScreen = this.refreshScreen.bind(this);
    }
    changeTab(key) {
        this.setState({tempTabKey: key});
        this.setHeader();
        const _params = {ordering: '1'};
        this.setContent(key, _params);
    }
    async componentDidMount() {
        setTimeout(
            function () {
                this.setState({
                    loading: false,
                });
                const _params = {ordering: '1'};
                this.setContent(this.state.headerTabContent[0].tabKey, _params);

                this.setHeader();
            }.bind(this),
            1000,
        );
    }
    async setContent(key, params = '') {
        const course_lists = await this.getCourseLists(key, params);
        this.setState({
            courseLists: course_lists.data,
        });
    }
    setHeader() {
        const _headerRight = () => (
            <TouchableOpacity
                onPress={() => this.showActionSheet()}
                marginL-20
                style={{flexDirection: 'row', width: 30}}>
                <IconFont name="shouqi" color={['black']} />
            </TouchableOpacity>
        );
        const _headerLeft = () => (
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    width: 120,
                    justifyContent: 'space-around',
                }}>
                {this.state.headerTabContent.map((v, k) => {
                    return (
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItem: 'center',
                                alignSelf: 'center',
                            }}>
                            <View>
                                <Button
                                    label={v.tabName}
                                    size={
                                        this.state.tempTabKey == v.tabKey
                                            ? 'large'
                                            : 'small'
                                    }
                                    labelStyle={{
                                        fontWeight:
                                            this.state.tempTabKey == v.tabKey
                                                ? 1000
                                                : 100,
                                        fontSize: 18,
                                    }}
                                    link={true}
                                    linkColor="black"
                                    outline={true}
                                    outlineColor="red"
                                    outlineWidth={10}
                                    labelStyle={{
                                        borderColor: 'red',
                                    }}
                                    onPress={() =>
                                        this.changeTab(v.tabKey)
                                    }></Button>
                            </View>
                            {this.state.tempTabKey == v.tabKey ? (
                                <View
                                    marginL-10
                                    style={{
                                        borderStyle: 'solid',
                                        borderBottomWidth: 2,
                                        width: '40%',
                                        borderBottomColor: 'red',
                                    }}
                                />
                            ) : null}
                        </View>
                    );
                })}
            </View>
        );
        navigationHelper.setParams({
            headerLeft: _headerLeft,
            headerRight: _headerRight,
            title: '主页',
        });
    }
    getCourseLists(key, params) {
        switch (key) {
            case 'top':
                return getFetch(PATH.COURSE_LIST, params);
                break;
            case 'personal':
                return getFetch(PATH.COURSE_LIST_MINE, params);
                break;
            default:
        }
    }
    showActionSheet() {
        this.setState({
            showNative: !this.state.showNative,
        });
    }

    pickOption(index) {
        this.setState({
            pickedOption: index,
        });
    }
    refreshScreen() {
        NetInfo.fetch().then(state => {
            console.log('Connection type', state.type);
            console.log('Is connected?', state.isConnected);
            this.setState({isConnected: state.isConnected});
        });
        this.setState({lastRefresh: Date(Date.now()).toString()});
    }

    flatList = () => {
        return (
            <>
                <FlatList
                    style={styles.container}
                    initialNumToRender={8}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={0.01}
                    removeClippedSubviews
                    windowSize={350} // 如果你的列表的2-3行占一屏的话，这个值应该设置450-600之前
                    data={this.state.courseLists}
                    renderItem={({item, index}) => this.renderItem(item, index)}
                    keyExtractor={this.keyExtractor}
                />
            </>
        );
    };
    gotoDetail() {
        this.props.navigation.navigate('Details');
    }
    renderItem = (item, index) => {
        return (
            <TouchableOpacity onPress={() => this.gotoDetail()}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: 'white',
                    }}
                    marginT-5
                    margin-10>
                    <View style={{flex: 2}}>
                        <Image
                            source={{uri: item.avatar}}
                            style={{width: 120, height: 95}}
                        />
                    </View>
                    <View
                        style={{
                            flex: 3,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                        <Text h1 bold>
                            {item.name}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                width: '80%',
                            }}>
                            <Text grey h4>
                                ID:{item.id}
                            </Text>
                            <Text grey h4 marginL-5>
                                ID:{item.total_num}
                            </Text>
                            <Text grey h4 marginL-5>
                                ID:{item.id}
                            </Text>
                        </View>
                        <View h2>
                            <Text>{item.college_name}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text grey h4>
                                {item.author_name}
                            </Text>
                            <Text grey h4>
                                /
                            </Text>
                            <Text grey h4>
                                {item.created_at}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <>
                <ListParagraph
                    style={{flex: 1}}
                    ParagraphLength={
                        this.state.courseLists.length == 0
                            ? 5
                            : this.state.courseLists.length
                    }
                    isLoading={this.state.loading}
                    list={this.flatList}></ListParagraph>
                {this.state.showNative ? (
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    showNative: !this.state.showNative,
                                });
                            }}>
                            <Animated.View style={styles.mask}></Animated.View>
                        </TouchableOpacity>
                        <View style={styles.boxes}>
                            <View flex>
                                <View style={{flexDirection:"row",margin:5,justifyContent:"space-between",width:"40%"}}>
                                    <IconFont name="shouqi" color={['black']} />
                                    <Button label="搜索" size="medium" link={true} linkColor="black" />
                                </View>
                            </View>
                        </View>
                    </>
                ) : null}
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#f3f3f3',
    },
    mask: {
        backgroundColor: 'lightgrey',
        height: '100%',
    },
    boxes: {
        top: '10%',
        backgroundColor: '#fff',
        width: '40%',
        height: 60,
        flex: 1,
        position: 'absolute',
        right: 10,
        top: 8,
    },
});

export default Home;
