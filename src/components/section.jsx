import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { globalColors } from "@app/res/styles";

import SvgIcon from "./svgicon";

const Section = ({ title, action, actionType, onAction, info, children }) => {
  const actionIcon = {
    add: "ActionAddSvg",
    record: "ActionRecordSvg",
    mic: "ActionMicSvg",
    correction: "ActionCorrectionSvg",
  }[actionType];

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {action && (
          <TouchableOpacity style={styles.sectionAction} onPress={onAction}>
            <SvgIcon name={actionIcon} fill={globalColors.grade7} />
            <Text style={styles.sectionActionText}>{action}</Text>
          </TouchableOpacity>
        )}
      </View>
      {info && (
        <View style={styles.sectionInfo}>
          <SvgIcon name="SectionInfoSvg" fill={globalColors.grade5} />
          <Text style={styles.sectionInfoText}>{info}</Text>
        </View>
      )}
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
  sectionInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 4,
    marginTop: -10,
  },
  sectionInfoText: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade5,
  },
  sectionList: {
    gap: 12,
  },
});

export default Section;
