import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ConversationScreen from "./screens/conversation";
import SoundScreen from "./screens/sound";

const Stack = createStackNavigator();
const ListenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Sound" component={SoundScreen} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
    </Stack.Navigator>
  );
};

export default ListenStack;
