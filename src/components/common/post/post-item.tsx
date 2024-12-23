import {Image, Text, TouchableOpacity, View} from 'react-native';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';
import React from 'react';
import {RenderHtml} from '~/components/common/render-html.tsx';

interface Props {
  item: any;
  classNameCustom?: string;
  customImage?: string;
}
export const PostItem = (props: Props) => {
  const {item, classNameCustom = '', customImage = ''} = props;
  return (
    <TouchableOpacity
      className={`mr-2 w-[300px] ${classNameCustom}`}
      onPress={() =>
        navigate(routesName.PostDetailScreen, {
          id: item?.id,
        })
      }>
      <Image
        source={{uri: item?.image}}
        className={`w-full h-60 rounded-xl ${customImage}`}
      />
      <Text className="text-base font-bold my-1" numberOfLines={1}>
        {item?.title}
      </Text>
      <View className="text-md">
        <RenderHtml source={item?.currentContent ?? ''} />
      </View>
    </TouchableOpacity>
  );
};
