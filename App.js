import * as React from "react";
import { View, Button, StyleSheet, Dimensions, Text } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// компоненты

import { MyData } from "./screens/window/MyData";
import { MyDataDitail } from "./screens/window/innerBlock/MyDataDitail";
import { CarsAdder } from "./screens/window/CarsAdder";
import { CarsAdderDitail } from "./screens/window/innerBlock/CarsAdderDitail";
import { Settings } from "./screens/window/Settings";
import { SettingsDitail } from "./screens/window/innerBlock/SettingsDitail";
import { Auth } from "./screens/Enter/Main/AuthClass";
import { CustomDrawerContent } from "./screens/Navigator/CustomDrawerContent";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";
import request from "./class/UserService";

import { Service } from "./screens/window/service";
import { History } from "./screens/window/innerBlock/History";
import { Stoks } from "./screens/window/Stoks";

// Переменные
import Config from "./constants/Config";

// lightBlue #eff3fc
import io from "socket.io-client";

//табы 367dff

import { Provider } from "react-redux";
import store from "./src/store/index";
// green: #ddf6ec
//текущие значения экрана, используем в стилях ниже Auth
const { width, height } = Dimensions.get("window");
const Tab = createMaterialBottomTabNavigator();
const StackHome = createStackNavigator();
const StackCar = createStackNavigator();
const StackSettings = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Назад на главную" />
      {/* <TouchableOpacity onPress={() => navigation.navigate("CarsAdderDitail")}>
        <Text>Перейти к деталям</Text>
      </TouchableOpacity> */}
    </View>
  );
}
const navOptionHandler = () => ({
  headerShown: false,
});
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="MyData">
      <StackHome.Screen
        name="Мои данные"
        component={MyData}
        options={navOptionHandler}
      ></StackHome.Screen>
      <StackHome.Screen
        name="MyDataDitails"
        component={MyDataDitail}
        options={navOptionHandler}
      ></StackHome.Screen>
    </StackHome.Navigator>
  );
}
function CarStack() {
  return (
    <StackCar.Navigator initialRouteName="CarAdder">
      <StackCar.Screen
        name="Мои автомобили"
        component={CarsAdder}
        options={navOptionHandler}
      ></StackCar.Screen>
      <StackCar.Screen
        name="CarsAdderDitail"
        component={CarsAdderDitail}
        options={navOptionHandler}
      ></StackCar.Screen>
    </StackCar.Navigator>
  );
}
function SettingsStack() {
  return (
    <StackSettings.Navigator initialRouteName="Settings">
      <StackSettings.Screen
        name="Настройки"
        component={Settings}
        options={navOptionHandler}
      ></StackSettings.Screen>
      <StackSettings.Screen
        name="SettingsDitail"
        component={SettingsDitail}
        options={navOptionHandler}
      ></StackSettings.Screen>
    </StackSettings.Navigator>
  );
}

function MyTabs(props, auth) {
  return (
    <Tab.Navigator
      style={{
        height: 100,
        backgroundColor: "black",
        borderColor: "#ccc",
      }}
      tabBarOptions={{
        activeTintColor: "#00bacd", // цвет иконки
        activeBackgroundColor: "#242133",
        activeSize: 28,
      }}
      activeSize="28"
      activeColor="#367dff"
      inactiveColor="#848894"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="MyData"
        component={HomeStack}
        options={{
          tabBarLabel: "Мои данные",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="CarsAdder"
        component={CarStack}
        options={{
          tabBarLabel: "Автомобили",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={25} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Stoks"
        component={Stoks}
        options={{
          tabBarLabel: "Акции",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={25} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: "Настройки",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MyDrawer() {
  // console.log(auth);
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={(props) => CustomDrawerContent(props)}
    >
      <Drawer.Screen name="Мои данные" component={MyTabs} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Stoks" component={Stoks} />
      <Drawer.Screen name="Запись на сервис" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

export default class App extends React.Component {
  state = {
    loading: true,
    select: "select",
    token: null,
    auth: false,
    setAuth: () => {
      this.setState({ auth: true });
    },
    outAuth: () => {
      this.setState({ auth: false });
    },
    setSignUp: (tokenResponse) => {
      this.setState({ token: tokenResponse });
      console.log(tokenResponse, "Проверяем");
    },
    getToken: () => {
      const data = request({
        c: "User",
        m: "Auth",
        login: "frankbakulov@gmail.com",
        password: "fb",
      }).then((response) => {
        if (response.token) {
          this.registerForPushNotificationsAsync(response.token);
          this.state.setAuth();
        } else {
        }
      });
    },
  };
  constructor() {
    super();
  }
  // getToken() {
  //   const data = request({
  //     c: "User",
  //     m: "Auth",
  //     login: "frankbakulov@gmail.com",
  //     password: "fb",
  //   }).then((response) => {
  //     if (response.token) {
  //       this.registerForPushNotificationsAsync(response.token);
  //     } else {
  //     }
  //   });
  // }
  async getWorks(token) {
    this.state.token = token.token;
    this.state.loading = true;
    console.log(token, "new");
  }
  registerForPushNotificationsAsync = async (token) => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      const tokenFCM = await Notifications.getExpoPushTokenAsync();

      this.socketIoConnection(token, tokenFCM);
    } else {
      alert("Must use physical device for Push Notifications");
    }
  };
  socketIoConnection(token, tokenFCM) {
    console.log(token, tokenFCM);
    let soket = io(
      Config.connection.soket +
        "?token=" +
        token +
        "&tokenFCM=" +
        escape(tokenFCM)
    );

    soket.on("connect", () => {
      console.log("подключено к серверу сокетов");
    });
    soket.on("connect_error", (e) => {
      console.log(e);
    });
  }
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        {this.state.auth == true ? (
          <NavigationContainer>
            <MyDrawer auth={this.state.auth} />
            {/* <Service tester={this} out={this.state.outAuth} /> */}
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Auth
              onAuth={this.state.setAuth}
              onSignUp={this.state.onSignUp}
              getToken={this.state.getToken}
            />
          </NavigationContainer>
        )}
      </Provider>
    );
  }
}

let styles = StyleSheet.create({});
