import React, { useState } from "react";
import {
  ScrollView,
  RefreshControl,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FontAwesome5,
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    name: "tanto_wiahmad",
    image:
      "https://cdn.idntimes.com/content-images/post/20170616/17933965-728145744053960-719716440113938432-n-e72cb492e2a5309549a698b1478a6674_600x400.jpg",
  },
  {
    id: "2",
    name: "a_fiul",
    image:
      "https://cdnwpseller.gramedia.com/wp-content/uploads/2022/05/07090859/877766976.jpg",
  },
  {
    id: "3",
    name: "_amandaAisya",
    image:
      "https://i.pinimg.com/236x/ed/9c/88/ed9c88cde2dc50187f9a606d45230e7f.jpg",
  },
  {
    id: "4",
    name: "emil",
    image:
      "https://img.inews.co.id/media/300https://img.inews.co.id/media/822/files/inews_new/2021/12/14/rizky_nazar_fakta.jpg",
  },
  {
    id: "5",
    name: "hafid",
    image:
      "https://cdnwpseller.gramedia.com/wp-content/uploads/2022/05/07090855/096593600_1579746363-3P7A7141-225x300.jpg",
  },
  {
    id: "6",
    name: "leeryakbar",
    image:
      "https://cdn1-production-images-kly.akamaized.net/G-ZbJwZ-xdOv2lROgd_rPPk1yqo=/500x667/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3279631/original/056317800_1603790268-aliando3.jpg",
  },
  {
    id: "7",
    name: "ilham",
    image:
      "https://img.inews.co.id/media/600/files/inews_new/2022/02/14/jefri_nichol.jpg",
  },
];
const { width, height } = Dimensions.get("window");
const HomeScreen = (props) => {
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [akuns, setAkuns] = useState(DATA);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ paddingTop: insets.top, flex: 1 }}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{uri: "https://www.pngitem.com/pimgs/m/132-1327993_instagram-logo-word-png-transparent-png.png"}}
              style={{ width: 100, height: 30 }}
            />
          </View>
          <View style={styles.header}>
            <AntDesign name="hearto" size={30} color="black" />
            <FontAwesome5 name="facebook-messenger" size={30} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={akuns}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  style={styles.productImage}
                  source={{ uri: item.image }}
                />
                {item.id == 1 ? (
                  <View>
                    <View style={{ position: "absolute", right: 0, bottom: 0 }}>
                      <AntDesign name="pluscircle" size={24} color="blue" />
                    </View>
                  </View>
                ) : (
                  ""
                )}
                <Text style={{ alignSelf: "center", fontSize: 12 }}>
                  {item.id == 1 ? "Your Story" : item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.container2}>
        <FlatList
          data={akuns}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.productImage2}
                      source={{ uri: item.image }}
                    />
                    <Text style={{ marginHorizontal: 5 }}>{item.name}</Text>
                  </View>
                  <View style={{ marginRight: 5 }}>
                    <Entypo
                      name="dots-three-horizontal"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.productImage3}
                    source={{ uri: item.image }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 5,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign
                      name="hearto"
                      size={24}
                      color="black"
                      style={{ marginRight: 7 }}
                    />
                    <Ionicons
                      name="chatbubble-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 7 }}
                    />
                    <MaterialCommunityIcons
                      name="send-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 7 }}
                    />
                  </View>
                  <View>
                    <MaterialIcons
                      name="bookmark-border"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>
                <View>
                  <View style={{ margin: 5, marginBottom: 10, marginTop:0 }}>
                    <Text><Text style={{ fontWeight: "bold", marginRight: 5 }}>
                      {item.name}
                    </Text> Keren Abizzz inimah!!!! Aku Jomblo ini nomer aku : 087763346365!!! </Text>
                    <Text style={{fontSize : 13, marginTop: 5}}>
                        View all 1 comments
                    </Text>
                    <Text style={{fontSize : 13, marginTop: 5}}>
                        1 minute ago
                    </Text>
                  </View>
  
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    
  },
  container2: {
    backgroundColor: "white",
    margin: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 75,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
    borderWidth: 2,
    borderColor: "#e95950",
  },
  productImage2: {
    width: 40,
    height: 40,
    borderRadius: 30,
    margin: 5,
    borderWidth: 2,
    borderColor: "#e95950",
  },
  productImage3: {
    width: width,
    height: width,
  },
});
