import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/CustomersScreen";
import OrdersScreen from "../screens/OrdersScreen";
import My_place from "../screens/My_place";
import My_place_1 from "../screens/My_place_1";
import { useNavigation } from "@react-navigation/native";

export type TabStackParamList = {
  cutomers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator();

const TapNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="My_place" component={My_place} />
      <Tab.Screen name="My_place_1" component={My_place_1} />
    </Tab.Navigator>
  );
};

export default TapNavigator;
