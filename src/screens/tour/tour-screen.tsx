import {ScrollView, TextInput, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {TOUR_TYPES, tourList} from '~/constants/data.ts';
import {goBack} from '~/routes/AppStackNavigator.tsx';
import {TourItem} from '~/components/common/tour/tour-item.tsx';
import {DropdownAddress} from '~/components/common/dropdown/dropdown-address.tsx';
import {useState} from 'react';
import {AppButton} from '~/components/common';

const TourScreen = () => {
  const [type, setType] = useState(null);
  const [city, setCity] = useState(null);

  const handleSearch = () => {};

  return (
    <LayoutCommon label="Danh sách tour" onBack={goBack}>
      <View className="flex-1 w-full">
        <View className="bg-white py-2 px-4 mb-1 shadow-lg">
          <View className="flex flex-row mb-2">
            <DropdownAddress
              listItem={TOUR_TYPES}
              label="Chọn thành phố"
              handleSelect={(item: any) => {
                console.log({item});
                setCity(item);
              }}
              itemSelect={city}
              classCustom="mr-2"
            />
            <DropdownAddress
              listItem={TOUR_TYPES}
              label="Loại du lịch"
              handleSelect={(item: any) => {
                console.log({item});
                setType(item);
              }}
              itemSelect={type}
              classCustom="ml-2"
            />
          </View>
          <View className="flex flex-row gap-x-2">
            <View className="mb-4 flex-1">
              <TextInput
                keyboardType="numeric"
                className="rounded-md border border-1  w-full border-gray-300 px-4"
                placeholder="Giá nhỏ nhất"
              />
            </View>
            <View className="mb-4 flex-1">
              <TextInput
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
          {tourList.map((item, index) => (
            <TourItem
              customImage="h-[200px]"
              classNameCustom="w-full mb-6 "
              item={item}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    </LayoutCommon>
  );
};
export default TourScreen;
