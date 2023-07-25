import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SvgIcon } from "@app/components";
import { globalStyles, globalColors } from "@app/res/styles";
import { log } from "@app/utils/logging";

import Automation from "./automation";
import Community from "./community";
import Listen from "./listen";
import Settings from "./settings";
import Speak from "./speak";

const Stack = createBottomTabNavigator();
const IndexNavigator = () => {
  const insets = useSafeAreaInsets();

  const [currentTab, setCurrentTab] = React.useState("Listen");

  const pageConfig = {
    Listen: {
      name: "듣기",
      description: "하드웨어를 통해 주변 소리를 들어요.",
      component: Listen,
    },
    Speak: {
      name: "말하기",
      description: "효과적으로 발음을 교정해요.",
      component: Speak,
    },
    Community: {
      name: "커뮤니티",
      description: "청각장애인을 위한 정보를 공유해요.",
      component: Community,
    },
    Automation: {
      name: "자동화",
      description: "더욱 손쉽게 소통할 수 있는 기능을 제공해요.",
      component: Automation,
    },
    Settings: {
      name: "설정",
      description: "장치를 추가하거나 각종 설정을 변경해요.",
      component: Settings,
    },
  };

  log("REND", "Root Stack > Main Stack > Index Stack");
  return (
    <View
      style={[
        globalStyles.container,
        {
          paddingTop: insets.top,
          backgroundColor: globalColors.grade1,
        },
      ]}>
      <Header pageConfig={pageConfig} currentTab={currentTab} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => (
          <Navbar
            {...props}
            setCurrentTab={setCurrentTab}
            pageConfig={pageConfig}
          />
        )}
        initialRouteName="Home"
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}>
        {Object.keys(pageConfig).map((key) => (
          <Stack.Screen
            key={key}
            name={key}
            component={pageConfig[key].component}
          />
        ))}
      </Stack.Navigator>
    </View>
  );
};

const Header = React.memo(({ pageConfig, currentTab }) => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.row}>
        <SvgIcon name={`Header${currentTab}Svg`} fill={globalColors.grade9} />
        <Text style={headerStyles.title}>{pageConfig[currentTab].name}</Text>
      </View>
      <Text style={headerStyles.description}>
        {pageConfig[currentTab].description}
      </Text>
    </View>
  );
});

const headerStyles = StyleSheet.create({
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

const Navbar = ({
  pageConfig,
  setCurrentTab,
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    setCurrentTab(Object.keys(pageConfig)[state.index]);
  }, [state.index]);

  log(
    "REND",
    `Root Stack > Main Stack > Index Stack > ${
      Object.keys(pageConfig)[state.index]
    }`,
  );
  return (
    <View
      style={[
        styles.navbar,
        {
          paddingBottom: insets.bottom || 16,
        },
      ]}>
      <View style={styles.corner} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const title = pageConfig[route.name].name;
        const isFocused = state.index === index;
        return (
          <Pressable
            key={index}
            style={styles.icon}
            testID={options.tabBarTestID}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({
                  name: route.name,
                  merge: true,
                });
                setCurrentTab(route.name);
              }
              ReactNativeHapticFeedback.trigger("soft");
            }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}>
            <SvgIcon
              name={`Navbar${route.name}${isFocused ? "Fill" : ""}Svg`}
              fill={isFocused ? globalColors.active : globalColors.grade5}
            />
            <Text
              style={
                ([styles.text],
                {
                  fontFamily: isFocused
                    ? "Pretendard-SemiBold"
                    : "Pretendard-Medium",
                  color: isFocused ? globalColors.active : globalColors.grade5,
                })
              }>
              {title}
            </Text>
          </Pressable>
        );
      })}
      <View style={styles.corner} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  navbar: {
    backgroundColor: globalColors.grade2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    padding: 10 + 1,
    margin: -1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: globalColors.grade3,
  },
  icon: {
    flex: 8,
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    color: globalColors.grade5,
  },
  corner: {
    flex: 1,
  },
});

export default IndexNavigator;
