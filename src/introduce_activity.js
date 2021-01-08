import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";

export default function introduce_activity() {
  return (
    <View style={styles.container}>
      {/*content*/}
      <View style={(styles.content, styles.normal)}>
        <View style={[styles.normal, styles.box, {}]}>
          <View style={[styles.normal, styles.fullbox, {}]}>
            <View style={[styles.normal, styles.fullbox, {}]}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                로드셀을 이용한 무선 무게측정 상품매대
              </Text>
            </View>

            <View style={[styles.normal, styles.fullbox, { marginTop: -50 }]}>
              <Text>로드셀을 이용한 각각의 무게측정 </Text>
              <Text>RF무선통신 방식의 무선 데이터 전송</Text>
            </View>
          </View>
          <View
            style={[
              styles.normal,
              styles.fullbox,
              {
                marginLeft: 20,
                marginRight: 20,
                marginTop: -20,
                flexDirection: "row",
              },
            ]}
          >
            <View style={[styles.normal, styles.fullbox, {}]}>
              <Text style={{ fontWeight: "bold" }}>클라이언트</Text>
              <Text> </Text>
              <Text>신세계아이엔씨</Text>
            </View>
            <View style={[styles.normal, styles.fullbox, {}]}>
              <Text style={{ fontWeight: "bold" }}>제품영역</Text>
              <Text> </Text>
              <Text>Firmware, 설계, 제작, 회로 개발</Text>
            </View>
            <View style={[styles.normal, styles.fullbox, {}]}>
              <Text style={{ fontWeight: "bold" }}>제작연도</Text>
              <Text> </Text>
              <Text> 2020 </Text>
            </View>
          </View>
        </View>
        <View style={[styles.normal, styles.box, { flex: 5 }]}>
          <View style={[styles.normal, styles.fullbox, { marginBottom: 20 }]}>
            <ImageBackground
              source={require("./images/main/logo.png")}
              style={[styles.image, styles.fullbox]}
            ></ImageBackground>
          </View>
          <View style={[styles.normal, styles.fullbox, { marginBottom: 20 }]}>
            <ImageBackground
              source={require("./images/main/logo.png")}
              style={[styles.image, styles.fullbox]}
            ></ImageBackground>
          </View>
          <View style={[styles.normal, styles.fullbox, { marginBottom: 20 }]}>
            <ImageBackground
              source={require("./images/main/logo.png")}
              style={[styles.image, styles.fullbox]}
            ></ImageBackground>
          </View>
          <View style={[styles.normal, styles.fullbox, { marginBottom: 20 }]}>
            <ImageBackground
              source={require("./images/main/logo.png")}
              style={[styles.image, styles.fullbox]}
            ></ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "2500px",
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    width: "100%",
    height: "70px",
    backgroundColor: "white",
  },

  title: {
    width: "100%",
    height: "600px",
    backgroundColor: "#0d0033",
  },
  //flex-start, center, flex-end, stretch, baseline

  content: {
    flex: 6,
    backgroundColor: "white",
  },

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
