import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Navigation() {
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
            <Link to="/" className="button">
              <Image
                style={styles.tinyLogo}
                source={require("../images/main/logo.png")}
              />
            </Link>
          </TouchableOpacity>

          <Link to="/" className="button" style={{ textDecoration: "none" }}>
            <Text style={styles.font_s}>Laboratory Technician Vectrow</Text>
          </Link>

          <View style={[{ flex: 0.5 }]}></View>
        </View>
        <View style={[styles.normal, { flex: 2, flexDirection: "row" }]}>
          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Link
              to="/indroduce"
              className="button"
              style={{ textDecoration: "none" }}
            >
              소개
            </Link>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Link
              to="/portfolio"
              className="button"
              style={{ textDecoration: "none" }}
            >
              포트폴리오
            </Link>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Link
              to="/request"
              className="button"
              style={{ textDecoration: "none" }}
            >
              제작의뢰
            </Link>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Link
              to="/map"
              className="button"
              style={{ textDecoration: "none" }}
            >
              찾아오는길
            </Link>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.normal,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <Link
              to="/faq"
              className="button"
              style={{ textDecoration: "none" }}
            >
              FAQ
            </Link>
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
  headerView: {
    width: "100%",
    backgroundColor: "#65ECD1",
    flexDirection: "row",
  },
  headerText: {
    marginBottom: "30px",
    marginTop: "30px",
    padding: "20px",
  },
  tmp: {
    width: "30",
  },
});
