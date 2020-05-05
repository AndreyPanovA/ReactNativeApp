import * as React from "react";
import { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
  TextInput,
  StyleSheet,
} from "react-native";
import "react-native-gesture-handler";

import { CustomerHeader } from "../CustomerHeader";

export function SettingsDitail({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0d44a6", // полностью заполняем
        // paddingTop: 20
      }}
    >
      <CustomerHeader title="Настройки - детали" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text style={{ marginTop: 10 }}>Настройки Дополнительно</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
