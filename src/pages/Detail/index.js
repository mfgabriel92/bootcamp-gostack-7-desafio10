import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Detail from './Detail'

export default {
  screen: Detail,
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-thin-left" size={23} color="#333" />
      </TouchableOpacity>
    ),
    headerTitle: navigation.getParam('meetup').title,
  }),
}
