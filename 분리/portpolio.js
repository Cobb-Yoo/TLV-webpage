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
      <View style={(styles.content, styles.normal)}>
        <View style={[styles.normal, styles.box]}>
          {/*주제탭*/}
          <View style={[styles.normal]}>
            <View
              style={[
                {
                  width: 800,
                  height: 70,
                  flexDirection: "row",
                },
              ]}
            >
              <TouchableOpacity style={[styles.normal, styles.button]}>
                <Text style={[styles.font_s, { color: "white" }]}>개발</Text>
              </TouchableOpacity>

              <View style={{ flex: 0.1 }}> </View>
              <TouchableOpacity style={[styles.normal, styles.button]}>
                <Text style={[styles.font_s, { color: "white" }]}>제작</Text>
              </TouchableOpacity>

              <View style={{ flex: 0.1 }}> </View>

              <TouchableOpacity style={[styles.normal, styles.button]}>
                <Text style={[styles.font_s, { color: "white" }]}>교육</Text>
              </TouchableOpacity>

              <View style={{ flex: 0.1 }}> </View>

              <TouchableOpacity style={[styles.normal, styles.button]}>
                <Text style={[styles.font_s, { color: "white" }]}>인증</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*사진+설명*/}
          <View style={[styles.fullbox, { flex: 4 }]}>
            <View
              style={[styles.normal, styles.fullbox, { flexDirection: "row" }]}
            >
              {/*사진1*/}
              <TouchableOpacity
                style={[
                  styles.normal,
                  styles.fullbox,
                  styles.shadow,
                  { margin: 20 },
                ]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("./images/main/process_4.png")}
                    style={(styles.image, styles.button, styles.fullbox)}
                  ></ImageBackground>
                </View>

                <View
                  style={[
                    styles.fullbox,
                    { flex: 1, backgroundColor: "white" },
                  ]}
                ></View>
              </TouchableOpacity>

              {/*사진2*/}
              <TouchableOpacity
                style={[
                  styles.normal,
                  styles.fullbox,
                  styles.shadow,
                  { margin: 20 },
                ]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("./images/main/process_4.png")}
                    style={(styles.image, styles.button, styles.fullbox)}
                  ></ImageBackground>
                </View>

                <View
                  style={[
                    styles.fullbox,
                    { flex: 1, backgroundColor: "white" },
                  ]}
                ></View>
              </TouchableOpacity>

              {/*사진3*/}
              <TouchableOpacity
                style={[
                  styles.normal,
                  styles.fullbox,
                  styles.shadow,
                  { margin: 20 },
                ]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("./images/main/process_4.png")}
                    style={(styles.image, styles.button, styles.fullbox)}
                  ></ImageBackground>
                </View>

                <View
                  style={[
                    styles.fullbox,
                    { flex: 1, backgroundColor: "white" },
                  ]}
                ></View>
              </TouchableOpacity>
            </View>

            <View style={[{ flex: 0.1, backgroundColor: "none" }]}></View>

            <View
              style={[styles.normal, styles.fullbox, { flexDirection: "row" }]}
            >
              {/*사진4*/}
              <TouchableOpacity
                style={[
                  styles.normal,
                  styles.fullbox,
                  styles.shadow,
                  { margin: 20 },
                ]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("./images/main/process_4.png")}
                    style={(styles.image, styles.button, styles.fullbox)}
                  ></ImageBackground>
                </View>

                <View
                  style={[
                    styles.fullbox,
                    { flex: 1, backgroundColor: "white" },
                  ]}
                ></View>
              </TouchableOpacity>

              {/*사진5*/}
              <TouchableOpacity
                style={[
                  styles.normal,
                  styles.fullbox,
                  styles.shadow,
                  { margin: 20 },
                ]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("./images/main/process_4.png")}
                    style={(styles.image, styles.button, styles.fullbox)}
                  ></ImageBackground>
                </View>

                <View
                  style={[
                    styles.fullbox,
                    { flex: 1, backgroundColor: "white" },
                  ]}
                ></View>
              </TouchableOpacity>

              {/*사진6*/}
              <TouchableOpacity
                style={[
                  styles.normal,
                  styles.fullbox,
                  styles.shadow,
                  { margin: 20 },
                ]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("./images/main/process_4.png")}
                    style={(styles.image, styles.button, styles.fullbox)}
                  ></ImageBackground>
                </View>

                <View
                  style={[
                    styles.fullbox,
                    { flex: 1, backgroundColor: "white" },
                  ]}
                ></View>
              </TouchableOpacity>
            </View>
          </View>

          {/*페이지번호*/}
          <View style={[styles.normal, styles.fullbox]}>
            <View
              style={[
                styles.normal,
                {
                  width: "30%",
                  margin: 50,
                  flexDirection: "row",
                },
              ]}
            >
              <TouchableOpacity style={[styles.normal, styles.pagebutton]}>
                <Text>&lt;</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.normal, styles.pagebutton]}>
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.normal, styles.pagebutton]}>
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.normal, styles.pagebutton]}>
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.normal, styles.pagebutton]}>
                <Text>&middot;&middot;&middot;</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.normal, styles.pagebutton]}>
                <Text>&gt;</Text>
              </TouchableOpacity>
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
    height: "1500px",
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

  pagebutton: {
    backgroundColor: "white",
    width: "20%",
    height: "60%",
    margin: 10,
  },
});
