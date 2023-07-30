import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { SvgIcon, Page, Section } from "@app/components";
import { globalColors } from "@app/res/styles";

const Listen = () => {
  const navigation = useNavigation();

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
        onAction={() => {
          navigation.navigate("ListenStack", {
            screen: "Sound",
          });
          console.log("hi");
        }}
        info="소리를 눌러가며 전환할 수 있어요">
        <Near />
      </Section>
      <Section
        title="대화 기록"
        action="전체 대화 보기"
        actionType="record"
        onAction={() => {
          navigation.navigate("ListenStack", {
            screen: "Conversation",
          });
          console.log("hi");
        }}
        info="장치에서 목소리가 들린 경우 자동으로 기록합니다">
        <Record text="안녕하세요" />
        <Record text="혹시 최애의 아이 보셨나요" />
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

const Near = () => {
  return (
    <View style={styles.near}>
      <View style={styles.nearBox} />
      <View style={styles.nearRow}>
        <TouchableOpacity style={styles.nearButton}>
          <SvgIcon name="ButtonRecordSvg" fill={globalColors.grade7} />
          <Text style={styles.nearButtonText}>이 소리 기록하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nearButton}>
          <SvgIcon name="ButtonARSvg" fill={globalColors.grade7} />
          <Text style={styles.nearButtonText}>시각 정보 보기</Text>
        </TouchableOpacity>
      </View>
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
  recordText: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
  },
  near: {
    gap: 16,
  },
  nearBox: {
    height: 195,
    backgroundColor: globalColors.grade2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: globalColors.grade3,
  },
  nearRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  nearButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    backgroundColor: globalColors.grade2,
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: globalColors.grade3,
  },
  nearButtonText: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
  },
});

export default Listen;
