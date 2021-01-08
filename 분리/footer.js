import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Linking,
  Image,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.footer}>
      <View
        style={[
          styles.box,
          styles.normal,
          { height: "100%", width: "70%", backgroundColor: "#1a1a1a" },
        ]}
      >
        <View
          style={[
            styles.box,
            styles.normal,
            {
              flex: 1.5,
              borderBottomWidth: 1,
              borderColor: "grey",
            },
          ]}
        >
          <Text style={[styles.font_s, {}]}>LABORATORY TECHNICIAN VECTROW</Text>
        </View>
        <View style={[styles.box, styles.normal, { flex: 3, width: "100%" }]}>
          <View style={[{ flex: 1 }]}></View>
          <View
            style={[
              styles.box,
              styles.normal,
              {
                flex: 5,
                flexDirection: "row",
                margin: 40,
              },
            ]}
          >
            <View
              style={[
                {
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "",
                },
              ]}
            >
              <Text style={[styles.font_s, { fontSize: 10 }]}>
                Laboratory Technician Vectrow | 대표자: 김현,박도영
                {"\n"}
                강원도 원주시 흥업면 연세대길 1, 연세창업보육센터 103호 |
                사업자등록번호: 799-81-01433
                {"\n"}
                Unit 103, Yonsei University Business Incubator Center / 1,
                Yonseidae-gil, Wonju, Gangwon-do, Republic of Korea
                {"\n"}
                고객센터: 033-761-7333 ｜Mobile: 010-5901-4120 | Email:
                office@vectrow.com |{"\n"}
                평일: 09:00 ~ 18:00 | 점심시간: 12:00 ~ 13:00
              </Text>
            </View>

            <View style={[styles.normal, { flexDirection: "row" }]}>
              <View style={[styles.normal, { flex: 1 }]}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100,
                      backgroundColor: "",
                      borderRadius: "20px",
                    },
                  ]}
                >
                  <Text style={styles.font_s}>인스타그램</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.normal, { flex: 1 }]}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      width: 100,
                      height: 100,
                      backgroundColor: "",
                      borderRadius: "20px",
                    },
                  ]}
                >
                  <Text style={styles.font_s}>페이스북</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[{ flex: 1 }]}></View>
        </View>
        <View
          style={[
            styles.normal,
            styles.box,
            { borderTopWidth: 1, borderColor: "grey" },
          ]}
        >
          <Text style={styles.font_s}>
            Copyright © 2020 LTV. All rights Reserved.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: "300px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },

  box: {
    width: 1100,
    height: "100%",
  },

  normal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  font_s: {
    fontSize: 15,
    color: "grey",
  },

  font_m: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  font_l: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },

  border: {
    borderstyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderWidth: 0.1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },
  fullbox: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#0d0033",
    width: 150,
    height: 50,
    border: 0,
    outline: 0,
    borderRadius: "20px",
  },
  shadow: {
    shadowColor: "#000000", //그림자색
    shadowOpacity: 0.1, //그림자 투명도
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 15,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
});
