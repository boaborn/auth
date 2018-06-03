import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native'
import { Header, Button, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBdojFaK0Jeo1aFvkXFOpazykJohYiSeos',
      authDomain: 'auth-95150.firebaseapp.com',
      databaseURL: 'https://auth-95150.firebaseio.com',
      projectId: 'auth-95150',
      storageBucket: 'auth-95150.appspot.com',
      messagingSenderId: '588047518694'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true})
      } else {
        this.setState({ loggedIn: false})
      }
    })
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={ () => firebase.auth().signOut() } >
              Log Out
            </Button>
          </CardSection>  
        )
      case false:
        return <LoginForm />
      default:
        return <View style={ styles.spinnerContainer }><Spinner size="large" /></View>
    }
    
  }
  render() {
    return (
      <View style={ styles.containerStyle }>
        <Header headerText='Authentication' />
        { this.renderContent() }
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center'
  }
}
export default App

