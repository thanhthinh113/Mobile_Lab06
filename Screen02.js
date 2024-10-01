import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const DATA = [
  {
    id: "1",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "2",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "3",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "4",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "5",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "6",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "7",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "8",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "9",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
  {
    id: "10",
    imageUSP: require("./image/chuyen.png"),
    name: "Cáp chuyển từ Cổng USB sang Ps2...",
    image: require("./image/start.png"),
    image1: require("./image/start1.png"),
    price: "69.900 đ",
    percent: "-39%",
  },
];

const Item = ({ obj }) => (
  <View style={styles.productContainer}>
    <Image style={styles.productImage} source={obj.imageUSP} />

    <Text style={styles.title}>{obj.name}</Text>

    <View style={styles.imageWrapper}>
      <Image source={obj.image} />
      <Image source={obj.image} />
      <Image source={obj.image} />
      <Image source={obj.image} />
      <Image source={obj.image1} />
    </View>
    <View style={styles.saleprice}>
      <Text style={styles.price}>{obj.price}</Text>
      <Text style={styles.percent}>{obj.percent}</Text>
    </View>
  </View>
);
const Screen02 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image source={require("./image/out.png")} />
          </View>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#999"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm sản phẩm..."
              placeholderTextColor="#999"
            />
          </View>
          <View>
            <Image source={require("./image/cart.png")} />
          </View>
          <Ionicons name="ellipsis-horizontal" size={24} color="white" />
        </View>
        <View style={styles.content}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item obj={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
        <View style={styles.header}>
          <View>
            <Image source={require("./image/group.png")} />
          </View>
          <View>
            <Image source={require("./image/home.png")} />
          </View>
          <View>
            <Image source={require("./image/back.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  headerText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    width: 200,
    height: 44,
  },

  content: {
    flex: 10,
  },

  productContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  imageWrapper: {
    flexDirection: "row",
    marginVertical: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  saleprice: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    paddingRight: 10,
  },

  percent: {
    fontSize: 14,
    color: "gray",
  },
});

export default Screen02;
