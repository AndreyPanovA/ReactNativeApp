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

import { CustomerHeader } from "../window/CustomerHeader";

export function MyData({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#28292b", // полностью заполняем
      }}
    >
      <CustomerHeader
        title="Мои данные"
        isHome={true}
        navigation={navigation}
      />
      <View
        style={{
          width: "100%",
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>Панов Андрей Александрович</Text>
        <Image
          style={styles.img}
          source={require("../../src/images/userBlue.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container}>
        <View
          style={styles.colorCont}
          // onPress={() => navigation.navigate("MyDataDitails")}
        ></View>
        <TouchableOpacity
          onPress={() => {
            // Alert.alert("Набрать нам в сервис?");
            Linking.openURL(`tel:+79653150435`);
          }}
          style={styles.phoneBtn}
        >
          <View style={styles.strWhite}>
            <Image
              style={{
                width: "80%",
                height: "80%",
              }}
              source={require("../../src/images/call.png")}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: "90%",
            minHeight: "25%",
            backgroundColor: "white",
            borderRadius: 10,
            position: "relative",
            top: "-30%",
            zIndex: 1,
            paddingVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  marginBottom: 10,
                }}
              >
                <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                  <Text
                    style={{
                      color: "black",
                      marginBottom: 10,
                      fontSize: 12,
                    }}
                  >
                    Промокоды: #test
                  </Text>
                </View>
                <View
                  style={{
                    color: "black",
                    marginBottom: 10,
                    fontSize: 12,
                    backgroundColor: "#ddf6ec",
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                >
                  <Text>Бонусы: #test</Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    marginBottom: 10,
                    fontSize: 12,
                  }}
                >
                  Email: panov3107@mail.ru
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 20,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    marginBottom: 10,
                    fontSize: 12,
                  }}
                >
                  Телефон: 8-(965)-315-04-35
                </Text>
              </View>
              <ScrollView
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 20,
                  // maxHeight: 50
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    marginBottom: 10,
                    fontSize: 12,
                  }}
                >
                  Адрес: Улица Теплый Стан
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>

      {/* <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Text style={{ marginTop: 10, marginBottom: 10, color: "white" }}>
            Федор Бакулов Фндреевич
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("MyDataDitails")}>
            <Text style={{ color: "white" }}>Перейти к деталям</Text>
          </TouchableOpacity>
        </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    marginLeft: 30,
    maxWidth: "20%",
  },
  strWhite: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 10,
    textAlign: "center",
    borderRadius: 100,
  },
  phoneBtn: {
    position: "absolute",
    top: "-5%",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#28292b",
    borderWidth: 2,
    textAlign: "center",
    backgroundColor: "white",
  },
  title: {
    color: "white",
    marginBottom: 10,
    fontSize: 15,
    textAlign: "center",
  },
  container: {
    marginTop: "20%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#dbe8fa", // цвет полосы
    position: "relative",
  },
  colorCont: {
    height: "100%",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28292b",
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
