import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { globalColors } from "@app/res/styles";
import { log } from "@app/utils/logging";

import Root from "./screens";

const App = () => {
  const onLayout = () => {
    log("REND", "onLayout");
  };

  log("REND", "app");
  return (
    <NavigationContainer
      linking={{
        prefixes: ["https://dimigo.in", "in.dimigo.app://"],
        config: {
          screens: {
            Auth: {
              path: "auth",
            },
          },
        },
      }}
      theme={{
        dark: false,
        colors: {
          primary: globalColors.active,
          background: globalColors.grade1,
          card: globalColors.grade1,
          border: globalColors.grade1,
        },
      }}
      onReady={onLayout}>
      <Root />
    </NavigationContainer>
  );
};

export default App;
