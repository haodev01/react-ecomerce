import {
  ScrollView,
  TextInput,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {LIST_PROVINCES, TOUR_TYPES} from '~/constants/data.ts';
import {goBack} from '~/routes/AppStackNavigator.tsx';
import {TourItem} from '~/components/common/tour/tour-item.tsx';
import {DropdownAddress} from '~/components/common/dropdown/dropdown-address.tsx';
import {AppButton} from '~/components/common';
import {useTour} from '~/hooks/use-tour.ts';

const TourScreen = () => {
  const {
    listTour,
    setType,
    setCity,
    city,
    type,
    getListTour,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    isLoading,
  } = useTour();

  const handleSearch = () => {
    getListTour().then();
  };

  const listProvince = LIST_PROVINCES.map((item: any) => ({
    label: item?.label,
    value: item?.value?.toString(),
  }));

  return (
    <LayoutCommon label="Danh sách tour" onBack={goBack}>
      <View className="flex-1 w-full">
        <View className="bg-white py-2 px-4 mb-1 shadow-lg">
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
              listItem={TOUR_TYPES}
              label="Loại du lịch"
              handleSelect={(item: any) => {
                setType(item);
              }}
              itemSelect={type}
              classCustom="ml-2"
            />
          </View>
          <View className="flex flex-row gap-x-2">
            <View className="mb-4 flex-1">
              <TextInput
                value={minPrice}
                onChangeText={value => setMinPrice(value)}
                keyboardType="numeric"
                className="rounded-md border border-1  w-full border-gray-300 px-4"
                placeholder="Giá nhỏ nhất"
              />
            </View>
            <View className="mb-4 flex-1">
              <TextInput
                value={maxPrice}
                onChangeText={value => setMaxPrice(value)}
                keyboardType="numeric"
                className="rounded-md border border-1  w-full border-gray-300 px-4"
                placeholder="Giá cao nhất"
              />
            </View>
          </View>
          <AppButton
            label="Tìm kiếm"
            classCustom="h-10"
            onPress={handleSearch}
          />
        </View>
        <ScrollView
          className="pb-[120px] px-4 "
          showsVerticalScrollIndicator={false}>
          {isLoading && <ActivityIndicator size="large" color="#1677ff" />}
          {listTour?.map((item, index) => (
            <TourItem
              customImage="h-[200px]"
              classNameCustom="w-full mb-6 "
              item={item}
              key={index}
            />
          ))}
          {!isLoading && listTour?.length === 0 && (
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
export default TourScreen;
