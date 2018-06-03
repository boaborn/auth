import React, { Component } from 'react'
import { View, Platform} from 'react-native'

const Card = (props) => (
  <View style={ styles.containerStyle }>
    { props.children }
  </View>
)

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowOpacity: 0,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.3
      },
      android: {
        elevation: 3
      }
    })
    
  }
}
export { Card } 
