import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { getVersion, getBuildNumber } from "react-native-device-info";

import moment from "moment";

import { SvgIcon, Page, Section } from "@app/components";
import { globalColors } from "@app/res/styles";

const Settings = () => {
  return (
    <Page currentTab="Settings">
      <Section title="장치 관리하기" action="장치 추가하기" actionType="add">
        <Device name="거실 듣기 장치" />
        <Device name="안방 듣기 장치" />
        <Device name="가방 듣기 장치" />
      </Section>
      <Section title="학습된 목소리" action="목소리 학습하기" actionType="add">
        <Voice icon="VoiceSvg" name="호시노 아이" date="2021-08-01" />
        <Voice icon="VoiceSvg" name="나카노 미쿠" date="2021-08-01" />
      </Section>
      <View style={styles.info}>
        <Text style={styles.infoVersion}>
          앱 버전 {getVersion()}({getBuildNumber()})
        </Text>
        <Text style={styles.infoLicense}>오픈소스 라이선스 보기</Text>
      </View>
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

const Voice = ({ icon, name, date }) => {
  return (
    <View style={styles.voice}>
      <View style={styles.voiceInfo}>
        <View style={styles.voiceIcon} />
        <View style={styles.voiceContent}>
          <Text style={styles.voiceName}>{name}</Text>
          <Text style={styles.voiceDate}>
            {moment(date).format("M월 D일")}에 등록한 목소리
          </Text>
        </View>
      </View>
      <View style={styles.voiceActions}>
        <TouchableOpacity style={styles.voiceAction}>
          <SvgIcon name="ActionEditSvg" fill={globalColors.grade7} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.voiceAction}>
          <SvgIcon name="ActionDelete20Svg" fill={globalColors.grade7} />
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
  voice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: globalColors.grade3,
  },
  voiceInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  voiceIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: globalColors.grade2,
  },
  voiceContent: {
    gap: 4,
  },
  voiceName: {
    fontSize: 14,
    fontFamily: "Pretendard-SemiBold",
    color: globalColors.grade7,
  },
  voiceDate: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade5,
  },
  voiceActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  voiceAction: {
    padding: 10,
    margin: -10,
  },
  info: {
    marginTop: 15,
    paddingHorizontal: 24,
    gap: 12,
  },
  infoVersion: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade6,
  },
  infoLicense: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
    textDecorationLine: "underline",
  },
});

export default Settings;
