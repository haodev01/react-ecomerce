import {goBack} from '~/routes/AppStackNavigator.tsx';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import React, {useEffect, useState} from 'react';
import {DropdownAddress} from '~/components/common/dropdown/dropdown-address.tsx';
import {LIST_PROVINCES} from '~/constants/data.ts';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi} from '~/constants';
import {useToast} from '~/hooks/use-toast.ts';
import {AppButton} from '~/components/common';
import {TourGuideItem} from '~/components/common/tour-guide-item.tsx';

const ListTourGuideScreen = () => {
  const [city, setCity] = useState<any>(null);
  const [gender, setGender] = useState<any>(null);
  const [keyword, setKeyword] = useState('');
  const [listTourGuide, setListTourGuide] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const listProvince = LIST_PROVINCES.map((item: any) => ({
    label: item?.label,
    value: item?.value?.toString(),
  }));

  const {getManual} = useFetch();
  const {showToast} = useToast();
  const listGender = [
    {
      label: 'Nam',
      value: 1,
    },
    {
      label: 'Nữ',
      value: 2,
    },
  ];

  const getList = async () => {
    setIsLoading(true);
    getManual(listApi.TOUR_GUIDE, {
      provinces: city?.value,
      keyword: '',
      gender: gender?.value ? (gender?.value === 1 ? 1 : 0) : '',
    })
      .then((response: any) => {
        console.log(response?.returnValue?.data);
        setListTourGuide(response?.returnValue?.data);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getList().then();
  }, []);
  const handleSubmit = async () => {
    console.log('Handle');
    getList().then();
  };
  return (
    <LayoutCommon label="Danh sách hướng dẫn viên" onBack={goBack}>
      <View className="flex-1 w-full">
        <View className="bg-white py-2 px-4 mb-1 shadow-lg border-b border-gray-200">
          <View className="flex flex-row gap-x-2">
            <View className="mb-1 flex-1">
              <TextInput
                value={keyword}
                onChangeText={value => setKeyword(value)}
                className="rounded-md border border-1  w-full border-gray-300 px-4 h-10"
                placeholder="Tìm kiếm"
              />
            </View>
          </View>
          <View className="flex flex-row mb-2">
            <DropdownAddress
              listItem={listProvince}
              label="Chọn thành phố"
              handleSelect={(item: any) => {
                setCity(item);
              }}
              itemSelect={city}
              classCustom="mr-2"
            />
            <DropdownAddress
              listItem={listGender}
              label="Chọn giới tính"
              handleSelect={(item: any) => {
                setGender(item);
              }}
              itemSelect={gender}
              classCustom="mr-2"
            />
          </View>
          <AppButton
            label="Tìm kiếm"
            classCustom="h-10"
            onPress={handleSubmit}
          />
        </View>
        <ScrollView
          className="pb-[120px] px-4 mt-6"
          showsVerticalScrollIndicator={false}>
          {isLoading && <ActivityIndicator size="large" color="#1677ff" />}
          {listTourGuide?.map((item, index) => (
            <TourGuideItem
              customImage="h-[200px]"
              classNameCustom="w-full mb-6 "
              item={item}
              key={index}
            />
          ))}
          {!isLoading && listTourGuide?.length === 0 && (
            <View className="flex-1 items-center justify-center mt-5">
              <Text className="text-gray-500 text-lg">
                Không tìm thấy dữ liệu
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </LayoutCommon>
  );
};
export default ListTourGuideScreen;
