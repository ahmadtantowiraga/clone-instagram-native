import React, { useState } from "react";
import { ScrollView, RefreshControl, Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = (props) => {
  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
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
        <Text>Header</Text>
      </View>
      <View style={styles.container}>
        <Text>Story</Text>
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
      backgroundColor: 'white',
      padding: 10,
      margin: 1,
    },
  });
  