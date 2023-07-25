import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Header from "./header";

const Page = ({ currentTab, children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          paddingTop: insets.top,
        }}>
        <Header currentTab={currentTab} />
        <View
          style={[
            styles.content,
            {
              marginBottom: insets.top + 24,
            },
          ]}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 40,
  },
});

export default Page;
