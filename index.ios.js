
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
    TextInput,
    ScrollView,
    ListView,
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
            <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center'
                  }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};


class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
              <TextInput
                 style={{height: 40}}
                 placeholder="Type here to translate!"
                 onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                  {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

class Scroller extends Component {
    render() {
        return(
            <ScrollView>
              <Text style={{fontSize:96}}>Scroll me plz</Text>
              <Text style={{fontSize:96}}>If you like</Text>
              <Text style={{fontSize:96}}>Scrolling down</Text>
              <Text style={{fontSize:96}}>What''s the best</Text>
              <Text style={{fontSize:96}}>Framework around?</Text>
              <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
    );
  }
}


class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });
}

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

AppRegistry.registerComponent('LearnReactNative', () =>ListViewBasics);
