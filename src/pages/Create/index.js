import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Create from './Create'

export default {
  screen: Create,
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-thin-left" size={23} color="#333" />
      </TouchableOpacity>
    ),
    headerTitle: 'Create Meetup',
  }),
}
