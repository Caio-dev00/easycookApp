
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';

import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native';

const stack = createNativeStackNavigator();

export function AppRoutes() {

  return (
      <stack.Navigator>

        <stack.Screen
          name='SignIn'
          component={SignIn}
          options={{
            headerShown: false
          }}
        />

        <stack.Screen
          name='Home'
          component={Home}
          options={({ navigation, route, name, size }) => ({
              headerBackVisible: false,
              headerTintColor: "#FFF",
              headerStyle: { backgroundColor: "#FD2B3A" },
              headerRight: () => (
                <TouchableOpacity>
                  <FontAwesome name={name} size={size} color="#FFF" />
                </TouchableOpacity>
              )
          })}
        />

        <stack.Screen
          name='Profile'
          component={Profile}
          options={({ navigation, route, name, size }) => ({
              headerBackVisible: true,
              headerTintColor: "#FFF",
              headerStyle: { backgroundColor: "#FD2B3A" },
              headerRight: () => (
                <TouchableOpacity>
                  <FontAwesome name={name} size={size} color="#FFF" />
                </TouchableOpacity>
              )
          })}
        />
      </stack.Navigator>
  )
}