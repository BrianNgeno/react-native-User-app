import React from "react";

import HomeScreen from "../screens/HomeScreen";
import ListingEditingScreen from "../screens/ListingEditingScreen";
import AccountNavigator from "./AccountNavigator";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const AppNavigator = () => (
  
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor:colors.white,
      inactiveBackgroundColor:'yellow',
      activeTintColor:  colors.medium,
      inactiveTintColor: colors.medium,
      style: {
        borderTopColor: "#fff",
        backgroundColor: colors.light,
        elevation: 0,
      },
    }}
  >
    
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={20}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Upload Image"
      component={ListingEditingScreen}
      options={{
        tabBarButton: () => <NewListingButton />,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="plus-circle"     
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" size={20} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  
);

export default AppNavigator;
