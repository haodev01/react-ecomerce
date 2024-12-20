import {Image, Text, View} from 'react-native';
import {ImagesStatic} from '~/assets/images';
import {SvgItem} from '~/components/items';
import {svgsNames} from '~/assets/svgs';

export const CommentItem = () => {
  return (
    <View className="bg-gray-300  rounded-lg w-full p-2 mb-2">
      <View className=" ">
        <View className="flex flex-row items-center">
          <SvgItem name={svgsNames.AvatarDefault} width={24} height={24} />
          <Text className="text-gray-500 text-[15px] font-medium inline bg-gray-300 ml-2 mr-4 ">
            Hao nguyen
          </Text>
          <Text className=" text-xs inline text-gray-500 ">6 phút trước</Text>
        </View>
      </View>
      <Text className="mt-2 text-md">
        Nếu bạn muốn Text chỉ chiếm kích thước vừa đủ cho nội dung của nó trong
        React Native, bạn không cần sử dụng flex: 1. Thay vào đó, Text sẽ tự
        động chiếm kích thước theo nội dung, và bạn có thể căn chỉnh nó trong
        View cha.
      </Text>
    </View>
  );
};
