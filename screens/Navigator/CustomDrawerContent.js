import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import "react-native-gesture-handler";
import color from "../../constants/Colors";
export function CustomDrawerContent(props, auth) {
  const arrow = (
    <Image
      source={require("../../src/images/leftArrows.png")}
      style={styles.imgArrow}
    />
  );
  // console.log(props, "cust");
  return (
    <SafeAreaView style={{ ...styles.container, ...styles.shad }}>
      <View style={{ marginTop: 10 }}></View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backBtn}
        >
          <View style={{ ...styles.mainCont, paddingVertical: 10 }}>
            <Image
              style={styles.arrowBack}
              source={require("../../src/images/close.png")}
              resizeMode="contain"
            />
            <Text style={styles.closeText}>Закрыть</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("MyData")}
          style={styles.back}
        >
          <Text style={styles.closeText}>Мои данные</Text>
          {arrow}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("CarsAdder")}
          style={styles.back}
        >
          <Text style={styles.closeText}>Запись на сервис</Text>
          {arrow}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("History")}
          style={styles.back}
        >
          <Text style={styles.closeText}>История</Text>
          {arrow}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Stoks")}
          style={styles.back}
        >
          <Text style={styles.closeText}>Акции</Text>
          {arrow}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Settings")}
          style={styles.back}
        >
          <Text style={styles.closeText}>Настройки</Text>
          {arrow}
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.imgCont}>
        <Image
          source={require("../../src/images/larsonBlack.png")}
          style={styles.img}
        />
      </View>
    </SafeAreaView>
  );
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.eyeBlue,
  },
  backBtn: {
    minHeight: 30,
    marginBottom: 30,
    alignItems: "center",
  },
  mainCont: {
    borderColor: "#327eff",
    borderBottomWidth: 1.5,
    flexDirection: "row",
    width: "90%",
  },
  arrowBack: { width: 20, height: 20, marginLeft: 30 },
  closeText: {
    fontSize: 18,
    color: "black",
    marginLeft: 10,
    // marginBottom: 10,
    fontWeight: "400",
  },
  imgCont: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: color.eyeBlue,
    marginBottom: 10,
  },
  img: {
    marginTop: 10,
    height: "100%",
    width: "90%",
  },
  back: {
    paddingVertical: 8,
    minHeight: 30,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgArrow: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  shad: {
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#000",
  },
});
