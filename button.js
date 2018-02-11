'use strict'

var React = require('react');
var ReactNative = require('react-native');
var { StyleSheet, Text, TouchableOpacity, View } = ReactNative;

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  buttonText: {
    color: '#007ff9',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    height: 57,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = Button
