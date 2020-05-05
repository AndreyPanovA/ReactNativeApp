import * as React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import "react-native-gesture-handler";

export function CustomerHeader({ title, isHome, navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      ></View>
      <View
        style={{
          flex: 1.5,
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
      {isHome ? (
        <View style={styles.miniCont}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.img}
              source={require("../../src/images/menu.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.img}
            source={require("../../src/images/back.png")}
            resizeMode="contain"
          />
          <Text style={{ marginLeft: 10, color: "white" }}>Назад</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  container: {
    height: 50,
    flexDirection: "row",
    paddingBottom: 10,
    zIndex: 50,
    position: "relative",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    justifyContent: "center",
  },
  miniCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
