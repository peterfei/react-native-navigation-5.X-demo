import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {
    View,
    Text,
    Card,
    Button,
    ConnectionStatusBar,
    Typography,
    Colors,
} from 'react-native-ui-lib';
ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
    // console.warn('what what?!? connection has been lost');
});
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            lastRefresh: Date(Date.now()).toString(),
        };
        this.refreshScreen = this.refreshScreen.bind(this);
    }
    componentDidMount() {}
    refreshScreen() {
        NetInfo.fetch().then(state => {
            console.log('Connection type', state.type);
            console.log('Is connected?', state.isConnected);
            this.setState({isConnected: state.isConnected});
        });
        this.setState({lastRefresh: Date(Date.now()).toString()});
    }
    render() {
        return (
            <View flex center>
                <ConnectionStatusBar
                    onConnectionChange={isConnected =>
                        this.setState({isConnected})
                    }
                    label="没有网络连接,请检查您的网络设置"
                />
                <Text darkText h2>
                    Home screen
                </Text>
                <Button
                    size="xSmall"
                    label="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                {this.state.isConnected ? null : (
                    <View style={styles.container}>
                        <Text style={{...Typography.text70}} grey>
                            暂无网络,
                        </Text>
                        <Button
                            size="small"
                            label="手动刷新"
                            link="true"
                            onPress={this.refreshScreen}
                        />
                    </View>
                )}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f3f3f3',
    },
});

export default Home;
