import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/*header*/}
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
            <View style={[styles.normal, { flex: 0.5 }]}></View>

            <TouchableOpacity
              style={[styles.normal, styles.fullbox, { flexDirection: "row" }]}
            >
              <View
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
              </View>

              <View style={[{ flex: 1, justifyContent: "center" }]}>
                <Text style={styles.font_s}>Laboratory Technician Vectrow</Text>
              </View>
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

      {/*--------------------------------------------------title----------------------------------------------*/}
      <View style={styles.title}>
        <View style={[{ flex: 5 }]}>
          <ImageBackground
            source={require("./images/main/process_2.png")}
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
                  의뢰 신청{" "}
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
                  <Text style={[styles.font_s, {}]}>home</Text>
                  <Text style={[styles.font_s, {}]}> {">"} </Text>
                  <Text style={[styles.font_s, {}]}>제작의뢰</Text>
                  <Text style={[styles.font_s, {}]}> {">"} </Text>
                  <Text style={[styles.font_s, { color: "#4dd2ff" }]}>
                    의뢰 신청
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.normal]}></View>
          </ImageBackground>
        </View>
      </View>

      {/*--------------------------------------------content----------------------------------------------*/}
      <View style={(styles.content, styles.normal)}>
        {/*개인정보입력*/}
        <View style={[styles.normal, styles.box, { flex: 0.7 }]}>
          <View style={[styles.normal, styles.fullbox, {}]}>
            <Text style={[styles.font_m, { color: "black" }]}>
              개인정보입력
            </Text>
          </View>
          <View style={[styles.normal, styles.box, {}]}>
            <View
              style={[styles.normal, styles.fullbox, { flexDirection: "row" }]}
            >
              <TextInput
                style={[
                  styles.normal,
                  styles.normalborder,
                  {
                    height: 40,
                    margin: 10,
                  },
                ]}
                defaultValue=" 이름"
              />
              <TextInput
                style={[
                  styles.normal,
                  styles.normalborder,
                  {
                    height: 40,
                    margin: 10,
                  },
                ]}
                defaultValue=" 전화번호"
              />
              <TextInput
                style={[
                  styles.normal,
                  styles.normalborder,
                  {
                    height: 40,
                    margin: 10,
                  },
                ]}
                type="password"
                defaultValue=" 비밀번호"
              />
            </View>
            <View
              style={[styles.normal, styles.fullbox, { flexDirection: "row" }]}
            >
              <TextInput
                style={[
                  styles.normal,
                  styles.normalborder,
                  {
                    height: 40,
                    margin: 10,
                  },
                ]}
                defaultValue=" 이메일"
              />
              <TextInput
                style={[
                  styles.normal,
                  styles.normalborder,
                  {
                    height: 40,
                    margin: 10,
                  },
                ]}
                defaultValue=" 소속 및 학교명"
              />
            </View>
          </View>
        </View>

        {/*개인정보동의*/}
        <View style={[styles.normal, styles.box, { flex: 2, margin: 10 }]}>
          <View style={[{ flex: 6 }]}>
            <View
              style={[
                styles.normal,
                styles.box,
                styles.normalborder,
                { borderBottomWidth: 0 },
              ]}
            >
              <Text> 개인정보동의 </Text>
            </View>
            <View
              style={[
                styles.normal,
                styles.normalborder,
                {
                  flex: 15,
                },
              ]}
            ></View>
          </View>
          <View
            style={[
              styles.normal,
              styles.box,
              { flex: 1, flexDirection: "row" },
            ]}
          >
            <TouchableOpacity
              type="checkbox"
              style={[
                styles.fullbox,
                styles.normalborder,
                { width: 20, height: 20, backgroundColor: "white" },
              ]}
            ></TouchableOpacity>
            <Text> 개인정보 수집 및 이용 내용을 확인하였으며, 동의합니다.</Text>
          </View>
        </View>

        <View style={[styles.normal, styles.fullbox, { flex: 0.5 }]}>
          <ImageBackground
            source={require("./images/main/down.png")}
            style={[{ width: 50, height: 50 }]}
          ></ImageBackground>
        </View>

        {/*개발분류선택*/}
        <View style={[styles.normal, styles.box, { flex: 0.5, margin: 10 }]}>
          <View
            style={[
              styles.normal,
              styles.fullbox,
              {
                flex: 2,
                backgroundColor: "white",
              },
            ]}
          >
            <Text style={[styles.font_m, { color: "black" }]}>
              개발분류선택
            </Text>
          </View>
          <View style={[styles.normal, styles.box, { flexDirection: "row" }]}>
            <TouchableOpacity
              style={[styles.fullbox, styles.button_s]}
            ></TouchableOpacity>
            <Text> 시제품</Text>
            <TouchableOpacity
              style={[styles.fullbox, styles.button_s, { marginLeft: 20 }]}
            ></TouchableOpacity>
            <Text>양산품</Text>
            <TouchableOpacity
              style={[styles.fullbox, styles.button_s, { marginLeft: 20 }]}
            ></TouchableOpacity>
            <Text>지그</Text>
            <TouchableOpacity
              style={[styles.fullbox, styles.button_s, { marginLeft: 20 }]}
            ></TouchableOpacity>
            <Text> 교육</Text>
            <TouchableOpacity
              style={[styles.fullbox, styles.button_s, { marginLeft: 20 }]}
            ></TouchableOpacity>
            <Text> 인증</Text>
          </View>
        </View>

        <View style={[styles.normal, styles.fullbox, { flex: 0.5 }]}>
          <ImageBackground
            source={require("./images/main/down.png")}
            style={[{ width: 50, height: 50 }]}
          ></ImageBackground>
        </View>

        {/*항목선택*/}
        <View style={[styles.normal, styles.fullbox, { flex: 3 }]}>
          <View style={[styles.normal, styles.box, { margin: 10 }]}>
            <View
              style={[styles.normal, styles.fullbox, { marginBottom: -50 }]}
            >
              <Text style={[styles.font_m, { color: "black" }]}>항목선택</Text>
            </View>
            {/*개발항목*/}
            <View
              style={[
                styles.normal,
                styles.fullbox,
                {
                  marginBottom: -50,
                  backgroundColor: "white",
                },
              ]}
            >
              <Text style={[styles.font_m, { fontSize: 25, color: "black" }]}>
                개발 항목
              </Text>
            </View>
            <View style={[styles.normal, styles.box, { flexDirection: "row" }]}>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>기구 디자인</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>기구 설계</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>렌더링</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>회로개발</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.fullbox, styles.choicebt, { marginRight: 30 }]}
              >
                <Text>S/W개발</Text>
              </TouchableOpacity>
            </View>

            {/*제작항목*/}
            <View
              style={[
                styles.normal,
                styles.fullbox,
                {
                  marginBottom: -50,
                  backgroundColor: "white",
                },
              ]}
            >
              <Text style={[styles.font_m, { fontSize: 25, color: "black" }]}>
                제작 항목
              </Text>
            </View>
            <View style={[styles.normal, styles.box, { flexDirection: "row" }]}>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>3D 프린팅</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>목업</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>금형</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.fullbox, styles.choicebt, {}]}>
                <Text>교육</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.fullbox, styles.choicebt, { marginRight: 30 }]}
              >
                <Text>인증</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.normal, styles.fullbox, { flex: 0.2 }]}>
            <ImageBackground
              source={require("./images/main/down.png")}
              style={[{ width: 50, height: 50 }]}
            ></ImageBackground>
          </View>
        </View>

        {/*개발내용입력*/}
        <View style={[styles.normal, styles.box, { flex: 2, margin: 10 }]}>
          <View
            style={[
              styles.normal,
              styles.fullbox,
              { flex: 2, marginBottom: 20, backgroundColor: "white" },
            ]}
          >
            <Text style={[styles.font_m, { color: "black" }]}>개발내용</Text>
          </View>
          <View
            style={[
              styles.fullbox,
              styles.normalborder,
              { flex: 1.2, justifyContent: "center" },
            ]}
          >
            <Text style={{ color: "black" }}>아이디어개요</Text>
          </View>
          <View
            style={[styles.box, styles.normalborder, { flex: 8, margin: 10 }]}
          >
            <Text>요구 사항 및 개발 내용</Text>
          </View>
        </View>

        <View style={[styles.normal, styles.fullbox, { flex: 0.5 }]}>
          <ImageBackground
            source={require("./images/main/down.png")}
            style={[{ width: 50, height: 50 }]}
          ></ImageBackground>
        </View>

        {/*예산*/}
        <View style={[styles.normal, styles.box, { flex: 0.8, margin: 10 }]}>
          <View style={[styles.normal, {}]}>
            <Text style={[styles.font_m, { color: "black" }]}>예산</Text>
          </View>
          <View
            style={[
              styles.normal,
              styles.fullbox,
              { flex: 2, width: 800, flexDirection: "row", marginBottom: 30 },
            ]}
          >
            <View style={[styles.normal, {}]}>
              <TouchableOpacity
                style={[styles.button, { margin: 10 }]}
              ></TouchableOpacity>
              <Text style={[styles.font_s]}>1백만원이하</Text>
            </View>
            <View style={[styles.normal]}>
              <TouchableOpacity
                style={[styles.button, { margin: 10 }]}
              ></TouchableOpacity>
              <Text style={[styles.font_s]}>1백만원대</Text>
            </View>
            <View style={[styles.normal]}>
              <TouchableOpacity
                style={[styles.button, { margin: 10 }]}
              ></TouchableOpacity>
              <Text style={[styles.font_s]}>1~5백만원</Text>
            </View>
            <View style={[styles.normal]}>
              <TouchableOpacity
                style={[styles.button, { margin: 10 }]}
              ></TouchableOpacity>
              <Text style={[styles.font_s]}>5백~1천만원</Text>
            </View>
            <View style={[styles.normal]}>
              <TouchableOpacity
                style={[styles.button, { margin: 10 }]}
              ></TouchableOpacity>
              <Text style={[styles.font_s]}>5천만원이상</Text>
            </View>
            <View style={[styles.normal]}>
              <TouchableOpacity
                style={[styles.button, { margin: 10 }]}
              ></TouchableOpacity>
              <Text style={[styles.font_s]}>기타</Text>
            </View>
          </View>
        </View>

        <View style={[styles.normal, styles.fullbox, { flex: 0.5 }]}>
          <ImageBackground
            source={require("./images/main/down.png")}
            style={[{ width: 50, height: 50 }]}
          ></ImageBackground>
        </View>

        <View style={[styles.normal, styles.box, { margin: 10 }]}>
          <View style={[styles.normal, { marginTop: 30, marginBottom: 20 }]}>
            <Text style={[styles.font_m, { color: "black" }]}>
              제작 완료 희망일
            </Text>
          </View>
          <View
            style={[
              styles.normal,
              {
                flex: 2,
                flexDirection: "row",
                marginTop: 20,
                marginBottom: 20,
                width: 400,
              },
            ]}
          >
            <TouchableOpacity
              style={[styles.fullbox, styles.datebt, {}]}
            ></TouchableOpacity>
            <View style={[{ flex: 1 }]}>
              <Text
                style={[{ fontSize: 18, fontweight: "bold", color: "black" }]}
              >
                년
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.fullbox, styles.datebt, {}]}
            ></TouchableOpacity>
            <View style={[{ flex: 1 }]}>
              <Text
                style={[{ fontSize: 18, fontweight: "bold", color: "black" }]}
              >
                월
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.fullbox, styles.datebt, {}]}
            ></TouchableOpacity>
            <View style={[{ flex: 1 }]}>
              <Text
                style={[{ fontSize: 18, fontweight: "bold", color: "black" }]}
              >
                일
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.normal, styles.fullbox, { flex: 0.5 }]}>
          <ImageBackground
            source={require("./images/main/down.png")}
            style={[{ width: 50, height: 50 }]}
          ></ImageBackground>
        </View>

        {/*첨부파일업로드*/}
        <View style={[styles.normal, styles.box, { flex: 2, margin: 10 }]}>
          <View style={[styles.normal, {}]}>
            <Text style={[styles.font_m, { color: "black" }]}>
              첨부파일 업로드
            </Text>
          </View>
          <View
            style={[styles.box, styles.addfileborder, { flex: 8, margin: 10 }]}
          >
            <View style={[styles.normal, styles.fullbox, { flex: 6 }]}>
              <Text>
                도면, 모델링 파일 또는 참고 자료를 여기에 드롭하거나 파일 추가
                버튼을 이용해 업로드해주세요. (zip, 7z, dwg, stl, 3dm, jpeg,
                gif, png, pdf, pptx, hwp 등)
              </Text>
            </View>
            <View
              style={[
                styles.normal,
                styles.fullbox,
                styles.shadow,
                { flexDirection: "row" },
              ]}
            >
              <View style={[styles.normal, styles.fullbox, { flex: 9 }]}></View>
              <TouchableOpacity
                style={[
                  styles.normal,
                  styles.fullbox,
                  { backgroundColor: "#0d0033" },
                ]}
              >
                <Text
                  style={[
                    styles.font_s,
                    { color: "white", fontWeight: "bold" },
                  ]}
                >
                  파일추가
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[styles.normal, styles.fullbox, { flex: 0.5 }]}>
          <ImageBackground
            source={require("./images/main/down.png")}
            style={[{ width: 50, height: 50 }]}
          ></ImageBackground>
        </View>

        <View style={[styles.normal, { flex: 0.5 }]}>
          <TouchableOpacity
            style={[
              styles.submitbt,
              { margin: 10, justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Text
              style={
                ([styles.font_s], { color: "#0d0033", fontWeight: "bold" })
              }
            >
              제 작 의 뢰 하 기
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <View
          style={{ height: "100%", width: "70%", backgroundColor: "#1a1a1a" }}
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
            <Text style={[styles.font_s, {}]}>
              LABORATORY TECHNICIAN VECTROW
            </Text>
          </View>
          <View style={[{ flex: 3 }]}>
            <View style={[{ flex: 1 }]}></View>
            <View style={[{ flex: 5, flexDirection: "row" }]}>
              <View
                style={[
                  {
                    flex: 1,
                    justifyContent: "center",
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
                    <Text style={styles.font_s}>유튜브</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "5500px",
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
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: "20px",
    borderColor: "lightgrey",
  },

  button_s: {
    backgroundColor: "white",
    width: 25,
    height: 25,
    borderWidth: "3px",
    borderRadius: "20px",
    borderColor: "lightgrey",
  },

  shadow: {
    shadowColor: "#000000", //그림자색
    shadowOpacity: 0.1, //그림자 투명도
    shadowOffset: { width: 0, height: -10 },
    shadowRadius: 20,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  submitbt: {
    borderColor: "#0d0033",
    backgroundColor: "none",
    width: 300,
    height: 50,
    borderColor: "#0d0033",
    borderStyle: "solid",
    borderWidth: "2px",
  },

  addfileborder: {
    borderColor: "lightgrey",
    backgroundColor: "white",
    borderStyle: "dashed",
    borderWidth: "3px",
  },

  normalborder: {
    borderColor: "lightgrey",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: "2px",
  },

  choicebt: {
    borderColor: "lightgrey",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "20px",
    width: 100,
    height: 100,
    marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  datebt: {
    flex: 2,
    borderColor: "lightgrey",
    backgroundColor: "white",
    borderStyle: "solid",
    borderBottomWidth: "2px",
    height: 40,
  },
});
