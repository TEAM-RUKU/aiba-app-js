import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { globalColors } from "@app/res/styles";

import SvgIcon from "./svgicon";

const Section = ({ title, action, actionType, children }) => {
  const actionIcon = {
    add: "ActionAddSvg",
  }[actionType];

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity style={styles.sectionAction}>
          <SvgIcon name={actionIcon} fill={globalColors.grade7} />
          <Text style={styles.sectionActionText}>{action}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionList}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    gap: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Pretendard-SemiBold",
    color: globalColors.grade7,
  },
  sectionAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 18,
    margin: -18,
  },
  sectionActionText: {
    fontSize: 16,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
  },
  sectionList: {
    gap: 12,
  },
});

export default Section;
