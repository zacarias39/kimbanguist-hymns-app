
import { View, Text, Pressable } from "react-native";
import opt from '@/assets/opt.svg'
import user from '@/assets/user.svg'
import SvgRender from "./SvgRender";
import Logo from "./Logo";

export default function HeaderCard({ title }: any) {
    return (
        <View className="flex flex-row items-center justify-between  h-full w-full p-2">
            <Logo title={ title } />
            <View className="flex flex-row justify-around items-center">
                <Pressable className="bg-[#142720] py-2 px-3 m-1 rounded-3xl w-19 h-12 flex items-center justify-center">
                    <Text className="text-[#d8e6df]">EN / ES</Text>
                </Pressable>
                <Pressable className="w-14 h-14 rounded-full m-1 bg-[#142720] flex items-center justify-center shadow-inner">
                    <SvgRender Icon={ opt } color="#d8e6df" size={20} />
                </Pressable>
                <Pressable className="w-12 h-12 rounded-full m-1 bg-[#142720] flex items-center justify-center shadow-inner">
                    <SvgRender Icon={ user } color="#d8e6df" size={20} />
                </Pressable>
            </View>
        </View>
    )
};