
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,  
    View
} from 'react-native';

export default class LearnReactNative extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Hello World!
              </Text>
              <Text style={styles.instructions}>
                We are editing index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
              <Bananas/>
              <Greeting name="Hua what"/>
              <Blink text="This is a blinker and not even kidding" timer="1000"/>
              <Blink text="This is a new one" timer="200"/>
              <Blink text="Very slow blinker" timer="5000"/>

              <FlexDimensionsBasics/>
              <FlexDimensionsBasics/>
            </View>


        );
    }
}

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
                <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
                <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, parseInt(this.props.timer));
    }

    render() {
        let display = this.state.showText ? this.props.text: ' ';
        return (
            <Text>{display}</Text>
        );
    }
};

class FlexDimensionsBasics extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, backgroundColor: 'powderblue'}} />
              <View style={{flex: 2, backgroundColor: 'skyblue'}} />
              <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',

      backgroundColor: '#F5FCFF'
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
  },
});

AppRegistry.registerComponent('LearnReactNative', () => LearnReactNative);
