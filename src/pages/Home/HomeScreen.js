import React, {PureComponent, useEffect} from 'react';
import {StyleSheet, FlatList,Image} from 'react-native';
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
        };
        this.refreshScreen = this.refreshScreen.bind(this);
    }

    async componentDidMount() {
        setTimeout(
            function () {
                const _headerRight = () => (
                    <IconFont
                        name="tianjia"
                        size={40}
                        color={['red']}
                        onPress={() => this.showActionSheet()}
                    />
                );
                navigationHelper.setParams({
                    headerRight: _headerRight,
                    title: '主页',
                }); //FIXME: Navigation Tab 动态修改按钮not work
                this.setState({
                    loading: false,
                });
            }.bind(this),
            1000,
        );
        const course_lists = await this.getCourseLists();
        this.setState({
            courseLists: course_lists.data,
        });
    }

    getCourseLists() {
        return getFetch(PATH.COURSE_LIST, {});
    }
    showActionSheet() {
        this.setState({
            showNative: true,
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
                <ActionSheet
                    title="Title"
                    message="Message of action sheet"
                    cancelButtonIndex={3}
                    destructiveButtonIndex={0}
                    options={[
                        {
                            label: 'option 1',
                            onPress: () => this.pickOption('option 1'),
                        },
                        {
                            label: 'cancel',
                            onPress: () => this.pickOption('cancel'),
                        },
                    ]}
                    visible={this.state.showNative}
                    useNativeIOS
                    onDismiss={() => this.setState({showNative: false})}
                />
            </>
        );
    };


    renderItem = (item, index) => {
        return (
            <View style={{flexDirection:"row"}}>
                <View >
                    <Image source={{uri:item.avatar}} style={{width:80,height:80}}/>
                </View>
                <View >
                    <Text>{item.name}</Text>
                </View>
            </View>
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
            </>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#f3f3f3',
    },
});

export default Home;
