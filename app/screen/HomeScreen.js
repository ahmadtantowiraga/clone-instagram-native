import React, { useState } from "react";
import {
  ScrollView,
  RefreshControl,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

const DATA = [
    {
      id: "1",
      name: "Your Story",
      image:"https://cdn.idntimes.com/content-images/post/20170616/17933965-728145744053960-719716440113938432-n-e72cb492e2a5309549a698b1478a6674_600x400.jpg"
    },
    {
      id: "2",
      name: "achmad_musfiul",
      image:"https://cdnwpseller.gramedia.com/wp-content/uploads/2022/05/07090859/877766976.jpg"
    },
    {
      id: "3",
      name: "rifqyram",
      image:"https://img.inews.co.id/media/600/files/inews_new/2022/02/14/jefri_nichol.jpg"
    },
    {
      id: "4",
      name: "jojohansa",
      image:"https://img.inews.co.id/media/300https://img.inews.co.id/media/822/files/inews_new/2021/12/14/rizky_nazar_fakta.jpg"
    },
    {
      id: "5",
      name: "hafid",
      image:"https://cdnwpseller.gramedia.com/wp-content/uploads/2022/05/07090855/096593600_1579746363-3P7A7141-225x300.jpg"
    },
    {
        id: "6",
        name: "leeryakbar",
        image:""
      },
      {
        id: "7",
        name: "_amandaAisya",
        image:"https://i.pinimg.com/236x/ed/9c/88/ed9c88cde2dc50187f9a606d45230e7f.jpg"
      },
  ];

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
        <View style={{ flexDirection: "row", justifyContent:'space-between', alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../screen/images/instagram1.png")}
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
            horizontal
            data={akuns}
            keyExtractor={(item) => item.id}
            renderItem={(item) =>{
                return (
                    <View>
                        
                    </View>
                )
            }}
        />
      </View>

      <View style={styles.container}>
        <Text>Postingan</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    margin: 1,
  },
  header: {
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: "center",
        width: 75
  }
});
