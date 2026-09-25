import { View } from "react-native";
import Svg, { Circle, Rect, SvgProps } from 'react-native-svg'
import { FC } from "react";

export type SvgIconProps = {
  Icon: FC<SvgProps>;
  color: string;
  size: number;
}

export default function SvgRender({ Icon, color, size }: SvgIconProps) {
    return (
        <View className="w-8 h-8 rounded-lg bg-[#142720] flex items-center justify-center text-[#d8e6df] shadow-inner" >
            <Icon width={size} height={size} fill={color} />
        </View>
    )
}