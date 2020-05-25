import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native';

class Settings extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Login')}
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
