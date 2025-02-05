import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppButton} from '~/components/common/app-button.tsx';
import React from 'react';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';

interface Props {
  item: any;
  classNameCustom?: string;
  customImage?: string;
}
export const TourGuideItem = (props: Props) => {
  const {item, classNameCustom, customImage} = props;
  const handlePress = async () => {
    await navigate(routesName.TourGuideDetailScreen, {
      id: item?.id,
    });
  };
  return (
    <TouchableOpacity
      className={`mr-2 w-[300px] ${classNameCustom}`}
      onPress={handlePress}>
      <Image
        source={{uri: item?.tourGuideAvatar}}
        className={`w-full h-60 rounded-xl ${customImage}`}
      />
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-bold my-1" numberOfLines={1}>
          {item?.tourGuideUsername}
        </Text>
        <Text className="text-lg font-bold my-1" numberOfLines={1}>
          {item?.tourGuideGender === '1' ? 'Nam' : 'Nữ'}
        </Text>
      </View>
      <View className="flex flex-row items-center mb-1 ">
        <Text className="text-lg font-bold">Địa chỉ:</Text>
        <Text numberOfLines={3} className="text-base">
          {item?.provinceName}
        </Text>
      </View>
      <View className="flex flex-row items-center mb-1 ">
        <Text className="text-lg font-bold mr-1">Đánh giá:</Text>
        <Text numberOfLines={3} className="text-base">
          Chưa có đánh giá
        </Text>
      </View>
      <View className="flex flex-row items-center mb-1 ">
        <Text className="text-lg font-bold  mr-1">Chuyến đi:</Text>
        <Text numberOfLines={3} className="text-base">
          {item?.totalTour}
        </Text>
      </View>
      <AppButton classCustom=" mt-4" label="Chi tiết" onPress={handlePress} />
    </TouchableOpacity>
  );
};
