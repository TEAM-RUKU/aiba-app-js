import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { SvgIcon } from "@app/components";
import { globalColors } from "@app/res/styles";

const Header = ({ currentTab }) => {
  const pageConfig = {
    Listen: {
      name: "듣기",
      description: "하드웨어를 통해 주변 소리를 들어요.",
    },
    Speak: {
      name: "말하기",
      description: "효과적으로 발음을 교정해요.",
    },
    Community: {
      name: "커뮤니티",
      description: "청각장애인을 위한 정보를 공유해요.",
    },
    Automation: {
      name: "자동화",
      description: "더욱 손쉽게 소통할 수 있는 기능을 제공해요.",
    },
    Settings: {
      name: "설정",
      description: "장치를 추가하거나 각종 설정을 변경해요.",
    },
  };

  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <SvgIcon name={`Header${currentTab}Svg`} fill={globalColors.grade9} />
        <Text style={styles.title}>{pageConfig[currentTab].name}</Text>
      </View>
      <Text style={styles.description}>
        {pageConfig[currentTab].description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 28,
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontFamily: "Pretendard-SemiBold",
    color: globalColors.grade9,
  },
  description: {
    fontSize: 16,
    fontFamily: "Pretendard-Medium",
    color: globalColors.grade7,
  },
});

export default Header;
