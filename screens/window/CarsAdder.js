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
import { Select } from "../window/Select/Select";
export function CarsAdder({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#28292b", // полностью заполняем
      }}
    >
      <CustomerHeader
        title="Ваши Автомобили"
        isHome={true}
        navigation={navigation}
      />
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.go}
          onPress={() => navigation.navigate("CarsAdderDitail")}
        >
          <Text style={styles.addCar}>Добавить Автомобиль</Text>

          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <Select />
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
