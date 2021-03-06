import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native';

import navigationHelper from '../../navigation/navigationHelper';
class Settings extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        navigationHelper.setParams({
            headerRight: null,
            title:"Mine"
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('outLine')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Settings;
