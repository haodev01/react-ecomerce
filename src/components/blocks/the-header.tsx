import {Text, TouchableOpacity, View} from 'react-native';
import {SvgItem} from '~/components/items';
import {svgsNames} from '~/assets/svgs';
interface Props {
  label?: string;
  onPressBack?: () => void;
  width?: number;
  height?: number;
}
export const TheHeader = (props: Props) => {
  const {label, onPressBack, width = 24, height = 24} = props;
  return (
    <View className="w-full h-12 bg-f0f flex-row items-center justify-between z-[100] px-4">
      <TouchableOpacity
        className="w-6 h-6"
        onLongPress={onPressBack}
        onPress={onPressBack}>
        <SvgItem name={svgsNames.IconBack} width={width} height={height} />
      </TouchableOpacity>
      <Text
        className="text-lg flex-1 mx-2 text-center text-222 font-semibold"
        numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};
