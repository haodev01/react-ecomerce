import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {routesName} from '~/constants';
import {formatVND} from '~/helpers';
import {navigate} from '~/routes/AppStackNavigator.tsx';

interface Props {
  item: any;
  classNameCustom?: string;
  customImage?: string;
}

export const TourItemUser = (props: Props) => {
  const {item, classNameCustom = '', customImage = ''} = props;

  const handlePress = async () => {
    await navigate(routesName.OrderDetailScreen, {
      id: item?.id,
    });
  };
  const getStatusOrder = useCallback(() => {
    switch (item?.status) {
      case '0':
        return 'Chờ xác nhận';
      case '1':
        return 'Chờ đặt cọc';
      case '2':
        return 'Chờ thanh toán';
      case '3':
        return 'Chờ bắt đầu';
      case '4':
        return 'Đã bắt đầu';
      case '5':
        return 'Hoàn thành';
      case '6':
        return 'Đã hủy';
      default:
        return 'Không xác định';
    }
  }, [item?.status]);
  return (
    <TouchableOpacity
      className={`mr-2 w-[300px] ${classNameCustom}`}
      onPress={handlePress}>
      <View className="relative">
        <Image
          source={{uri: item?.tour?.images[0]?.url}}
          className={`w-full h-60 rounded-xl ${customImage}`}
        />
        <View className="absolute top-0 left-0 w-fit p-2 flex items-center justify-center bg-primary rounded-br-2xl">
          <Text className="text-white font-medium">{getStatusOrder()}</Text>
        </View>
      </View>
      <Text className="text-base font-bold my-1" numberOfLines={1}>
        {item?.tour?.name}
      </Text>
      <Text className="text-base font-medium mt-2">Giá từ:</Text>
      <Text className="text-lg font-bold text-primary " numberOfLines={3}>
        {formatVND(item?.tour?.basePrice)}
      </Text>
    </TouchableOpacity>
  );
};
