import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const PostDetails = ({ navigation }) => {
  const image = {
    uri: "https://images.wallpaperscraft.com/image/single/man_mountains_clouds_travel_118031_800x1200.jpg",
  };

  const goBack = () =>{
      navigation.goBack()
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
      >
        <Text style={styles.Tagline}>Discover Switzerland</Text>
        <Text style={styles.Placename}>
          Explore the scenic beauty of Switzerland
        </Text>

        <TouchableOpacity
        onPress={goBack}
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            backgroundColor: "#ff6200",
            borderRadius: 40,
            padding: 10,
          }}
        >
          <Feather name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            top: 40,
            backgroundColor: "#ff6200",
            borderRadius: 40,
            padding: 10,
          }}
        >
          <Feather name="heart" size={22} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity style={styles.BookTicketBtn}>
        <Text style={styles.bookTicketText}>Book Now</Text>
      </TouchableOpacity>

      <ScrollView>
        <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
          About the place
        </Text>

        <Text style={{padding: 14, fontSize: 14, fontWeight: "normal", opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consectetur labore suscipit debitis natus corporis facere officiis doloremque itaque? Non doloremque ipsum omnis perferendis debitis iusto, iure laborum corporis ducimus voluptatum, sed sint consectetur sunt ratione, accusantium voluptatibus eveniet exercitationem?
        </Text>

        <Text style={{padding: 14, fontSize: 14, fontWeight: "normal", opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consectetur labore suscipit debitis natus corporis facere officiis doloremque itaque? Non doloremque ipsum omnis perferendis debitis iusto, iure laborum corporis ducimus voluptatum, sed sint consectetur sunt ratione, accusantium voluptatibus eveniet exercitationem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consectetur labore suscipit debitis natus corporis facere officiis doloremque itaque? Non doloremque ipsum omnis perferendis debitis iusto, iure laborum corporis ducimus voluptatum, sed sint consectetur sunt ratione, accusantium voluptatibus eveniet exercitationem?
        </Text>

        <Text style={{padding: 14, fontSize: 14, fontWeight: "normal", opacity: 0.3, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consectetur labore suscipit debitis natus corporis facere officiis doloremque itaque? Non doloremque ipsum omnis perferendis debitis iusto
        </Text>
      </ScrollView>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  image: {
    height: 380,
    justifyContent: "flex-end",
  },
  Tagline: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  Placename: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  BookTicketBtn: {
    position: "absolute",
    right: 12,
    top: 350,
    backgroundColor: "#ff6200",
    padding: 16,
    borderRadius: 40,
  },
  bookTicketText: {
    color: "white",
    fontSize: 14,
  },
});
