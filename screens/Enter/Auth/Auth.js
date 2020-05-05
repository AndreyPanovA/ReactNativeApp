import * as React from "react";
const { width, height } = Dimensions.get("window");
import { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
  // Animated // для авторизации и анимации
} from "react-native";

export function Autentific({ z, size, enterFunc, prevState, getToken }) {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: z,
        bottom: 170,
        width: width,
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          prevState.ref.current.animateNextTransition();
          if (size == 0) {
            prevState.setState({
              size: size + height / 2,
              rad: "70%",
              display: 0,
            });
            setTimeout(() => {
              prevState.setState({ z: 1 });
            }, 300);
          } else {
            prevState.setState({
              size: 0,
              rad: 0,
              display: 1,
              z: -1,
              openAuth: false,
            });
          }
        }}
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 100,
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <Image
          source={require("../../../src/images/clear.png")}
          style={{
            width: 20,
            height: 20,
            zIndex: 10,
          }}
        />
      </TouchableOpacity>
      <TextInput
        // Собитие от react
        onChange={(itemValue, itemIndex) => {
          prevState.setState({
            TextInputValueE: itemValue.nativeEvent.text,
          });
        }}
        placeholder="Email или Телефон"
        style={{
          borderRadius: 40,
          marginTop: 10,
          color: "black",
          height: 50,
          width: "90%",
          paddingHorizontal: 20,
          backgroundColor: "white",
          ...styles.shad,
          borderColor: "black",
          borderWidth: 1,
          fontSize: 20,
        }}
      />
      <TextInput
        onChange={(itemValue, itemIndex) => {
          prevState.setState({
            TextInputValueP: itemValue.nativeEvent.text,
          });
        }}
        placeholder="Пароль"
        style={{
          borderRadius: 40,
          marginTop: 10,
          color: "black",
          height: 50,
          width: "90%",
          paddingHorizontal: 20,
          backgroundColor: "white",
          fontSize: 20,
          ...styles.shad,
        }}
      />
      <TouchableOpacity
        onPress={getToken}
        // onPress={enterFunc}
        style={{
          ...styles.btnAuth,
          borderColor: "green",
          borderWidth: 1,
          width: "90%",
          ...styles.shad,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
}

let styles = StyleSheet.create({
  label: {},
  btnAuth: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  shad: {
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#000",
  },
  color: {
    borderWidth: 1,
    borderColor: "red",
  },
  blackBack: {
    backgroundColor: "#28292b",
    backgroundColor: "#303030",
  },
});
