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

export default function App() {
  return (
    <View style={styles.container}>
      {/*content*/}
      <View style={styles.content}>
        <View style={[{ flex: 1 }]}>
          <View style={[{ flex: 1 }]}>
            <View style={[{ flex: 1 }]}>
              <ImageBackground
                source={require("./images/main/map.png")}
                style={styles.image}
              >
                <View style={[styles.normal, { flex: 1 }]}>
                  <Text
                    style={[
                      styles.font_l,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#1a1a1a",
                      },
                    ]}
                  >
                    content_지도 API
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={[styles.normal, { backgroundColor: "white" }]}>
              <View style={[styles.normal, { flex: 3 }]}>
                <Text style={[styles.font_l, { color: "#1a1a1a" }]}>
                  CONTACT US
                </Text>
                <Text style={[styles.font_s, {}]}>
                  Nihil officia ut sint molestiae tenetur.
                </Text>
              </View>

              <View style={[styles.box, { flex: 2, flexDirection: "row" }]}>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>
                    ADDRESS
                  </Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>원주시 연세대길 1, 103호</Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>TEL</Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>033-761-7333</Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>FAX</Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>033-761-7333</Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>EMAIL</Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>office@vectrow.com</Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>TIME</Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>평일 9:00-18:00 </Text>
                </View>
              </View>

              <View style={[styles.normal, { flex: 1 }]}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "1000px",
    backgroundColor: "white",
  },

  content: {
    flex: 6,
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
