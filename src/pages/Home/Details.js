import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Colors, View, Badge, Button, Text} from 'react-native-ui-lib'; //eslint-disable-line
const BadgesSpace = 30;
const plusIcon = require('../../assets/images/chevronUp.png');
const minusIcon = require('../../assets/images/chevronDown.png');
const star = require('../../assets/images/star.png');

export default class BadgesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 42
    };
  }

  changeLabelValue(value) {
    const currValue = this.state.value;
    const newValue = currValue + value;
    if (newValue >= 1) {
      this.setState({value: newValue});
    }
  }

  render() {
    return (
        <Text/>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.dark70
  },
  iconBadgeColumnContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
