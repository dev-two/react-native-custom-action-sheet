'use strict';

var React = require('react');
var ReactNative = require('react-native');
var { Animated, Dimensions, StyleSheet, View } = ReactNative;
var window = Dimensions.get('window');

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    this._animate(this.props);
  }

  componentWillReceiveProps(newProps) {
    this._animate(newProps);
  }

  _animate(newProps){
    return Animated.timing(this.state.fadeAnim, {
      toValue: newProps.visible ? 0.3 : 0,
      duration: 300
    }).start();
  }

  render() {
    if(this.props.visible) {
      return (
        <View style={{flex: 1}}>
          <Animated.View style={[styles.overlay,
              {opacity: this.state.fadeAnim},
              {backgroundColor: this.props.backgroundColor || 'black' }
            ]}>
          </Animated.View>
          {this.props.children}
        </View>
      );
    } else {
      return null
    }
  }

}

var styles = StyleSheet.create({
  overlay: {
    top: 0,
    bottom: -20,
    left: 0,
    right: 0,
    height: window.height,
    width: window.width,
    position: 'absolute'
  }
});

module.exports = FadeInView;
