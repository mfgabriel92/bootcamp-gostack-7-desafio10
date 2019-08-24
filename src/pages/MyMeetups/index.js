import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import MyMeetups from './MyMeetups'

export default {
  screen: MyMeetups,
  navigationOptions: ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu" size={23} color="#333" />
      </TouchableOpacity>
    ),
    headerTitle: 'My Meetups',
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
