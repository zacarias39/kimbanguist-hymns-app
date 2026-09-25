
import { View, Text } from "react-native";
import Logo from "./Logo";

export default function HeaderCard({ title }: any) {
    return (
        <View className="flex-1 flex-row items-center justify-between bg-red-400 h-full w-40">
            <Logo title={ title } />
            <View className="flex flex-row">
                <Text>A</Text>
                <Text>B</Text>
                <Text>C</Text>
            </View>
        </View>
    )
};