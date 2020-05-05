import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  StyleSheet,
  Alert,
} from "react-native";
import "react-native-gesture-handler";
import { CustomerHeader } from "../window/CustomerHeader";
// import App from "../../App";
// import { Service } from "../window/service";
import { connect } from "react-redux";

// this.setState({ auth: false }).bind(App);
function test() {
  // this.setState({ auth: false });
  console.log(this);
}
export function Settings({ navigation, auth }) {
  // console.log(props);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0d44a6", // полностью заполняем старый
      }}
    >
      <CustomerHeader title="Настройки" isHome={true} navigation={navigation} />
      <View style={styles.container}>
        <View
          style={{
            borderRadius: "1000%",
            top: "-110%",
            left: "-25%",
            ...styles.bigCircle,
          }}
        >
          <View
            style={{
              borderRadius: "1000%",
              top: "0%",
              left: "8%",
              ...styles.smallCircle,
            }}
          ></View>
        </View>
        <View
          style={{
            ...styles.card,
          }}
        >
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={styles.text}>PUSH уведомления</Text>
            <Switch style={styles.switch} />
          </View>
          <View>
            <Text
              style={styles.text}
              onPress={() => {
                // console.log(auth);
              }}
            >
              Сменить пароль
            </Text>
            {/* <Text style={{ color: "white" }}>{auth}</Text> */}
            <TextInput style={styles.inp}></TextInput>
            <Text style={styles.text}>Повторите пароль</Text>
            <TextInput
              style={{
                ...styles.inp,
                marginBottom: 35,
              }}
            ></TextInput>
            <TouchableOpacity style={styles.passChangeBtn}>
              <Text style={{ color: "white", textAlign: "center" }}>
                Подтвертидить смену пароля
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.exit}>
          <Text style={styles.text}>Выйти из аккаунта</Text>
          {/* <Text></Text> */}
          {/* <Service onPress={test.bind(Service)} /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    auther: !state.auther,
  };
}
const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#303030",
    position: "relative",
  },
  bigCircle: {
    width: 700,
    height: 700,
    position: "relative",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28292b", // новый цвет
    backgroundColor: "green", // новый цвет
    zIndex: 1,
  },
  smallCircle: {
    width: 500,
    height: 500,
    position: "absolute",
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
    backgroundColor: "#525455",
  },
  card: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    width: "90%",
    height: 300,
    position: "absolute",
    top: "0%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 500,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  switch: {
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
  },
  inp: {
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 5,
  },
  passChangeBtn: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "70%",
    alignSelf: "center",
  },
  exit: {
    position: "absolute",
    bottom: 28,
    borderBottomColor: "#0860ce",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    marginBottom: 15,
  },
});
