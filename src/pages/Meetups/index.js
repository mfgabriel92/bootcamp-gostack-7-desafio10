import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Meetups from './Meetups'

export default {
  screen: Meetups,
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu" size={23} color="#333" />
      </TouchableOpacity>
    ),
    headerTitle: 'Meetups',
  }),
}
