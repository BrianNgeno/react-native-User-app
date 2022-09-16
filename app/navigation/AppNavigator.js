import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingEditingScreen from "../screens/ListingEditingScreen";
import AccountNavigator from "./AccountNavigator";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "yellow",
      activeTintColor: "#f0edf6",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Listing"
      component={ListingDetailsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={18}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Image Edits"
      component={ListingEditingScreen}
      options={{
        tabBarButton: () => <NewListingButton />,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" size={15} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
