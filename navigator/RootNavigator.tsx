import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  Main: undefined;
  Mymodal: { userID: string; name: string };
  order: { order: any };
};

const RootStack = createNativeStackNavigator();
// 하단 네비게이터 그룹 구현
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Test" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
