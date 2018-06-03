import React from 'react'
import { Platform, Text, View} from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>{ props.headerText }</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    ...Platform.select({
      ios: {
        paddingTop: 15,
        shadowOpacity: 0.3
      },
      android: {
        elevation: 3
      }
    }),
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'black'
  }
}

export { Header }
