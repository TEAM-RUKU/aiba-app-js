import React from "react";
import { StyleSheet, Text } from "react-native";

import { Screen } from "@app/components";
import { globalColors } from "@app/res/styles";

const SoundScreen = () => {
  return (
    <Screen screenName="기록된 소리">
      <Text>Sound</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 28,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontFamily: "Pretendard-SemiBold",
    color: globalColors.grade9,
  },
  content: {
    flex: 1,
  },
});

export default SoundScreen;
