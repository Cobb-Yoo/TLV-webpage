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
import Title from "./title_intro";

export default function indroduce() {
  return (
    <View style={styles.container}>
      <Title />
      {/*content*/}
      <View style={styles.content}>
        <View style={[styles.normal, { flex: 0.6 }]}>
          <View style={[styles.normal, {}]}></View>
          <View
            style={[
              styles.normal,
              { flex: 1, borderBottomWidth: 2, borderColor: "#1a1a1a" },
            ]}
          >
            <Text style={[styles.font_l, { color: "#1a1a1a" }]}>
              CEO Message
            </Text>
            <Text style={[styles.font_s, {}]}>
              Nihil officia ut sint molestiae tenetur.
            </Text>
          </View>
          <View style={[styles.box, { flex: 5 }]}>
            <Text style={[styles.font_s, { lineHeight: 25 }]}>
              {"\n"}
              {"\n"}
              {"\n"}
              저희는 금년 4년차 되는 벤처기업이자 스타트업인 기업으로서 의료
              헬스케어기기 및 IOT 센서 제조 기술 회사로 새로운 아이디어 및
              의료기기를 특성화하여 다양한 개발을 하여 왔습니다. 금번 2020
              의료기기 창업 공모전에 우수상을 입상하여 다양한 기술지원을
              (재)원주의료기기 테크노벨리로 부터 지원받고 함께 성장하고
              있습니다. 더 나아가 만성질환에 대한 예방 제품 및 인공지능 진단 및
              서비스 기술을 바탕으로 세계를 준비하는 팀으로 노력하겠습니다.
              {"\n"}
              {"\n"}
              감사합니다.
              {"\n"}
              {"\n"}
            </Text>
            <Text style={[styles.font_s, { textAlign: "center" }]}>
              CEO Joseph Park
            </Text>
          </View>
          <View style={[styles.normal, { flex: 0.1 }]}></View>
        </View>

        <View style={[styles.normal, { backgroundColor: "#f2f2f2" }]}>
          <View style={[styles.normal, { flex: 1.5 }]}>
            <Text style={[styles.font_l, { color: "#1a1a1a" }]}>MEMBERS</Text>
            <Text style={[styles.font_s, {}]}>
              Nihil officia ut sint molestiae tenetur.
            </Text>
          </View>
          <View style={[styles.box, { flex: 4 }]}>
            <View style={[{ flex: 1, flexDirection: "row" }]}>
              <TouchableOpacity
                style={[styles.normal, styles.shadow, { margin: 20 }]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("../images/main/kim.png")}
                    style={[
                      styles.image,
                      styles.button,
                      styles.fullbox,
                      {
                        justifyContent: "flex-end",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.fullbox,
                        {
                          height: "32%",
                          opacity: 0.7,
                          backgroundColor: "#1a1a1a",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.font_m,
                          {
                            lineHeight: 50,
                            textAlign: "center",
                            color: "white",
                          },
                        ]}
                      >
                        Hyun Kim
                      </Text>
                      <Text
                        style={[
                          styles.font_s,
                          { textAlign: "center", color: "white" },
                        ]}
                      >
                        Chief Technology Officer
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.normal, styles.shadow, { margin: 20 }]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("../images/main/kim.png")}
                    style={[
                      styles.image,
                      styles.button,
                      styles.fullbox,
                      {
                        justifyContent: "flex-end",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.fullbox,
                        {
                          height: "32%",
                          opacity: 0.7,
                          backgroundColor: "#1a1a1a",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.font_m,
                          {
                            lineHeight: 50,
                            textAlign: "center",
                            color: "white",
                          },
                        ]}
                      >
                        Hyun Kim
                      </Text>
                      <Text
                        style={[
                          styles.font_s,
                          { textAlign: "center", color: "white" },
                        ]}
                      >
                        Chief Technology Officer
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.normal, styles.shadow, { margin: 20 }]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("../images/main/kim.png")}
                    style={[
                      styles.image,
                      styles.button,
                      styles.fullbox,
                      {
                        justifyContent: "flex-end",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.fullbox,
                        {
                          height: "32%",
                          opacity: 0.7,
                          backgroundColor: "#1a1a1a",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.font_m,
                          {
                            lineHeight: 50,
                            textAlign: "center",
                            color: "white",
                          },
                        ]}
                      >
                        Hyun Kim
                      </Text>
                      <Text
                        style={[
                          styles.font_s,
                          { textAlign: "center", color: "white" },
                        ]}
                      >
                        Chief Technology Officer
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[{ flex: 1, flexDirection: "row" }]}>
              <TouchableOpacity
                style={[styles.normal, styles.shadow, { margin: 20 }]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("../images/main/park.png")}
                    style={[
                      styles.image,
                      styles.button,
                      styles.fullbox,
                      {
                        justifyContent: "flex-end",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.fullbox,
                        {
                          height: "32%",
                          opacity: 0.7,
                          backgroundColor: "#1a1a1a",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.font_m,
                          {
                            lineHeight: 50,
                            textAlign: "center",
                            color: "white",
                          },
                        ]}
                      >
                        Joseph Park
                      </Text>
                      <Text
                        style={[
                          styles.font_s,
                          { textAlign: "center", color: "white" },
                        ]}
                      >
                        Chief Technology Officer
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.normal, styles.shadow, { margin: 20 }]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("../images/main/park.png")}
                    style={[
                      styles.image,
                      styles.button,
                      styles.fullbox,
                      {
                        justifyContent: "flex-end",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.fullbox,
                        {
                          height: "32%",
                          opacity: 0.7,
                          backgroundColor: "#1a1a1a",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.font_m,
                          {
                            lineHeight: 50,
                            textAlign: "center",
                            color: "white",
                          },
                        ]}
                      >
                        Joseph Park
                      </Text>
                      <Text
                        style={[
                          styles.font_s,
                          { textAlign: "center", color: "white" },
                        ]}
                      >
                        Chief Technology Officer
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.normal, styles.shadow, { margin: 20 }]}
              >
                <View style={[styles.fullbox, { flex: 2 }]}>
                  <ImageBackground
                    source={require("../images/main/park.png")}
                    style={[
                      styles.image,
                      styles.button,
                      styles.fullbox,
                      {
                        justifyContent: "flex-end",
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.fullbox,
                        {
                          height: "32%",
                          opacity: 0.7,
                          backgroundColor: "#1a1a1a",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.font_m,
                          {
                            lineHeight: 50,
                            textAlign: "center",
                            color: "white",
                          },
                        ]}
                      >
                        Joseph Park
                      </Text>
                      <Text
                        style={[
                          styles.font_s,
                          { textAlign: "center", color: "white" },
                        ]}
                      >
                        Chief Technology Officer
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.normal, { flex: 0.5 }]}></View>
          </View>
        </View>

        <View style={[styles.normal, { flex: 0.8 }]}>
          <View style={[styles.normal, { flex: 3 }]}>
            <Text style={[styles.font_l, { color: "#1a1a1a" }]}>CLIENTS</Text>
            <Text style={[styles.font_s, {}]}>
              Nihil officia ut sint molestiae tenetur.
            </Text>
          </View>
          <View style={[styles.normal, { flex: 5 }]}>
            <View style={[styles.box, {}]}>
              <View style={[{ flex: 1 }]}>
                <View style={[{ flex: 4 }]}>
                  <ImageBackground
                    source={require("../images/main/total.png")}
                    style={styles.image}
                  >
                    <View
                      style={[
                        {
                          flex: 1,
                          flexDirection: "row",
                        },
                      ]}
                    >
                      <View style={[{ flex: 1 }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1 }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                    </View>
                    <View
                      style={[
                        {
                          flex: 1,
                          flexDirection: "row",
                        },
                      ]}
                    >
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                    </View>
                    <View
                      style={[
                        {
                          flex: 1,
                          flexDirection: "row",
                        },
                      ]}
                    >
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                      <View style={[{ flex: 1, backgroundColor: "" }]}>
                        <ImageBackground></ImageBackground>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={[styles.normal, { flex: 0.5 }]}>
                  <Text style={styles.font_s}></Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.normal]}></View>
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
    backgroundColor: "#1a1a1a",
    width: 150,
    height: 40,
    border: 0,
    outline: 0,
    borderRadius: "50px",
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
