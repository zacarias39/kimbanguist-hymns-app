import { Text, View } from "react-native";
import SvgRender from "./SvgRender";
import Icon from '@/assets/Icon.svg'

export default function Logo({ title }: any) {
    return (
        <View className="flex flex-row items-center">
            <View className="w-10 h-9 rounded-lg m-1 bg-[#142720] flex items-center justify-center shadow-inner">
                <SvgRender Icon={ Icon } color="#d8e6df" size={22} />
            </View>
            <View className="ml-2">
                <Text className="text-[#d8e6df] font-bold text-xl">Canticle</Text>
                <Text className="text-[#d8e6df]">{ title }</Text>
            </View>
        </View>
    )
}