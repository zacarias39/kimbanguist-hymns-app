import Header from "@/components/Header";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Header title="Library" />
      <View style={styles.container} >
        <Text className="text-yellow-500">Hello World!</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
