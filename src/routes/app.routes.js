
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

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
          options={{
            headerBackVisible: false,
            headerTintColor: "#FFF",
            headerStyle: { backgroundColor: "#FD2B3A" }
          }}
        />

      </stack.Navigator>
  )
}