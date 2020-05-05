import * as React from "react";
import { View, Button, StyleSheet, Dimensions, TextInput } from "react-native";

// компоненты

// Переменные

export class Inp extends React.Component {
  state = {
    color: this.props.color,
    aval: true,
    name: this.props.name,
  };
  constructor(props) {
    super(props);
    this.new = this.props.prev;
    this.val = this.props.val;
  }
  Check(itemValue) {
    if (this.props.name == "Email") {
      this.mailCheck(itemValue);
    } else if (this.props.name == "ФИО") {
      this.fioCheck(itemValue);
    } else if (this.props.name == "Телефон") {
      this.phoneCheck(itemValue);
    } else if (this.props.name == "Пароль") {
      this.passwordCheck(itemValue);
    } else if (this.props.name == "Госномер") {
      this.gosNumCheck(itemValue);
    }
  }
  mailCheck(itemValue) {
    if (
      itemValue.nativeEvent.text.indexOf("@") >= 0 &&
      itemValue.nativeEvent.text.indexOf(".") >= 0
    ) {
      this.setState({ color: "blue" });
    } else if (itemValue.nativeEvent.text.trim().length == 0) {
      this.setState({ color: "transparent" });
      console.log(itemValue);
    } else {
      this.setState({ color: "red" });
    }
    this.new.setState({
      registrationData: {
        registFio: this.new.state.registrationData.registFio,
        registPhone: this.new.state.registrationData.registPhone,
        mail: itemValue.nativeEvent.text,
        registPassword: this.new.state.registrationData.registPassword,
        registVin: this.new.state.registrationData.registVin,
        registGosNum: this.new.state.registrationData.registGosNum,
        registCarMark: this.new.state.registrationData.registCarMark,
      },
    });
  }
  fioCheck(itemValue) {
    if (itemValue.nativeEvent.text.trim().length < 3) {
      this.setState({ color: "red" });
    } else if (
      itemValue.nativeEvent.text.trim().length == 0 ||
      itemValue.nativeEvent.text.trim().length > 3
    ) {
      this.setState({ color: "blue" });
    }

    this.new.setState({
      registrationData: {
        registFio: itemValue.nativeEvent.text,
        registPhone: this.new.state.registrationData.registPhone,
        mail: this.new.state.registrationData.mail,
        registPassword: this.new.state.registrationData.registPassword,
        registVin: this.new.state.registrationData.registVin,
        registGosNum: this.new.state.registrationData.registGosNum,
        registCarMark: this.new.state.registrationData.registCarMark,
      },
    });
  }
  phoneCheck(itemValue) {
    if (itemValue.nativeEvent.text.length < 10) {
      this.setState({ color: "red" });
    } else {
      this.setState({ color: "blue" });
    }
    this.new.setState({
      registrationData: {
        registFio: this.new.state.registrationData.registFio,
        registPhone: itemValue.nativeEvent.text,
        mail: this.new.state.registrationData.mail,
        registPassword: this.new.state.registrationData.registPassword,
        registVin: this.new.state.registrationData.registVin,
        registGosNum: this.new.state.registrationData.registGosNum,
        registCarMark: this.new.state.registrationData.registCarMark,
      },
    });
  }
  passwordCheck(itemValue) {
    if (itemValue.nativeEvent.text.length < 5) {
      this.setState({ color: "red" });
    } else {
      this.setState({ color: "blue" });
    }
    this.new.setState({
      registrationData: {
        registFio: this.new.state.registrationData.registFio,
        registPhone: this.new.state.registrationData.registPhone,
        mail: this.new.state.registrationData.mail,
        registPassword: itemValue.nativeEvent.text,
        registVin: this.new.state.registrationData.registVin,
        registGosNum: this.new.state.registrationData.registGosNum,
        registCarMark: this.new.state.registrationData.registCarMark,
      },
    });
  }
  gosNumCheck(itemValue) {
    this.new.setState({
      registrationData: {
        registFio: this.new.state.registrationData.registFio,
        registPhone: this.new.state.registrationData.registPhone,
        mail: this.new.state.registrationData.mail,
        registPassword: this.new.state.registrationData.registPassword,
        registVin: this.new.state.registrationData.registVin,
        registGosNum: itemValue.nativeEvent.text,
        registCarMark: this.new.state.registrationData.registCarMark,
      },
    });
  }
  render() {
    return (
      <TextInput
        value={this.props.val}
        onChange={(itemValue, itemIndex) => {
          console.log(this.val);
          this.Check(itemValue);
        }}
        placeholder={this.props.name}
        style={{
          width: 400,
          ...this.props.styler,
          borderColor: this.state.color,
          color: "black",
          borderWidth: 1,
        }}
      />
    );
  }
}
