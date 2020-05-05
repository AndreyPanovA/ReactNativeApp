import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
  StyleSheet,
} from "react-native";
import "react-native-gesture-handler";

import { CustomerHeader } from "../CustomerHeader";

export function MyDataDitail({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0d44a6", // полностью заполняем
        // paddingTop: 20
      }}
    >
      <CustomerHeader title="Главная - детали" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ marginTop: 10, color: "white" }}>
          Мои данные - детали
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
