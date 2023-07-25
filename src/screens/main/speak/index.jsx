import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import moment from "moment";

import { SvgIcon, Page, Section } from "@app/components";
import { globalColors } from "@app/res/styles";

const Speak = () => {
  return (
    <Page currentTab="Speak">
      <Section title="요약" />
      <Section
        title="오늘의 발음 교정"
        action="교정 시작하기"
        actionType="correction">
        <Correction type="양순" date="2023-07-26" />
      </Section>
    </Page>
  );
};

const Correction = ({ type, date }) => {
  return (
    <View style={styles.correction}>
      <View style={styles.correctionType}>
        <Text style={styles.correctionTypeText}>교정 부위</Text>
        <Text style={styles.correctionTypeTargetText}>{type}</Text>
      </View>
      <View style={styles.correctionDate}>
        <SvgIcon name="ActionDateSvg" fill={globalColors.grade7} />
        <Text style={styles.correctionDateText}>
          {moment(date).format("M월 D일")}{" "}
          {["일", "월", "화", "수", "목", "금", "토"][moment(date).format("d")]}
          요일
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  correction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: globalColors.grade3,
    gap: 12,
  },
  correctionType: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  correctionTypeText: {
    fontSize: 16,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
  },
  correctionTypeTargetText: {
    fontSize: 20,
    fontFamily: "Pretendard-SemiBold",
    color: globalColors.grade7,
  },
  correctionDate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  correctionDateText: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
  },
});

export default Speak;
