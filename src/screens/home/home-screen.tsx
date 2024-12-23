import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LayoutHome} from '~/components/layouts/layout-home.tsx';
import {FamousItem} from '~/components/common/famous/famous-item.tsx';
import {PostItem} from '~/components/common/post/post-item.tsx';
import {tourList} from '~/constants/data.ts';
import {TourItem} from '~/components/common/tour/tour-item.tsx';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';
import {usePost} from '~/hooks/use-post.ts';

const locations = [
  {
    id: 1,
    name: 'Ha Noi',
    image:
      'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
  },
  {
    id: 2,
    name: 'Hai Phong',
    image:
      'https://media.travel.com.vn/LastMinute/lm__2412189_congvienhaclongdam.webp',
  },
  {
    id: 3,
    name: 'Da Nang',
    image: 'https://media.travel.com.vn/LastMinute/lm__24121710_catcat.webp',
  },
  {
    id: 4,
    name: 'Hue',
    image:
      'https://media.travel.com.vn/Advertisings/bn_240925_KPSP1-tour-noi-dia-kich-cau.jpg',
  },
];

const HomeScreen = () => {
  const {listPost} = usePost();
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
          <View className="flex flex-row justify-between">
            <Text className="mb-2 text-lg font-bold text-gray-500 ">
              Tour nổi bật
            </Text>
            <TouchableOpacity onPress={() => navigate(routesName.TourScreen)}>
              <Text className="font-bold text-primary">Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {tourList.map((item, index) => {
              return <TourItem item={item} key={index} />;
            })}
          </ScrollView>
        </View>
        <View className="mt-8">
          <Text className="mb-2 text-lg font-bold text-gray-500">
            Bài viết nổi bật
          </Text>
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
