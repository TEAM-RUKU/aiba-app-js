import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { log } from "@app/utils/logging";

import ListenStack from "./listen/stack";
import IndexStack from "./stack";

const Stack = createStackNavigator();
const Kinetic = () => {
  log("REND", "Root Stack > Main Stack");
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Index" component={IndexStack} />
      <Stack.Screen name="ListenStack" component={ListenStack} />
    </Stack.Navigator>
  );
};

export default Kinetic;
