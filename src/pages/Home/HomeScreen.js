import React, {PureComponent} from 'react';

import {View, Text, Card, Button} from 'react-native-ui-lib';

class Home extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View flex  center>
                <Text darkText h2>Home screen</Text>
                <Button
                    size="xSmall"
                    label="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default Home;
