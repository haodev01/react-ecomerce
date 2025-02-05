import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {goBack} from '~/routes/AppStackNavigator.tsx';
import {Image, ScrollView, Text, View} from 'react-native';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {useToast} from '~/hooks/use-toast.ts';
import {listApi} from '~/constants';
import React, {useEffect, useState} from 'react';
import {TourItem} from '~/components/common/tour/tour-item.tsx';

const TourGuideDetailScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tourGuidrDetail, setTourGuideDetail] = useState<any>({});

  const {getManual} = useFetch();
  const {showToast} = useToast();

  const getDetail = async () => {
    setIsLoading(true);
    getManual(`${listApi.TOUR_GUIDE_GUEST}/2`, {})
      .then((response: any) => {
        console.log(response?.returnValue);
        setTourGuideDetail(response?.returnValue);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getDetail().then();
  }, []);
  return (
    <LayoutCommon label="Chi tiết" onBack={goBack}>
      <ScrollView className="px-4 mt-6 pb-6">
        <View>
          <View className="flex items-center justify-center">
            <Image
              className="rounded-full"
              source={{uri: tourGuidrDetail?.avatar}}
              width={200}
              height={200}
            />
          </View>
          <Text className="text-center text-2xl font-bold text-black mt-2">
            {tourGuidrDetail?.name}
          </Text>
          <Text className="text-center text-base text-justify  mt-2">
            {tourGuidrDetail?.bio}
          </Text>
        </View>
        <View className="mt-2 mb-6">
          <View className="flex flex-row justify-between mb-2 items-center">
            <Text className="mb-2 text-2xl font-bold text-gray-500 ">
              Tour của tôi
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {tourGuidrDetail?.tours?.map((item, index) => {
              return <TourItem item={item} key={index} />;
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </LayoutCommon>
  );
};

export default TourGuideDetailScreen;
