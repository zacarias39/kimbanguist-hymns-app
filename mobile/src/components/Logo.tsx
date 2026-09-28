import { Text, View } from "react-native";
import SvgRender from "./SvgRender";
import Icon from '@/assets/Icon.svg'

export default function Logo({ title }: any) {
    return (
        <View className="flex flex-row items-center">
            <SvgRender Icon={ Icon } color="#d8e6df" size={22} />
            <View className="ml-2">
                <Text className=" text-[#d8e6df] font-bold">Canticle</Text>
                <Text className="text-[#d8e6df]">{ title }</Text>
            </View>
        </View>
    )
}