import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import request from "../class/UserService";

import Colors from "../constants/Colors";

const { width, height } = Dimensions.get("window");
export default function Page({ name, prevState }) {
  const data = request({
    c: "User",
    m: "Page",
    name: name,
  }).then((data) => {
    // navigation.setOptions({ headerTitle: data.title });
    setHtml(data.html);
    setTitle(data.title);
  });

  const [html, setHtml] = React.useState();
  const [title, setTitle] = React.useState();

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 80,
          flexDirection: "row",
          paddingBottom: 10,
          paddingTop: 20,
          zIndex: 50,
          position: "relative",
          marginTop: 0,
          backgroundColor: "black",
        }}
      >
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
          <View style={styles.title}>
            <Text style={{ fontWeight: "600", fontSize: 16, color: "white" }}>
              {title}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              prevState.setState({ pageName: "" });
            }}
          >
            <Image
              style={styles.img}
              source={require("../src/images/back.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <Text style={{ justifyContent: "center", margin: 20 }}>{title}</Text> */}
      <ScrollView style={styles.container}>
        <WebView
          style={styles.webview}
          originWhitelist={["*"]}
          source={{ html: html }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.eyeBlue,
  },
  webview: {
    height: height,
    width: "100%",
    backgroundColor: "transparent",
  },
  title: {
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "black",
    alignItems: "center",
    borderRadius: 35,
  },
  img: {
    width: 25,
    height: 25,
  },
});
