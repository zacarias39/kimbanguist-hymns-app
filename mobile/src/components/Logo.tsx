import { Text, View } from "react-native";
import SvgRender from "./SvgRender";
import Icon from '@/assets/Icon.svg'

export default function Logo({ title }: any) {
    return (
        <View className="flex flex-row items-center bg-yellow-400">
            <SvgRender Icon={ Icon } color="#FFFFFF" size={20} />
            <View>
                <Text>Canticle</Text>
                <Text>{ title }</Text>
            </View>
        </View>
    )
}