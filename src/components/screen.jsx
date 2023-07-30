import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalColors } from "@app/res/styles";

import SvgIcon from "./svgicon";

const Screen = ({ screenName, children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}>
      <View style={styles.header}>
        <SvgIcon name="HeaderBackSvg" fill={globalColors.grade5} />
        <Text style={styles.headerText}>{screenName}</Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
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

export default Screen;
