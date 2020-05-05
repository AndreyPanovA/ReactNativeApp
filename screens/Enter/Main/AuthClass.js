import * as React from "react";
const { width, height } = Dimensions.get("window");
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet,
} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";

import Config from "../../../constants/Config";

// Компоненты jhjjjj
import { Autentific } from "../Auth/Auth";
import { Registration } from "../Registration/Registration";

import Page from "../../../screens/Page";

export class Auth extends React.Component {
  state = {
    tok: "",
    size: 0,
    rad: 0,
    display: 1,
    z: -1,
    openAuth: false,
    signUp: true,
    TextInputValueE: "",
    TextInputValueP: "",
    registrationData: {
      registFio: "",
      registPhone: "",
      mail: "",
      registPassword: "",
      registVin: "",
      registGosNum: "",
      registCarMark: "",
    },
    color: "transparent",
    colorVin: "transparent",
    colorPass: "transparent",
    colorPhone: "transparent",
    VinCounter: 0,
    //
    selectedTab: 0,
    alertMsg: "",
    pageName: "",
    vinAlert: "",
  };
  getToken = () => {
    let token = {};
    const data = {
      c: "User",
      m: "Auth",
      login: "frankbakulov@gmail.com",
      password: "fb",
    };
    const finData = {
      c: "User",
      m: "Auth",
      login: this.state.TextInputValueE,
      password: this.state.TextInputValueP,
    };
    return fetch(Config.connection.url, {
      method: "POST",
      body: JSON.stringify(finData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((jsonm) => {
        token = jsonm;
        if (token.token) {
          this.enterFunc();
        }
      });
  };
  getRegist = () => {
    let token = {};
    const data = {
      c: "User",
      m: "Auth",
      login: "frankbakulov@gmail.com",
      password: "fb",
    };
    const finData = {
      c: "Client",
      m: "Register",
      email: this.state.registrationData.mail,
      phone: this.state.registrationData.registPhone,
      fio: this.state.registrationData.registFio,
      password: this.state.registrationData.registPassword,
      promo: "12345678",
      custom: this.state.registrationData.registCarMark,
      // is_custom: this.ClientCar.is_custom,
      vin: "YV1FS485BC2105777",
      number: this.state.registrationData.registGosNum,
    };
    return fetch(Config.connection.url, {
      method: "POST",
      body: JSON.stringify(finData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((jsonm) => {
        token = jsonm;
      });
  };
  //
  vinCheck = () => {
    const finData = {
      c: "Car",
      m: "VinCheck",
      vin: this.state.registrationData.registVin,
      // vin: "YV1FS485BC2105777",
      is_app: "1.5.0",
    };
    return fetch(Config.connection.url, {
      method: "POST",
      body: JSON.stringify(finData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.vin_ok, "coool");
        if (json.vin_ok == 1) {
          this.getRegist();
        } else if (json.vin_ok == 0) {
          this.setState({
            vinAlert: "Ошибочный VIN, тогда введите марку машины",
          });
          console.log(this.state.vinAlert);
        }
      });
  };

  constructor(props) {
    super(props);
    this.enterFunc = props.onAuth; // переходим на приложение
    this.finalEnter = props.setSignUp; // финальный вход
    this.ref = React.createRef();
    this.getToken = this.props.getToken;
  }
  transition = (
    <Transition.Together>
      <Transition.Out
        type={"fade"}
        durationMs={300}
        interpolation="easeInOut"
      />
      <Transition.Change durationMs={300} />
    </Transition.Together>
  );
  openMenu() {
    this.setState({ size: 2 });
  }
  componentDidMount() {
    this.ref.current.animateNextTransition();
  }
  render() {
    if (this.state.pageName) {
      return <Page name={this.state.pageName} prevState={this} />;
    }

    return (
      <View style={styles.mainBlock}>
        <Transitioning.View
          style={styles.transContainer}
          ref={this.ref}
          transition={this.transition}
        >
          <View
            style={{
              flex: 1,
              bottom: this.state.size,
              borderBottomLeftRadius: this.state.rad,
              borderBottomRightRadius: this.state.rad,
              overflow: "hidden",
              textAlign: "center",
              justifyContent: "flex-end",
            }}
          >
            <View style={styles.imgCont}>
              <Image
                source={require("../../../src/images/larsonWhite.png")}
                style={styles.logoWhite}
              />
            </View>
            <View style={styles.bg}>
              <Image
                source={require("../../../src/images/bg.jpg")}
                style={{ flex: 1, height: null, width: null }}
              />
            </View>
            {this.state.openAuth ? (
              <Text></Text>
            ) : (
              <Transitioning.View
                style={{
                  opacity: this.state.display,
                }}
              >
                <TouchableOpacity
                  style={{ ...styles.btnAuth }}
                  onPress={() => {
                    this.ref.current.animateNextTransition();
                    if (this.state.size == 0) {
                      this.setState({
                        size: this.state.size + height / 1.7, // тут первое
                        rad: "70%",
                        display: 0,
                        openAuth: true,
                        signUp: true,
                      });
                      setTimeout(() => {
                        this.setState({ z: 1 });
                      }, 300);
                    } else {
                      this.setState({
                        size: 0,
                        rad: 0,
                        display: 1,
                        z: -1,
                        openAuth: false,
                      });
                    }
                  }}
                >
                  <Text style={styles.enterBtn}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.ref.current.animateNextTransition();
                    if (this.state.size == 0) {
                      this.setState({
                        size: this.state.size + height / 1.1,
                        rad: "70%",
                        display: 0,
                        openAuth: true,
                        signUp: false,
                      });
                      setTimeout(() => {
                        this.setState({ z: 1 });
                      }, 300);
                    } else {
                      this.setState({
                        size: 0,
                        rad: 0,
                        display: 1,
                        z: -1,
                        openAuth: false,
                      });
                    }
                  }}
                  style={{ ...styles.btnAuth, backgroundColor: "#2E71DC" }}
                >
                  {/* onPress={this.getToken} */}
                  <Text style={styles.registBlock}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ pageName: "manifest" });
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        marginBottom: 10,
                        fontSize: 22,
                      }}
                    >
                      Обращение
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ pageName: "terms" });
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        marginBottom: 10,
                        fontSize: 22,
                      }}
                    >
                      О программе
                    </Text>
                  </TouchableOpacity>
                </View>
              </Transitioning.View>
            )}
          </View>
          {this.state.signUp ? (
            <Autentific
              z={this.state.z}
              size={this.state.size}
              enterFunc={this.enterFunc}
              prevState={this}
              getToken={this.getToken}
            />
          ) : (
            <Registration prevState={this} />
          )}
        </Transitioning.View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  transContainer: {
    flex: 1,
    justifyContent: "center",
    width: width,
    height: height,
  },
  imgCont: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    zIndex: 100,
  },
  bg: {
    position: "absolute",
    top: 0,
    width: width,
    height: height,
  },
  logoWhite: {
    marginTop: 10,
    height: "60%",
    width: "60%",
  },
  enterBtn: {
    fontSize: 15,
    fontWeight: "bold",
  },
  mainBlock: {
    backgroundColor: "#eff3fc",
    position: "absolute",
    zIndex: -3,
  },
  registBlock: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    color: "white",
  },
  btnAuth: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});
