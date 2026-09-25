import { Text, Pressable } from "react-native";
import { SvgProps } from "react-native-svg";
import { Stack } from "expo-router";
import HeaderCard from "./HeaderCard";

export default function Header({ title }: any) {
  return (
    <Stack.Screen options={{
       headerTitle: () => <HeaderCard title={ title } />,
       headerTitleAlign: 'center',
       headerStyle: {
        //backgroundColor: "#0A1612",
        backgroundColor: "#FFFFFF",
       },
    }} />
  );
}