import { Button } from "@react-navigation/elements";
import { StyleSheet, Text, View , } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>The Begginning of mobile application development</Text>
      <View style={styles.buttonBox}>
        <Button>Go to docs</Button>
        <Button>Explore Cources</Button>
        <Link href={"/docs"}>Go to docs</Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center"
  },
   buttonBox: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 3
  }
})
