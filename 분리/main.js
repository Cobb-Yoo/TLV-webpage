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
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={[{ flex: 5 }]}>
          <ImageBackground
            source={require("./images/main/title.png")}
            style={styles.image}
          >
            <View style={[styles.normal, { flex: 2 }]}>
              <Text
                style={{ fontSize: "3vw", fontWeight: "bold", color: "white" }}
              >
                스토리만 가지고 오세요.
              </Text>
              <Text
                style={{
                  fontSize: "3vw",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                당신의{" "}
                <Text
                  style={{
                    color: "",
                  }}
                >
                  아이디어,
                </Text>{" "}
                저희가 함께 합니다.
              </Text>

              <Text> </Text>
              <Text
                style={[
                  styles.font_s,
                  {
                    fontSize: "1vw",
                    color: "white",
                  },
                ]}
              >
                if you wish that You Make your idea a reality product, Please
                come to Join.
              </Text>
            </View>

            <View style={[styles.normal, { flex: 1 }]}>
              <a></a>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    width: 120,
                    height: 50,
                    backgroundColor: "red",
                    borderRadius: "10px",
                  },
                ]}
                onPress={() => Linking.openURL("https://www.youtube.com/")}
              >
                <Text style={{ fontSize: 25, color: "white" }}>▶</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.normal, { flex: 2.5 }]}></View>
          </ImageBackground>
        </View>
        <View style={[styles.normal, { flex: 3, backgroundColor: "#1a1a1a" }]}>
          <View style={styles.normal}>
            <Text style={styles.font_l}>
              누구나 아이디어를 실현하는 방법은 다릅니다.
            </Text>
            <Text style={styles.font_s}>
              다양한 아이디어를 기반으로한 철저한 분석과 디자인 Proposal을
              기반으로 프로젝트를 만들어 드립니다.
            </Text>
          </View>
          <View style={styles.normal}>
            <Text style={styles.font_l}>하지만 결과물은 다릅니다.</Text>
            <Text style={styles.font_s}>
              처음 기획한 모양과 모습으로 결과물을 얻을수 있습니다. 여러분의
              의지와 노력만 있다면...
            </Text>
          </View>
          <View style={styles.normal}>
            <Text style={styles.font_l}>
              늦지 않았습니다. 저희 TLV가 함께 합니다.
            </Text>
            <Text style={styles.font_s}>
              언제 어디서나 연락하세요~! 그럼 저희가 함께 하겠습니다.
            </Text>
            <Text style={styles.font_s}>
              새로운 디자인과 새로운 형식의 접근으로 여러분의 아이디어
              실현하겠습니다.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {/* ----- content2 포트폴리오 ----- */}
        <View style={[styles.normal, {}]}>
          {/* 제목부분 */}
          <View style={[styles.normal, { flex: 3 }]}>
            <Text style={[styles.font_l, { color: "#0d0033" }]}>
              최근 포트폴리오
            </Text>
            <Text style={[styles.font_s, {}]}>WHAT WE WORK</Text>
          </View>

          {/* 포트폴리오 주제 탭 부분 */}
          <View style={[styles.normal, { paddingBottom: 50 }]}>
            <View
              style={[
                {
                  width: 800,
                  height: 70,
                  flexDirection: "row",
                },
              ]}
            >
              <TouchableOpacity
                style={[styles.normal, styles.button, { margin: 10 }]}
              >
                <Text style={[styles.font_s, { color: "white" }]}>개발</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.normal, styles.button, { margin: 10 }]}
              >
                <Text style={[styles.font_s, { color: "white" }]}>제작</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.normal, styles.button, { margin: 10 }]}
              >
                <Text style={[styles.font_s, { color: "white" }]}>교육</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.normal, styles.button, { margin: 10 }]}
              >
                <Text style={[styles.font_s, { color: "white" }]}>인증</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*포트폴리오 사진 세 장 넣을 부분*/}
          <View
            style={[
              styles.box,
              {
                flex: 5,
                flexDirection: "row",
              },
            ]}
          >
            {/*사진1*/}
            <TouchableOpacity style={[styles.normal, styles.shadow]}>
              <View style={[styles.fullbox, { flex: 2 }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={(styles.image, styles.button, styles.fullbox)}
                ></ImageBackground>
              </View>

              <View
                style={[styles.fullbox, { flex: 1, backgroundColor: "white" }]}
              ></View>
            </TouchableOpacity>

            <View style={{ flex: 0.1 }}> </View>

            {/*사진2*/}
            <TouchableOpacity style={[styles.normal, styles.shadow]}>
              <View style={[styles.fullbox, { flex: 2 }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={(styles.image, styles.button, styles.fullbox)}
                ></ImageBackground>
              </View>

              <View
                style={[styles.fullbox, { flex: 1, backgroundColor: "white" }]}
              ></View>
            </TouchableOpacity>

            <View style={{ flex: 0.1 }}> </View>

            {/*사진3*/}
            <TouchableOpacity style={[styles.normal, styles.shadow]}>
              <View style={[styles.fullbox, { flex: 2 }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={(styles.image, styles.button, styles.fullbox)}
                ></ImageBackground>
              </View>

              <View
                style={[styles.fullbox, { flex: 1, backgroundColor: "white" }]}
              ></View>
            </TouchableOpacity>
          </View>

          {/*더보기 버튼 넣을 부분*/}
          <View style={[styles.normal, { flex: 2 }]}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  justifyContent: "center",
                  alignItems: "center",
                  width: 200,
                  height: 50,
                  backgroundColor: "#0d0033",
                  borderRadius: "20px",
                },
              ]}
            >
              <Text style={{ fontSize: 15, color: "white" }}>
                포트폴리오 더보기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ----- content1 3가지 이유 ----- */}
        <View style={[{ flex: 1 }]}>
          <ImageBackground
            source={require("./images/main/trust.png")}
            style={[
              styles.image,
              { flex: 1, justifyContent: "center", alignItems: "center" },
            ]}
          >
            {/* 제목부분 */}
            <View style={[styles.normal, { flex: 2 }]}>
              <Text style={[styles.font_l, { fontSize: 50, color: "white" }]}>
                믿을 수 있는 3가지 이유
              </Text>
              <Text style={[styles.font_s, { color: "white" }]}>
                클라이언트가 뽑은 TLV의 장점!
              </Text>
            </View>

            {/*세 가지 이유 넣을 부분*/}
            <View style={[styles.box, { flexDirection: "row", flex: 1 }]}>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.font_m, { color: "white" }]}>
                  <Text
                    style={[
                      { fontSize: 80, fontWeight: "bold", color: "#4dd2ff" },
                    ]}
                  >
                    01
                  </Text>
                  빠른 절차 진행
                </Text>

                <Text style={[styles.font_s, { color: "white" }]}>
                  프로젝트 등록 후 3시간 이내 연락을 통한 견적 {"\n"}및 미팅
                  일정 조율
                </Text>
              </View>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.font_m]}>
                  <Text
                    style={[
                      { fontSize: 80, fontWeight: "bold", color: "#4dd2ff" },
                    ]}
                  >
                    02
                  </Text>
                  투명한 견적 산출
                </Text>
                <Text style={[styles.font_s, { color: "white" }]}>
                  항목별 정해진 단가 책정으로 고무줄 같지 않은 {"\n"}투명한 견적
                  제공
                </Text>
              </View>
              <View style={[{ flex: 1 }]}>
                <Text style={[styles.font_m, { color: "white" }]}>
                  <Text
                    style={[
                      { fontSize: 80, fontWeight: "bold", color: "#4dd2ff" },
                    ]}
                  >
                    03
                  </Text>{" "}
                  전담 매니지먼트
                </Text>
                <Text style={[styles.font_s, { color: "white" }]}>
                  프로젝트별 전담 개발 매니저를 통해서 신속 정확성{"\n"} 있는
                  개발이 가능
                </Text>
              </View>
            </View>

            {/*공백*/}
            <View style={{ flex: 2 }}></View>
          </ImageBackground>
        </View>

        {/* ----- content3 한눈에 보는 제작 의뢰 과정 ----- */}
        <View style={[styles.normal, { backgroundColor: "#f2f2f2" }]}>
          {/*제목부분*/}
          <View style={[styles.normal, styles.box, { flex: 2.5 }]}>
            <Text style={[styles.font_l, { color: "#0d0033" }]}>
              시제품 제작 의뢰 과정
            </Text>
            <Text style={[styles.font_s, { color: "grey" }]}>한눈에 보는</Text>
          </View>

          {/*제작 의뢰 단계 넣을 부분*/}
          <View style={[styles.box, { flex: 4, flexDirection: "row" }]}>
            <View style={[styles.shadow, { flex: 1, margin: 10 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_1.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View
                style={[
                  styles.normal,
                  { borderWidth: 1, borderColor: "#d9d9d9" },
                ]}
              >
                <Text
                  style={[
                    styles.font_m,
                    { fontSize: 25, fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  프로젝트 의뢰
                </Text>
              </View>
            </View>
            <View style={[styles.shadow, { flex: 1, margin: 10 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_2.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View
                style={[
                  styles.normal,
                  {
                    borderWidth: 1,
                    borderColor: "#d9d9d9",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.font_m,
                    { fontSize: 25, fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  상담 진행
                </Text>
              </View>
            </View>
            <View style={[styles.shadow, { flex: 1, margin: 10 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_3.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View
                style={[
                  styles.normal,
                  {
                    borderWidth: 1,
                    borderColor: "#d9d9d9",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.font_m,
                    { fontSize: 25, fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  견적서 발송
                </Text>
              </View>
            </View>
            <View style={[styles.shadow, { flex: 1, margin: 10 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_4.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View
                style={[
                  styles.normal,
                  {
                    borderWidth: 1,
                    borderColor: "#d9d9d9",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.font_m,
                    { fontSize: 25, fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  개발 사양 확인
                </Text>
              </View>
            </View>
            <View style={[styles.shadow, { flex: 1, margin: 10 }]}>
              <View style={[{ flex: 2, backgroundColor: "white" }]}>
                <ImageBackground
                  source={require("./images/main/process_5.png")}
                  style={styles.image}
                ></ImageBackground>
              </View>
              <View
                style={[
                  styles.normal,
                  {
                    borderWidth: 1,
                    borderColor: "#d9d9d9",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.font_m,
                    { fontSize: 25, fontWeight: "bold", color: "#1a1a1a" },
                  ]}
                >
                  계약 체결
                </Text>
              </View>
            </View>
          </View>

          {/*공백*/}
          <View style={[styles.normal, { flex: 1.5 }]}></View>
        </View>

        {/* ----- content4 클라이언트 ----- */}
        <View style={[styles.normal, { backgroundColor: "white" }]}>
          <View style={[styles.box, {}]}>
            <View style={[{ flex: 1 }]}>
              <View style={[styles.normal, { flex: 2 }]}>
                <Text style={[styles.font_l, { color: "#0d0033" }]}>
                  CLIENTS
                </Text>
                <Text style={[styles.font_s, {}]}>WHAT WE WORK</Text>
              </View>
              <View style={[{ flex: 4 }]}>
                <ImageBackground
                  source={require("./images/main/total2.png")}
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
              <View style={[styles.normal, { flex: 1 }]}>
                <Text style={styles.font_s}></Text>
              </View>
            </View>
          </View>
        </View>

        {/* ----- content5 contectUs ----- */}
        <View style={[{ flex: 1 }]}>
          <View style={[, { flex: 10 }]}>
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
                        color: "#0d0033",
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
                <Text style={[styles.font_l, { color: "#0d0033" }]}>
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
                  <Text style={styles.font_s}>
                    강원도 원주시 흥업면 연세대길 1, 103호
                  </Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>
                    PHONE NUMBER
                  </Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>033-761-7333</Text>
                </View>
                <View style={[styles.normal, { backgroundColor: "white" }]}>
                  <Text style={[styles.font_m, { color: "grey" }]}>EMAIL</Text>
                  <Text style={styles.font_s}> </Text>
                  <Text style={styles.font_s}>office@vectrow.com</Text>
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
    height: "6500px",
    backgroundColor: "white",
  },

  title: {
    flex: 2,
    backgroundColor: "#0d0033",
  },
  //flex-start, center, flex-end, stretch, baseline

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
