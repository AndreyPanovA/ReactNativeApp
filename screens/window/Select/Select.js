import * as React from "react";
import { Component, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Picker,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Transition, Transitioning } from "react-native-reanimated";
import Config from "../../../constants/Config";

export class Select extends React.Component {
  state = {
    loading: true,
    selectItem: ["java", "js", "jsq", "java1", "jse"],
    selectedItem: "Выберите работу",
    renderSelectItems: "",
    worksMas: [],
    selectItemWork: 1,
    loadingW: true,
    summCost: 0, // Сумма всех работ и деталей
    // ecb54a5bf9fa986557db2dd26d4d93b9
    workDitailsMas: [], // массив работ и деталей в одном,
    workColor: "white",
  };
  constructor() {
    super();
  }
  getMass() {
    let department = {};
    let worksMas = [];
    const data = {
      c: "Calc",
      m: "GetItem",
      token: "ecb54a5bf9fa986557db2dd26d4d93b9",
    };
    return fetch(Config.connection.url, {
      method: "POST",
      body: JSON.stringify({
        c: "Calc",
        m: "GetItem",
        token: "ecb54a5bf9fa986557db2dd26d4d93b9",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((jsonm) => {
        department = jsonm;
        worksMas = [{ title: "Выберите работу", id: "Выберите работу" }];
        department.work_type.forEach((el, i) => {
          worksMas.push({
            title: department.work_type[i].title,
            id: department.work_type[i].id,
          });
        });
        this.getDepartments(worksMas);
      });
  }
  getWorks(id) {
    let work = {};
    let worksMas = [];
    const data = {
      c: "Work",
      m: "GetWorks",
      id_type: 1,
      token: "ecb54a5bf9fa986557db2dd26d4d93b9",
    };
    return fetch(Config.connection.url, {
      method: "POST",
      body: JSON.stringify({
        c: "Work",
        m: "GetWorks",
        id_type: id,
        token: "ecb54a5bf9fa986557db2dd26d4d93b9",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((jsonm) => {
        work = jsonm;
        console.log(this.state.selectItemWork.id, "num test");
        work.forEach((el, i) => {
          worksMas.push({ title: work[i].title, id: work[i].id });
        });
        this.setState({ worksMas: worksMas });
      });
  }
  getDitails(id) {
    let work = {};
    let worksMas = [];
    const data = {
      c: "Work",
      m: "GetWorks",
      id_type: 1,
      token: "ecb54a5bf9fa986557db2dd26d4d93b9",
    };
    return fetch(Config.connection.url, {
      method: "POST",
      body: JSON.stringify({
        c: "Work",
        m: "FindExact",
        id_ClientCar: 2158,
        ids: id,
        token: "ecb54a5bf9fa986557db2dd26d4d93b9",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((jsonm) => {
        work = jsonm;
        console.log(work.works, "ditails");
        let cost = 0;
        worksMas = this.state.workDitailsMas;
        work.works.forEach((el, i) => {
          worksMas.push({
            title: el.title,
            id: el.id,
            q: el.q,
            isWork: el.isWork,
            price: el.price,
          });
        });
        worksMas.forEach((el, i) => {
          if (el.price !== undefined) {
            cost += el.price;
          } else {
            cost += el.q * 1980;
          }
        });
        this.setState({ workDitailsMas: worksMas, summCost: cost });
      });
  }
  async getDepartments(department) {
    let masDepartment = [];
    let jsx = ``;
    this.setState({ selectItem: department, loading: false });
    department.forEach((el, i) => {
      masDepartment.push(
        `label='${department[i]}' value='${department[i]} key=${i}'`
      );
    });
  }
  TimerCallBack = (el, i) => {
    this.setState((prevState) => ({
      selectedItem: el,
      selectItemWork: this.state.selectItem[i].id,
      loadingW: false,
    }));
  };
  componentDidMount() {
    this.getMass();
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.firstSelect}>
          <Picker
            style={styles.select}
            pickerStyleType="No"
            selectedValue={this.state.selectedItem}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ selectedItem: itemValue });
              this.setState({ selectItemWork: itemKey });
            }}
          ></Picker>
        </View>
      );
    } else {
      return (
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <Picker
            style={styles.select}
            itemStyle={styles.selectP}
            pickerStyleType="No"
            selectedValue={this.state.selectedItem}
            onValueChange={(itemValue, itemIndex, key) => {
              let selectItemWorkController = this.state.selectItem[itemIndex]
                .id;
              this.TimerCallBack(itemValue, itemIndex);
              if (itemValue !== "Выберите работу") {
                this.getWorks(selectItemWorkController);
              } else {
                this.setState({ loadingW: true });
              }
            }}
          >
            {this.state.selectItem.map((el, i) => {
              return (
                <Picker.Item label={el.title} value={el.title} key={el.id} />
              );
            })}
          </Picker>
          {this.state.loadingW ? (
            <Text style={{ marginTop: 20, color: "black" }}>
              Загрузка деталей для работы
            </Text>
          ) : (
            <Picker
              style={{
                width: "100%",
                justifyContent: "flex-start",
                height: 50,
              }}
              itemStyle={styles.selectP}
              pickerStyleType="No"
              selectedValue={this.state.selectedItem}
              onValueChange={(itemValue, itemIndex, itemKey) => {
                this.setState({ selectedItem: itemValue });
                //получаем массив деталей и работ
                this.state.worksMas.forEach((el, i) => {
                  if (el.title == itemValue) this.getDitails(el.id);
                });
              }}
            >
              {this.state.worksMas.map((el, i) => {
                return (
                  <Picker.Item label={el.title} value={el.title} key={el.id} />
                );
              })}
            </Picker>
          )}
          <View style={styles.tableCont}>
            <View style={styles.topRow}>
              <Text style={{ color: "white" }}>Деталь</Text>
              <Text style={{ color: "white" }}>
                Сумма: {this.state.summCost}{" "}
              </Text>
            </View>
            <ScrollView style={{ width: "100%" }}>
              {/* Тут массив с деталями */}
              <View style={{ width: "100%", alignItems: "center" }}>
                {this.state.workDitailsMas.map((el, i) => {
                  return (
                    <View key={i}>
                      {el.isWork ? (
                        <TouchableOpacity
                          style={{
                            ...styles.tableStr,
                            backgroundColor: "green",
                          }}
                          key={i}
                          onPress={() => {
                            // Срезы
                            let test = this.state.workDitailsMas;
                            test.splice(i, 1);
                            let cost = 0;

                            test.forEach((el, i) => {
                              if (el.price !== undefined) {
                                cost += el.price;
                              } else {
                                cost += el.q * 1980;
                              }
                              //
                              if (el.isWork) {
                                this.setState({ workColor: "blue" });
                              }
                            });
                            this.setState({
                              workDitailsMas: test,
                              summCost: cost,
                            });
                          }}
                        >
                          <View style={styles.title}>
                            <Text style={{}}>{el.title} : </Text>
                          </View>
                          <View style={styles.summLine}>
                            <Text
                              style={{ textAlign: "center", marginBottom: 10 }}
                            >
                              {el.isWork == 1 ? el.q * 1980 : el.price}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={{
                            ...styles.tableStr,
                          }}
                          key={i}
                          onPress={() => {
                            // Срезы
                            let test = this.state.workDitailsMas;
                            test.splice(i, 1);
                            let cost = 0;

                            test.forEach((el, i) => {
                              if (el.price !== undefined) {
                                cost += el.price;
                              } else {
                                cost += el.q * 1980;
                              }
                              if (el.isWork) {
                                test.forEach((elem, index) => {});
                              }
                              if (el.isWork) {
                                this.setState({ workColor: "blue" });
                              }
                            });
                            this.setState({
                              workDitailsMas: test,
                              summCost: cost,
                            });
                          }}
                        >
                          <View style={styles.title}>
                            <Text style={{}}>{el.title} : </Text>
                          </View>
                          <View style={styles.summLine}>
                            <Text
                              style={{ textAlign: "center", marginBottom: 10 }}
                            >
                              {el.isWork == 1 ? el.q * 1980 : el.price}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}
let styles = StyleSheet.create({
  firstSelect: {
    alignItems: "center",
    height: 200,
    borderColor: "black",
    borderBottomWidth: 2,
    width: "100%",
  },
  select: {
    width: "100%",
    justifyContent: "flex-start",
  },
  selectP: { height: 50, fontSize: 12, color: "black" },
  tableCont: {
    backgroundColor: "#e0eafa",
    height: "65%",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  topRow: {
    backgroundColor: "#323232",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    width: "90%",
    marginBottom: 5,
  },
  tableStr: {
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: "90%",
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 0,
  },
  summLine: {
    borderBottomColor: "#63adff",
    borderBottomWidth: 2,
    flex: 0.5,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    borderRightColor: "#63adff",
    borderRightWidth: 2,
    borderStyle: "dotted",
    flex: 1.5,
  },
});
