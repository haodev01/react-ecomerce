import {Image, Text, TouchableOpacity} from 'react-native';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';
import {formatVND} from '~/helpers';
import {AppButton} from '~/components/common';
import React from 'react';
interface Props {
  item: any;
  classNameCustom?: string;
  customImage?: string;
}
export const TourItem = (props: Props) => {
  const {item, classNameCustom = '', customImage = ''} = props;
  console.log({item: item.rates});
  const handlePress = async () => {
    await navigate(routesName.TourDetailScreen, {
      id: item?.id,
    });
  };
  return (
    <TouchableOpacity
      className={`mr-2 w-[300px] ${classNameCustom}`}
      onPress={handlePress}>
      <Image
        source={{uri: item?.images[0]?.url}}
        className={`w-full h-60 rounded-xl ${customImage}`}
      />
      <Text className="text-xl font-bold my-1" numberOfLines={1}>
        {item?.name}
      </Text>
      <Text numberOfLines={3} className="text-base">
        {item?.description}
      </Text>

      <Text className="text-base font-medium mt-2">Giá từ:</Text>
      <Text className="text-lg font-bold text-primary " numberOfLines={3}>
        {formatVND(item?.basePrice)}
      </Text>
      <AppButton classCustom=" mt-4" label="Đặt ngay" onPress={handlePress} />
    </TouchableOpacity>
  );
};
