import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {FamousItem} from '~/components/common/famous/famous-item.tsx';
import {PostItem} from '~/components/common/post/post-item.tsx';
import {TourItem} from '~/components/common/tour/tour-item.tsx';
import {LayoutHome} from '~/components/layouts/layout-home.tsx';
import {routesName} from '~/constants';
import {usePost} from '~/hooks/use-post.ts';
import {useTour} from '~/hooks/use-tour.ts';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import React from 'react';

export const locations = [
  {
    id: 1,
    name: 'Ha Noi',
    image:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617193/hoguom_hzwsse.jpg',
    location: 'ha-noi',
  },
  {
    id: 2,
    name: 'Nha Trang',
    image:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617979/background_fyrsat.jpg',
    location: 'nha-trang',
  },
  {
    id: 3,
    name: 'Đà Nẵng',
    image:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736617472/background_wnphb6.jpg',
    location: 'da-nang',
  },
  {
    id: 4,
    name: 'Phu Quốc',
    image:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618180/background_eevpre.jpg',
    location: 'phu-quoc',
  },
  {
    id: 5,
    name: 'Đà lạt',
    image:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618519/background_idghs7.jpg',
    location: 'da-lat',
  },
  {
    id: 5,
    name: 'Hồ Chí Minh',
    image:
      'https://res.cloudinary.com/dfoufefxg/image/upload/v1736618342/background_kkcfxq.jpg',
    location: 'ho-chi-minh',
  },
];

const HomeScreen = () => {
  const {listPost} = usePost();
  const {listTour} = useTour();
  return (
    <LayoutHome>
      <View className="pt-6 px-4">
        <View>
          <Text className="mb-2 text-lg font-bold text-gray-500">
            Địa điểm nổi bật
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {locations.map((item, index) => {
              return <FamousItem item={item} key={index} />;
            })}
          </ScrollView>
        </View>
        <View className="mt-8">
          <View className="flex flex-row justify-between mb-2 items-center">
            <Text className="mb-2 text-2xl font-bold text-gray-500 ">
              Tour nổi bật
            </Text>
            <TouchableOpacity onPress={() => navigate(routesName.TourScreen)}>
              <Text className="font-bold text-primary text-lg">Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listTour.map((item, index) => {
              return <TourItem item={item} key={index} />;
            })}
          </ScrollView>
        </View>
        <View className="mt-8">
          <View className="flex flex-row justify-between mb-2 items-center">
            <Text className="mb-2 text-2xl font-bold text-gray-500 ">
              Bài viết nổi bật
            </Text>
            <TouchableOpacity onPress={() => navigate(routesName.PostScreen)}>
              <Text className="font-bold text-primary text-lg">Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listPost?.map((item, index) => {
              return <PostItem item={item} key={index} />;
            })}
          </ScrollView>
        </View>
      </View>
    </LayoutHome>
  );
};

export default HomeScreen;
