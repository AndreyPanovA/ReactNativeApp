import * as React from "react";
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

export class Service extends React.Component {
  constructor(props) {
    super(props);
    this.tesx = props.test;
  }
  test() {
    // this.setState({ auth: false });
    console.log(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          //   marginTop: 5,
          borderColor: "black",
          borderWidth: 1,
          backgroundColor: "#333",
          paddingVertical: 2,

          position: "relative",
        }}
      >
        <Text
          style={{ position: "relative", color: "white" }}
          onPress={
            //   console.log(this.props.tester.setState({}));
            this.props.out
          }
        >
          Выйти из аккаунта
        </Text>
      </TouchableOpacity>
    );
  }
}
