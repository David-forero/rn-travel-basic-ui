import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Home = ({navigation}) => {
  const image = {
    uri: "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  const recentImage = {
    uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27",
      },
      title: "Switzerland",
      key: "1",
    },
    {
      image: {
        uri: "https://images.wallpaperscraft.com/image/single/mountains_winter_man_travel_118817_800x1200.jpg",
      },
      title: "New Zeland",
      key: "2",
    },
    {
      image: {
        uri: "https://images.wallpaperscraft.com/image/single/man_mountains_clouds_travel_118031_800x1200.jpg",
      },
      title: "Rome",
      key: "3",
    },
    {
      image: {
        uri: "https://images.wallpaperscraft.com/image/single/hills_trees_landscape_139611_938x1668.jpg",
      },
      title: "Tahiti",
      key: "4",
    },
  ]);

  const goToPost = () =>{
      navigation.navigate('Post');
  }

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 270 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.DarkOverlay}></View>

          <View style={styles.searchContainer}>
            <Text style={styles.UserGreet}>Hey David,</Text>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Search Destination"
              placeholderTextColor="#666"
            ></TextInput>

            <Feather
              name="search"
              size={22}
              color="#666"
              style={{ position: "absolute", top: 30, right: 60, opacity: 0.6 }}
            />
          </View>

          <Feather
            name="menu"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, left: 16, opacity: 0.6 }}
          />
          <Feather
            name="bell"
            size={22}
            color="#fff"
            style={{ position: "absolute", top: 40, right: 30, opacity: 0.6 }}
          />
        </ImageBackground>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Top Treading</Text>
      </View>

      <FlatList
        data={gallery}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
              <TouchableOpacity
                onPress={goToPost}
              >
                <Image
                  source={item.image}
                  style={{
                    width: 150,
                    marginRight: 8,
                    height: 250,
                    borderRadius: 10,
                  }}
                />
                <View style={styles.ImageOverlay}></View>
                <Feather
                  name="map-pin"
                  size={16}
                  color="white"
                  style={styles.imageLocationIcon}
                />
                <Text style={styles.ImageText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recently Viewed</Text>

        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#ff6200" }}>
          View All
        </Text>
      </View>

      <View style={{marginBottom: 60}}>
        <Image
          source={recentImage}
          style={{
            width: "92%",
            height: 250,
            borderRadius: 10,
            alignSelf: "center",
          }}
        />

        <View style={{ position: "absolute", bottom: 10, padding: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="map-pin"
              style={{ marginLeft: 10, position: "relative", top: 4 }}
              size={20}
              color="white"
            />
            <Text
              style={{
                fontSize: 22,
                color: "white",
                fontWeight: "normal",
                marginBottom: 10,
                marginHorizontal: 10,
              }}
            >
              Veice
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: 14, color: "white", fontWeight: "normal", marginBottom: 4, opacity: 0.9, marginLeft: 16 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, quia.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.5,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.5,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  ImageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});
