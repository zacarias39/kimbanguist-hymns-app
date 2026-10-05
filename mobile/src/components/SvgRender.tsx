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
        < >
            <Icon width={size} height={size} fill={color} />
        </>
    )
}