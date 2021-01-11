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

export default function title() {
  return (
    <View style={styles.container}>
      {/*title*/}
      <View style={styles.title}>
        <View style={[{ flex: 5 }]}>
          <ImageBackground
            source={require("../images/logo.png")}
            style={styles.image}
          >
            <View style={[styles.normal, { flex: 2 }]}></View>
            <View style={[styles.normal]}>
              <Text style={[styles.font_s, { fontSize: 20 }]}>
                if you wish that You Make your idea a reality product, Please
                come to Join.
              </Text>
              <View
                style={[
                  styles.normal,
                  { flex: 2, borderBottomWidth: 3, borderColor: "#4dd2ff" },
                ]}
              >
                <Text style={[styles.font_l, { fontSize: 45 }]}>
                  {" "}
                  자주 묻는 질문{" "}
                </Text>
              </View>

              <View style={[styles.normal]}>
                <View
                  style={[
                    styles.normal,
                    {
                      flexDirection: "row",
                    },
                  ]}
                >
                  <View style={[styles.normal, { width: "100%" }]}>
                    <Text style={[styles.font_s, {}]}>home </Text>
                  </View>
                  <View style={[styles.normal, { flex: 3, width: "100%" }]}>
                    <Text style={[styles.font_s, {}]}>
                      {">"}{" "}
                      <Text style={[{ color: "#4dd2ff" }]}>
                        {" "}
                        자주 묻는 질문
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.normal]}></View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "600px",
    backgroundColor: "grey",
  },

  title: {
    width: "100%",
    height: "600px",
    backgroundColor: "#0d0033",
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
    fontSize: 20,
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
    borderColor: "#d9d9d9",
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
