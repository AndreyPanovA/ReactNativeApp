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
  Alert,
  StyleSheet,
} from "react-native";

import { Inp } from "../../../components/Inp";

export function Registration({ prevState }) {
  return (
    <View style={{ ...styles.topContainer, zIndex: prevState.state.z }}>
      <View></View>
      <View>
        <TouchableOpacity
          onPress={() => {
            prevState.ref.current.animateNextTransition();
            if (prevState.state.size == 0) {
              prevState.setState({
                size: prevState.state.size + height / 3,
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
          style={styles.secondCont}
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
      </View>
      <View
        style={{
          height: height,
          width: width,
          alignItems: "center",
        }}
      >
        {prevState.state.selectedTab == 0 ? (
          <View
            style={{
              height: height,
              width: width,
              alignItems: "center",
            }}
          >
            <Text>{prevState.state.alertMsg}</Text>
            {/* <Inp
              // val={prevState.state.registrationData.registFio}
              color="white"
              name="ФИО"
              styler={{ ...styles.fio, ...styles.shad }}
              leng={10}
              prev={prevState}
            /> */}
            <Inp
              // val={prevState.state.registrationData.mail}
              color="white"
              name="Email"
              styler={{ ...styles.fio, ...styles.shad }}
              leng={10}
              prev={prevState}
            />
            <Inp
              // val={prevState.state.registrationData.registPhone}
              color="white"
              name="Телефон"
              styler={{ ...styles.fio, ...styles.shad }}
              leng={10}
              prev={prevState}
            />

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginTop: 20,
                  borderRadius: 15,
                  borderColor: "black",
                  borderWidth: 1,
                }}
                onPress={() => {
                  if (
                    prevState.state.registrationData.registPhone.trim().length <
                      1 ||
                    prevState.state.registrationData.mail.trim().length < 1
                  ) {
                    prevState.setState({
                      alertMsg: "У вас есть не заполненые поля",
                    });
                  } else {
                    prevState.setState({
                      selectedTab: prevState.state.selectedTab + 1,
                      alertMsg: "",
                    });
                    console.log(prevState.state.registrationData, "date");
                    // prevState.vinCheck();
                  }
                }}
              >
                <Text>Продолжить</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 20,
                borderRadius: 15,
                borderColor: "black",
                borderWidth: 1,
              }}
              onPress={() => {
                console.log(prevState.state.registrationData, "date");
                // prevState.vinCheck();
              }}
            >
              <Text>state</Text>
            </TouchableOpacity>
          </View>
        ) : prevState.state.selectedTab == 1 ? (
          <View
            style={{
              height: height,
              width: width,
              alignItems: "center",
            }}
          >
            <Text>{prevState.state.alertMsg}</Text>
            <TextInput
              autoCapitalize="none"
              value={prevState.state.registrationData.registVin}
              onChange={(itemValue, itemIndex) => {
                console.log(
                  itemValue.nativeEvent.eventCount,
                  "test",
                  prevState.state.VinCounter,
                  prevState.state.vinAlert
                );
                if (itemValue.nativeEvent.text.length < 8) {
                  prevState.setState({ colorVin: "red" });
                } else if (itemValue.nativeEvent.text.length > 8) {
                  prevState.setState({ colorVin: "blue" });
                }
                if (
                  itemValue.nativeEvent.text &&
                  itemValue.nativeEvent.text[
                    itemValue.nativeEvent.text.length - 1
                  ].match(new RegExp(/[^wertyuplkjhgfdsazxcvbnm0-9]/i))
                ) {
                  return false;
                } else if (
                  itemValue.nativeEvent.text[
                    itemValue.nativeEvent.text.length == 0
                  ]
                ) {
                  return false;
                } else {
                  prevState.setState({
                    registrationData: {
                      registFio: prevState.state.registrationData.registFio,
                      registPhone: prevState.state.registrationData.registPhone,
                      mail: prevState.state.registrationData.mail,
                      registPassword:
                        prevState.state.registrationData.registPassword,
                      registVin: itemValue.nativeEvent.text,
                      registGosNum:
                        prevState.state.registrationData.registGosNum,
                      registCarMark:
                        prevState.state.registrationData.registCarMark,
                    },
                    VinCounter: itemValue.nativeEvent.eventCount,
                  });
                  if (
                    prevState.state.VinCounter ==
                    itemValue.nativeEvent.eventCount - 1
                  ) {
                  }
                }
              }}
              placeholder="VIN"
              style={{
                ...styles.vin,
                borderColor: prevState.state.colorVin,
                ...styles.shad,
              }}
            />
            <Inp
              val={prevState.state.registrationData.registGosNum}
              color="white"
              name="Госномер"
              styler={{ ...styles.fio, ...styles.shad }}
              leng={10}
              prev={prevState}
            />
            {prevState.state.vinAlert.trim().length > 0 ? (
              <View>
                <Text style={{ marginTop: 10 }}>
                  {prevState.state.vinAlert}
                </Text>
                <TextInput
                  onChange={(itemValue, itemIndex) => {
                    prevState.setState({
                      registrationData: {
                        registFio: prevState.state.registrationData.registFio,
                        registPhone:
                          prevState.state.registrationData.registPhone,
                        mail: prevState.state.registrationData.mail,
                        registPassword:
                          prevState.state.registrationData.registPassword,
                        registVin: prevState.state.registrationData.registVin,
                        registGosNum:
                          prevState.state.registrationData.registGosNum,
                        registCarMark: itemValue.nativeEvent.text,
                      },
                    });
                  }}
                  placeholder="Введите марку машины"
                  style={{ ...styles.mark, ...styles.shad }}
                />
              </View>
            ) : (
              <Text>cool</Text>
            )}

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginTop: 20,
                  borderRadius: 15,
                  borderColor: "black",
                  borderWidth: 1,
                  marginRight: 20,
                }}
                onPress={() => {
                  prevState.setState({
                    alertMsg: "",
                  });
                  prevState.setState({
                    selectedTab: prevState.state.selectedTab - 1,
                  });
                  // prevState.vinCheck();
                }}
              >
                <Text>Назад</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginTop: 20,
                  borderRadius: 15,
                  borderColor: "black",
                  borderWidth: 1,
                }}
                onPress={() => {
                  if (
                    prevState.state.registrationData.registGosNum.trim()
                      .length < 1 ||
                    prevState.state.registrationData.registVin.trim().length < 1
                  ) {
                    prevState.setState({
                      alertMsg: "У вас есть не заполненые поля",
                    });
                  } else {
                    prevState.setState({
                      selectedTab: prevState.state.selectedTab + 1,
                      alertMsg: "",
                    });
                    console.log(prevState.state.registrationData, "date");
                    // prevState.vinCheck();
                  }
                }}
              >
                <Text>Продолжить</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginTop: 20,
                  borderRadius: 15,
                  borderColor: "black",
                  borderWidth: 1,
                }}
                onPress={() => {
                  console.log(prevState.state.registrationData, "date");
                  // prevState.vinCheck();
                }}
              >
                <Text>state</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                // prevState.getRegist();
                if (
                  // prevState.state.registrationData.registFio.trim().length <
                  //   1 ||
                  prevState.state.registrationData.registPhone.trim().length <
                    1 ||
                  prevState.state.registrationData.mail.trim().length < 1 ||
                  prevState.state.registrationData.registVin.trim().length <
                    1 ||
                  prevState.state.registrationData.registGosNum.trim().length <
                    1
                ) {
                  Alert.alert("У вас есть не заполненые поля");
                } else {
                  prevState.vinCheck();
                  // console.log(prevState.state.vinAlert, "state");
                }
              }}
              style={{
                marginTop: 130,
                ...styles.btnAuth,
                width: "90%",
                ...styles.shad,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              height: height,
              width: width,
              alignItems: "center",
            }}
          >
            {/* <TextInput
              onChange={(itemValue, itemIndex) => {
                prevState.setState({
                  registrationData: {
                    registFio: prevState.state.registrationData.registFio,
                    registPhone: prevState.state.registrationData.registPhone,
                    mail: prevState.state.registrationData.mail,
                    registPassword:
                      prevState.state.registrationData.registPassword,
                    registVin: prevState.state.registrationData.registVin,
                    registGosNum: prevState.state.registrationData.registGosNum,
                    registCarMark: itemValue.nativeEvent.text,
                  },
                });
              }}
              placeholder="Введите марку машины"
              style={{ ...styles.mark, ...styles.shad }}
            /> */}
            <TouchableOpacity
              onPress={() => {
                // prevState.getRegist();
                if (
                  // prevState.state.registrationData.registFio.trim().length <
                  //   1 ||
                  prevState.state.registrationData.registPhone.trim().length <
                    1 ||
                  // prevState.state.registrationData.registPassword.trim()
                  //   .length < 1 ||
                  prevState.state.registrationData.mail.trim().length < 1 ||
                  prevState.state.registrationData.registVin.trim().length <
                    1 ||
                  prevState.state.registrationData.registGosNum.trim().length <
                    1
                ) {
                  Alert.alert("У вас есть не заполненые поля");
                } else {
                  prevState.vinCheck();
                }
              }}
              style={{
                marginTop: 130,
                ...styles.btnAuth,
                width: "90%",
                ...styles.shad,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Зарегистрироваться
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginTop: 20,
                  borderRadius: 15,
                  borderColor: "black",
                  borderWidth: 1,
                  marginRight: 20,
                }}
                onPress={() => {
                  prevState.setState({
                    alertMsg: "",
                  });
                  prevState.setState({
                    selectedTab: prevState.state.selectedTab - 1,
                  });
                  // prevState.vinCheck();
                }}
              >
                <Text>Назад</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  marginTop: 20,
                  borderRadius: 15,
                  borderColor: "black",
                  borderWidth: 1,
                }}
                onPress={() => {
                  if (
                    prevState.state.registrationData.registFio.trim().length <
                      1 ||
                    prevState.state.registrationData.registPhone.trim().length <
                      1 ||
                    prevState.state.registrationData.mail.trim().length < 1
                  ) {
                    prevState.setState({
                      alertMsg: "У вас есть не заполненые поля",
                    });
                  } else {
                    prevState.setState({
                      selectedTab: prevState.state.selectedTab + 1,
                    });
                    console.log(prevState.state.registrationData, "date");
                    // prevState.vinCheck();
                  }
                }}
              >
                <Text>Продолжить</Text>
              </TouchableOpacity> */}
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 20,
                borderRadius: 15,
                borderColor: "black",
                borderWidth: 1,
              }}
              onPress={() => {
                console.log(prevState.state.registrationData, "date");
                // prevState.vinCheck();
              }}
            >
              <Text>state</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
  topContainer: {
    width: width,
    height: height,
    position: "absolute",
    top: 40,
    width: width,
    alignItems: "center",
  },
  secondCont: {
    width: 40,
    height: 40,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  fio: {
    borderRadius: 40,
    marginTop: 10,
    color: "black",
    height: 50,
    width: "90%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    fontSize: 20,
    // ...this.shad,
  },
  email: {
    borderRadius: 40,
    marginTop: 10,
    color: "black",
    height: 50,
    flexBasis: "50%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    // ...styles.shad,
    // ...this.shad,
    // borderColor: prevState.state.color,
    borderWidth: 1,
    fontSize: 20,
  },
  phone: {
    borderRadius: 40,
    marginTop: 10,
    color: "black",
    height: 50,
    marginLeft: 10,
    flexBasis: "40%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    // borderColor: prevState.state.colorPhone,
    borderWidth: 1,
    fontSize: 20,
    // ...styles.shad,
    // ...this.shad,
  },
  password: {
    borderRadius: 40,
    marginTop: 10,
    color: "black",
    height: 50,
    width: "90%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    // borderColor: prevState.state.colorPass,
    borderWidth: 1,
    fontSize: 20,
    // ...styles.shad,
    // ...this.shad,
  },
  vin: {
    borderRadius: 40,
    marginTop: 10,
    color: "black",
    height: 50,
    width: "90%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    // ...styles.shad,
    // ...this.shad,
    // borderColor: prevState.state.colorVin,
    borderWidth: 1,
    fontSize: 20,
  },
  gosNum: {
    borderRadius: 40,
    marginTop: 10,
    color: "black",
    height: 50,
    width: "90%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    // ...styles.shad,
    // ...this.shad,
    fontSize: 20,
  },
  mark: {
    borderRadius: 40,
    marginTop: 10,
    color: "black",
    height: 50,
    width: "90%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    // ...styles.shad,
    // ...this.shad,
    fontSize: 20,
  },
});
