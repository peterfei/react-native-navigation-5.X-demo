import React, {PureComponent} from 'react';
import {StyleSheet, FlatList} from 'react-native';
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
ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
    // console.warn('what what?!? connection has been lost');
});

const listItems = [
    {id: '0', text: 'Item'},
    {id: '1', text: 'Item'},
    {id: '2', text: 'Item'},
    {id: '3', text: 'Item'},
    {id: '4', text: 'Item'},
    {id: '5', text: 'Item'},
];
class Home extends PureComponent {
    keyExtractor = item => item.id;
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            lastRefresh: Date(Date.now()).toString(),
            loading: true,
            showNative: false,
        };
        this.refreshScreen = this.refreshScreen.bind(this);
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <IconFont
                    name="tianjia"
                    size={40}
                    color={['green']}
                    onPress={() => this.showActionSheet()}
                />
            ),
        });
        setTimeout(
            function () {
                this.setState({
                    loading: false,
                });
            }.bind(this),
            1000,
        );
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
                    windowSize={350} // 如果你的列表的2-3行占一屏的话，这个值应该设置450-600之前，如果四五行占一屏应该设置300-350之间
                    data={listItems}
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
                            label: 'option 2',
                            onPress: () => this.pickOption('option 2'),
                        },
                        {
                            label: 'option 3',
                            onPress: () => this.pickOption('option 3'),
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
    renderHeader = () => {
        return (
            <View style={styles.headerButton}>
                <Text
                    style={styles.welcome}
                    onPress={this.headerImageScrollView}>
                    自定义头部图片 & 缩放!
                </Text>
            </View>
        );
    };

    renderItem = (item, index) => {
        return (
            <View>
                <Text>
                    {item.text} #{item.id}
                </Text>
            </View>
        );
    };
    render() {
        return (
            <ListParagraph
                style={{flex: 1}}
                ParagraphLength={listItems.length}
                isLoading={this.state.loading}
                list={this.flatList}
            />
        );
        //return (
        //    <View flex center>
        //        <ConnectionStatusBar
        //            onConnectionChange={isConnected =>
        //                this.setState({isConnected})
        //            }
        //            label="没有网络连接,请检查您的网络设置"
        //        />
        //        <Text darkText h2>
        //            Home screen
        //        </Text>
        //        <Button
        //            size="xSmall"
        //            label="Go to Details"
        //            onPress={() => this.props.navigation.navigate('Details')}
        //        />
        //        {this.state.isConnected ? null : (
        //            <View style={styles.container}>
        //                <Text style={{...Typography.text70}} grey>
        //                    暂无网络,
        //                </Text>
        //                <Button
        //                    size="small"
        //                    label="手动刷新"
        //                    link="true"
        //                    onPress={this.refreshScreen}
        //                />
        //            </View>
        //        )}
        //    </View>
        //);
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f3f3f3',
    },
});

export default Home;
