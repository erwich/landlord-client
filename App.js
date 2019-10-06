import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const username = this.state.username,
          password = this.state.password;

    const navigate = this.props.navigation.navigate;

    fetch('http://example.com').then(response => {
      response.text().then(text => {
        Alert.alert('Response', `${text}`);
        navigate('LandingPage', {});
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username: username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={() => this.onLogin()}
        />

      </View>
    );
  }
}

class LandingPage extends Component {
  render() {
    return (
      <Text>Landing Page!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

const MainNavigator = createStackNavigator({
  LoginPage: { screen: Login },
  LandingPage: { screen: LandingPage },
}, {
  initialRouteName: 'LoginPage',
});

const App = createAppContainer(MainNavigator);

export default App;
