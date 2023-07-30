import React from "react";
import { StyleSheet, Text } from "react-native";

import { Screen } from "@app/components";
import { globalColors } from "@app/res/styles";

const ConversationScreen = () => {
  return (
    <Screen screenName="기록된 대화">
      <Text>Conversation</Text>
    </Screen>
  );
};

export default ConversationScreen;
