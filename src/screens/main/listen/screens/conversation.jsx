import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import moment from "moment";

import { Screen } from "@app/components";
import { globalColors } from "@app/res/styles";

const ConversationScreen = () => {
  return (
    <Screen screenName="기록된 대화">
      <ScrollView>
        <View style={styles.content}>
          <Mix date="2023-06-09" count={2}>
            <Record text="안녕하세요" />
            <Record text="혹시 최애의 아이 보셨나요" />
            <Record />
            <Record text="최애의 아이 봤습니다" me />
            <Record text="정말 재밌는 영화네요" me />
          </Mix>
          <Mix date="2023-06-08" count={2}>
            <Record text="안녕하세요" />
            <Record text="혹시 최애의 아이 보셨나요" />
            <Record />
            <Record text="최애의 아이 봤습니다" me />
            <Record text="정말 재밌는 영화네요" me />
          </Mix>
        </View>
      </ScrollView>
    </Screen>
  );
};

const Mix = ({ date, count, children }) => {
  return (
    <View style={styles.mix}>
      <View style={styles.mixTop}>
        <Text style={styles.mixDate}>
          {moment(date).format("M월 D일")}{" "}
          {["일", "월", "화", "수", "목", "금", "토"][moment(date).format("d")]}
          요일
        </Text>
        <Text style={styles.mixCount}>총 {count}건의 대화</Text>
      </View>
      <View style={styles.mixRecord}>{children}</View>
    </View>
  );
};

const Record = ({ text, me }) => {
  return text ? (
    <View style={[styles.record, me && styles.recordMe]}>
      <Text style={[styles.recordText, me && styles.recordMeText]}>{text}</Text>
    </View>
  ) : (
    <View style={styles.recordGap} />
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 80,
    paddingVertical: 20,
  },
  mix: {
    paddingHorizontal: 20,
    gap: 16,
  },
  mixTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  mixDate: {
    fontSize: 14,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade5,
  },
  mixCount: {
    fontSize: 14,
    fontFamily: "Pretendard-SemiBold",
    color: globalColors.grade6,
  },
  mixRecord: {
    gap: 12,
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
  recordMe: {
    alignSelf: "flex-end",
    backgroundColor: globalColors.grade8,
    borderColor: globalColors.grade8,
  },
  recordMeText: {
    color: globalColors.grade1,
  },
  recordGap: {
    marginTop: -8,
  },
});

export default ConversationScreen;
