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

export default function header() {
  return (
    <View style={styles.header}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "90%",
          height: "100%",
        }}
      >
        <View style={[styles.normal, { flex: 2, flexDirection: "row" }]}>
          <View style={[styles.normal, { flex: 0.8 }]}></View>
          <TouchableOpacity
            style={[
              {
                flex: 0.5,
                justifyContent: "center",
              },
            ]}
          >
            <Image
              style={styles.tinyLogo}
              source={require("./images/main/logo.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[{ flex: 1, justifyContent: "center" }]}>
            <Text style={styles.font_s}>Laboratory Technician Vectrow</Text>
          </TouchableOpacity>
          <View style={[{ flex: 0.5 }]}></View>
        </View>
        <View style={[styles.normal, { flex: 2, flexDirection: "row" }]}>
          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={[styles.font_s, { color: "grey" }]}>회사소개</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={[styles.font_s, { color: "grey" }]}>포트폴리오</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={[styles.font_s, { color: "grey" }]}>제작의뢰</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={[styles.font_s, { color: "grey" }]}>찾아오는길</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text style={[styles.font_s, { color: "grey" }]}>FAQ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: "70px",
    backgroundColor: "white",
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

  button: {
    backgroundColor: "#0d0033",
    width: 150,
    height: 50,
    border: 0,
    outline: 0,
    borderRadius: "20px",
  },

  tinyLogo: {
    width: 80,
    height: 80,
  },
});
