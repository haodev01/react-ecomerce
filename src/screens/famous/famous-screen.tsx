import React, {useEffect} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {LayoutCommon} from '../../components/layouts/layout-common';
import {CommonNavigatorParams, goBack} from '../../routes/AppStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FamousList} from '../../constants';
import {FamousItem} from '../../components/common/famous/famous-item';
import {locations} from '../home/home-screen';
type Props = NativeStackScreenProps<CommonNavigatorParams, 'FamousScreen'>;

const FamousScreen = (props: Props) => {
  const {route} = props;
  const location = route?.params?.location;
  const famous = FamousList?.find(item => item?.id === location);
  const scrollRef = React.useRef<ScrollView>(null);
  console.log(famous);

  useEffect(() => {
    scrollRef.current?.scrollTo({y: 0, animated: true});
  }, [location]);
  return (
    <LayoutCommon label={famous?.nameKey} onBack={goBack}>
      <ScrollView className="flex-1 px-4 mt-4 pb-10" ref={scrollRef}>
        <View className="pb-10">
          <View className="relative mb-4">
            <Image
              source={{uri: famous?.mainImage}}
              height={300}
              className="rounded-xl"
            />
            <View className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            <View className="absolute bottom-4 left-4 flex flex-row items-center gap-x-4 ">
              <Image
                source={{uri: famous?.mainIcon}}
                resizeMode="contain"
                height={60}
                width={60}
                className="rounded-full mb-2"
              />
              <Text className=" text-white font-bold text-[40px]">
                {famous?.nameKey}
              </Text>
            </View>
          </View>
          <View>
            <Text className="text-3xl text-left text-black font-bold mb-4">
              Điểm tham quan hàng đầu
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {famous?.attractions?.map((item, index) => (
                <View key={index} className="mr-2">
                  <Image
                    source={{uri: item.image}}
                    height={300}
                    width={300}
                    className="rounded-2xl"
                  />
                  <Text className="text-center text-lg font-bold my-1">
                    {item.star}
                  </Text>
                  <Text className="text-center text-lg font-bold ">
                    {item.name}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View className="mt-4">
            <Text className="text-3xl text-left text-black font-bold mb-4">
              Tổng quan
            </Text>
            <Text className="text-base font-medium mb-1 text-justify">
              {famous?.overview.content}
            </Text>
            <ScrollView horizontal={true} className="mt-2">
              {famous?.overview.carousel?.map((item, index) => (
                <View key={index} className="mr-2">
                  <Image
                    className="rounded-2xl"
                    source={{uri: item.src}}
                    width={300}
                    height={300}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <View className="mt-4">
            <Text className="text-3xl text-left text-black font-bold mb-4">
              Ẩm thực
            </Text>
            <Text className="text-base font-medium mb-1 text-justify">
              {famous?.cuisine.content}
            </Text>
            <Image
              className="rounded-xl mt-2"
              source={{uri: famous?.cuisine.banner}}
              height={300}
            />
          </View>
          <View className="mt-4">
            <Text className="text-3xl text-left text-black font-bold mb-4">
              Quận huyện
            </Text>
            <Text className="text-base font-medium mb-1 text-justify">
              {famous?.district.content}
            </Text>
            <Image
              className="rounded-xl mt-2"
              source={{uri: famous?.district.banner}}
              height={300}
            />
          </View>
          <View className="mt-10">
            <Text className="mb-2 text-3xl font-bold text-gray-500">
              Địa điểm nổi bật
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {locations
                ?.filter(item => item?.location !== location)
                .map((item, index) => {
                  return <FamousItem item={item} key={index} />;
                })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </LayoutCommon>
  );
};

export default FamousScreen;
