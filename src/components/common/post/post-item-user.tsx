import React from 'react';
import {Image, Text, View} from 'react-native';
import {RenderHtml} from '~/components/common/render-html.tsx';
import {AppButton} from '../app-button';
import {navigate} from '../../../routes/AppStackNavigator';
import {routesName} from '../../../constants';

interface Props {
  item: any;
  classNameCustom?: string;
  customImage?: string;
  onDelete: (id: any) => void;
}
export const PostItemUser = (props: Props) => {
  const {item, classNameCustom = '', customImage = '', onDelete} = props;
  return (
    <View className={`mr-2 w-[300px] ${classNameCustom}`}>
      <View className="relative">
        <Image
          source={{uri: item?.image}}
          className={`w-full h-60 rounded-xl ${customImage}`}
        />
        <View className="bg-primary absolute top-0 left-0 h-10 flex items-center justify-center px-4 rounded-br-xl ">
          <Text className="text-white text-base font-medium">
            {item?.status}
          </Text>
        </View>
      </View>
      <Text className="text-base font-bold my-1" numberOfLines={1}>
        {item?.title}
      </Text>
      <View className="text-md">
        <RenderHtml source={item?.currentContent ?? ''} />
      </View>
      <View className="mt-3 flex">
        <AppButton
          label="Sửa bài viêt"
          classCustom="mb-2"
          onPress={() => {
            navigate(routesName.EditPostScreen, {
              id: item?.id,
            });
          }}
        />
        <AppButton
          label="Xóa bài viết"
          classCustom="bg-red-500"
          onPress={() => {
            onDelete(item?.id);
          }}
        />
      </View>
    </View>
  );
};
