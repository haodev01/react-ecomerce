import {Image, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  item: any;
}

export const FamousItem = (props: Props) => {
  const {item} = props;
  return (
    <TouchableOpacity className="relative">
      <Image
        className="rounded-lg mr-2"
        width={160}
        height={250}
        source={{
          uri: item?.image,
        }}
      />
      <View className="absolute top-0 left-0 w-full h-full " />
      <View className="absolute left-0 w-full h-full flex items-center justify-center ">
        <Text className="text-white font-bold text-lg ">{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
