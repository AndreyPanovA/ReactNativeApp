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
export function CarsAdderDitail({ navigation }) {
  const [label, setLabel] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0d44a6", // полностью заполняем
      }}
    >
      <CustomerHeader
        title="Ваши Автомобили - детали"
        navigation={navigation}
      />
      <View style={{ backgroundColor: "#e0e9fa" }}>
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ marginTop: 10, color: "black" }}>
            Марка Автомобиля
          </Text>
          <TextInput
            keyboardAppearance="dark"
            style={{
              borderRadius: 10,
              marginTop: 10,
              color: "black",
              height: 40,
              width: "90%",
              paddingHorizontal: 20,
              backgroundColor: "white",
            }}
          />
        </View>
        <View
          style={{
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            marginBottom: 30,
          }}
        >
          <Text
            onPress={() => {
              setLabel(-25);
            }}
            style={{
              marginTop: 10,
              color: "black",
              position: "absolute",
              top: 5,
              left: 35,
              zIndex: 1,
              width: "100%",
              height: 40,
              transform: [
                {
                  translateY: label,
                },
              ],
            }}
          >
            Номер автомобиля
          </Text>
          <TextInput
            keyboardType="number-pad"
            keyboardAppearance="dark"
            style={{
              borderRadius: 10,
              marginTop: 10,
              color: "#1f63d8",
              height: 40,
              width: "90%",
              paddingHorizontal: 20,
              backgroundColor: "white",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
