import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import "react-native-gesture-handler";

import { CustomerHeader } from "../window/CustomerHeader";
import bg from "./../../constants/Colors";
// import { Select } from "../window/Select/Select";
export function Stoks({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: bg.dark, // полностью заполняем
      }}
    >
      <CustomerHeader title="Акции" isHome={true} navigation={navigation} />
      <View
        style={{
          flex: 1,
          backgroundColor: bg.eyeBlue,
        }}
      >
        <View>
          <Text>Акции</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "20%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#dbe8fa", // цвет полосы
    position: "relative",
  },
  go: {
    position: "relative",
    top: "-10%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#323232",
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: "white",
  },
  addCar: {
    marginTop: 10,
    fontStyle: "italic",
    fontWeight: "600",
    color: "white",
  },
  text: { fontSize: 25, textAlign: "center", color: "white" },
});
