import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { SvgIcon, Page, Section } from "@app/components";
import { globalColors } from "@app/res/styles";

const Listen = () => {
  return (
    <Page currentTab="Listen">
      <Section
        title="장치 변경하기"
        action="장치 추가하기"
        actionType="add"
        info="소리를 눌러가며 전환할 수 있어요">
        <Device name="거실 듣기 장치" />
      </Section>
      <Section
        title="주변 소리 보기"
        action="기록된 소리 보기"
        actionType="mic"
        info="소리를 눌러가며 전환할 수 있어요"
      />
      <Section
        title="대화 기록"
        action="전체 대화 보기"
        actionType="record"
        info="장치에서 목소리가 들린 경우 자동으로 기록합니다">
        <Record text="안녕하세요" />
        <Record text="내일 밥 거지같으면 급식실에서 시위한다" />
      </Section>
    </Page>
  );
};

const Device = ({ name }) => {
  return (
    <View style={styles.device}>
      <SvgIcon name="DeviceSvg" fill={globalColors.grade7} />
      <Text style={styles.deviceText}>{name}</Text>
    </View>
  );
};

const Record = ({ text }) => {
  return (
    <View style={styles.record}>
      <Text style={styles.recordText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  device: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: globalColors.grade2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: globalColors.grade3,
    gap: 12,
  },
  deviceText: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
  },
  record: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: globalColors.grade3,
  },
});

export default Listen;
