import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import "react-native-gesture-handler";

import { CustomerHeader } from "../../window/CustomerHeader";
import request from "../../../class/UserService";
import color from "../../../constants/Colors";
// import { Select } from "../window/Select/Select";
// ({ navigation })
export class History extends React.Component {
  state = {
    actions: [],
  };
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  getHistory = () => {
    const data = request({
      c: "History",
      m: "getEntitys",
    }).then((response) => {
      //   console.log(response., "history");
      let actMass = [];
      response.forEach((element, i) => {
        // console.log(element.d, i);
        actMass.unshift(element);
        this.setState({ actions: actMass });
      });
      console.log(this.state.actions);
    });
  };

  componentDidMount() {
    this.getHistory();
  }
  render() {
    return (
      <SafeAreaView
        style={{
          minHeight: 100,
          backgroundColor: color.dark, // полностью заполняем
        }}
      >
        <CustomerHeader
          title="История"
          isHome={true}
          navigation={this.navigation}
        />
        <ScrollView>
          {this.state.actions.map((el, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={styles.text}>{el.d}</Text>
                <Text style={{ ...styles.renderText, color: color.orange }}>
                  Работы
                </Text>
                <Text style={styles.renderText}>{el.works}</Text>
                <Text style={{ ...styles.renderText, color: color.orange }}>
                  Детали
                </Text>
                <Text style={styles.renderText}>{el.parts}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 20, textAlign: "center", color: "white" },
  renderText: {
    fontSize: 15,
    textAlign: "left",
    color: "white",
    marginBottom: 5,
  },
});
