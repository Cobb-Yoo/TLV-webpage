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

export default function faq() {
  return (
    <View style={styles.container}>
      {/*content*/}
      <View style={styles.content}>
        <View style={[styles.normal, { flex: 0.8 }]}>
          <Text style={[styles.font_l, { color: "#1a1a1a" }]}>FAQ</Text>
          <Text style={[styles.font_s, {}]}>
            Nihil officia ut sint molestiae tenetur.
          </Text>
        </View>

        <View style={[{ flex: 4, alignItems: "center" }]}>
          <TouchableOpacity>
            <View
              style={[
                styles.box,
                styles.border,
                {
                  justifyContent: "center",
                  margin: "5px",
                  backgroundColor: "#f2f2f2",
                  height: "70px",
                },
              ]}
            >
              <Text style={[styles.font_m, { color: "#1a1a1a" }]}>
                {"    "}● 제작의뢰는 어떻게 할 수 있나요?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.box,
                styles.border,
                {
                  justifyContent: "center",
                  margin: "5px",
                  backgroundColor: "#f2f2f2",
                  height: "70px",
                },
              ]}
            >
              <Text style={[styles.font_m, { color: "#1a1a1a" }]}>
                {"    "}● 제작 의뢰를 메일로 문의해도 견적을 받아볼 수 있나요?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.box,
                styles.border,
                {
                  justifyContent: "center",
                  margin: "5px",
                  backgroundColor: "#f2f2f2",
                  height: "70px",
                },
              ]}
            >
              <Text style={[styles.font_m, { color: "#1a1a1a" }]}>
                {"    "}● 제작의뢰 게시글 작성 시 첨부 가능한 파일 종류는
                무엇인가요?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.box,
                styles.border,
                {
                  justifyContent: "center",
                  margin: "5px",
                  backgroundColor: "#f2f2f2",
                  height: "70px",
                },
              ]}
            >
              <Text style={[styles.font_m, { color: "#1a1a1a" }]}>
                {"    "}● 제작의뢰 게시글 작성 후 진행 절차는 어떻게 되나요?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.box,
                styles.border,
                {
                  justifyContent: "center",
                  margin: "5px",
                  backgroundColor: "#f2f2f2",
                  height: "70px",
                },
              ]}
            >
              <Text style={[styles.font_m, { color: "#1a1a1a" }]}>
                {"    "}● 견적서는 언제, 어떻게 받아볼 수 있나요?
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.box,
                styles.border,
                {
                  justifyContent: "center",
                  margin: "5px",
                  backgroundColor: "#f2f2f2",
                  height: "70px",
                },
              ]}
            >
              <Text style={[styles.font_m, { color: "#1a1a1a" }]}>
                {"    "}● 견적을 받은 후 납품까지는 얼마나 걸리나요?
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={[
                styles.box,
                styles.border,
                {
                  justifyContent: "center",
                  margin: "5px",
                  backgroundColor: "#f2f2f2",
                  height: "70px",
                },
              ]}
            >
              <Text style={[styles.font_m, { color: "#1a1a1a" }]}>
                {"    "}● 아이디어가 없는 경우에도 제작이 가능한가요?
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.normal, { flex: 1 }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "1500px",
    backgroundColor: "grey",
  },
  content: {
    width: "100%",
    height: "1500px",
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
