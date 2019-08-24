import React from 'react'
import { Platform, StatusBar } from 'react-native'
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import DashboardLayout from './components/DashboardLayout'
import Meetups from './pages/Meetups'
import MyMeetups from './pages/MyMeetups'
import AttendingMeetups from './pages/AttendingMeetups'
import Create from './pages/Create'

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        Dashboard: createDrawerNavigator(
          {
            Meetups: createStackNavigator(
              {
                Meetups,
                MyMeetups,
                AttendingMeetups,
                Create,
              },
              {
                defaultNavigationOptions: {
                  headerBackTitle: null,
                  headerTintColor: '#333',
                  headerStyle: {
                    backgroundColor: '#f7f7f7',
                    marginTop:
                      Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
                  },
                },
                mode: 'modal',
              }
            ),
          },
          {
            hideStatusBar: true,
            contentComponent: ({ navigation }) => (
              <DashboardLayout navigation={navigation} />
            ),
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'Dashboard' : 'Auth',
      }
    )
  )
