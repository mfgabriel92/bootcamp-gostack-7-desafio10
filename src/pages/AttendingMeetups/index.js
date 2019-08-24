import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import AttendingMeetups from './AttendingMeetups'

export default {
  screen: AttendingMeetups,
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu" size={23} color="#333" />
      </TouchableOpacity>
    ),
    headerTitle: 'Meetups I am going',
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate('Create')}
      >
        <Icon name="plus" size={23} color="#333" />
      </TouchableOpacity>
    ),
  }),
}
