import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { SvgIcon, Page, Section } from "@app/components";
import { globalColors } from "@app/res/styles";

const Automation = () => {
  return (
    <Page currentTab="Automation">
      <Section title="등록된 자동화" action="자동화 추가하기" actionType="add">
        <Item type="record">
          <Flowchart type="on" text="거실 듣기 장치에서" />
          <Flowchart type="if" text="호시노 아이의 목소리가 들리면" />
          <Flowchart type="do" text="자동으로 대화 기록하기" />
        </Item>
        <Item type="alert">
          <Flowchart type="on" text="안방 듣기 장치에서" />
          <Flowchart type="if" text="유리 잔 깨지는 소리가 나면 " />
          <Flowchart type="do" text="알림 보내주기" />
        </Item>
      </Section>
    </Page>
  );
};

const Item = ({ type, children }) => {
  const item = {
    record: {
      icon: "AutomationRecordSvg",
    },
    alert: {
      icon: "AutomationAlertSvg",
    },
  }[type];

  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <View style={styles.itemFlow}>
          <SvgIcon name="AutomationListenSvg" fill={globalColors.grade5} />
          <SvgIcon name="AutomationArrowSvg" fill={globalColors.grade5} />
          <SvgIcon name={item.icon} fill={globalColors.grade5} />
        </View>
        <TouchableOpacity style={styles.itemDelete}>
          <SvgIcon name="AutomationDeleteSvg" fill={globalColors.grade5} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemFlowcharts}>{children}</View>
    </View>
  );
};

const Flowchart = ({ type, text }) => {
  const flowchart = {
    on: {
      icon: "AutomationFlowchartOnSvg",
      color: globalColors.grade7,
      fontFamily: "Pretendard-Medium",
    },
    if: {
      icon: "AutomationFlowchartIfSvg",
      color: globalColors.grade8,
      fontFamily: "Pretendard-Medium",
    },
    do: {
      icon: "AutomationFlowchartDoSvg",
      color: globalColors.active,
      fontFamily: "Pretendard-SemiBold",
    },
  }[type];

  return (
    <View style={styles.itemFlowchart}>
      <SvgIcon name={flowchart.icon} fill={flowchart.color} />
      <Text
        style={[
          styles.itemFlowchartText,
          { fontFamily: flowchart.fontFamily, color: flowchart.color },
        ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: globalColors.grade2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: globalColors.grade3,
    gap: 12,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemFlow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  itemFlowcharts: {
    gap: 6,
  },
  itemFlowchart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  itemFlowchartText: {
    fontSize: 16,
  },
  itemDelete: {
    padding: 10,
    margin: -10,
  },
});

export default Automation;
