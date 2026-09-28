
import { View, Text } from "react-native";
//import opt from '@/assets/opt.svg'
//import user from '@/assets/user.svg'
import SvgRender from "./SvgRender";
import Logo from "./Logo";

export default function HeaderCard({ title }: any) {
    return (
        <View className="flex flex-row items-center justify-between  h-full w-full">
            <Logo title={ title } />
            <View className="flex flex-row">
                <Text>A</Text>
            </View>
        </View>
    )
};
//                <SvgRender Icon={ opt } color="#d8e6df" size={22} />
//                <SvgRender Icon={ user } color="#d8e6df" size={22} />