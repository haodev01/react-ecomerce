import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {goBack} from '~/routes/AppStackNavigator.tsx';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {listApi} from '~/constants';
import React, {useEffect, useState} from 'react';
import {useToast} from '~/hooks/use-toast.ts';
import {TourItemUser} from '~/components/common/tour/tour-item-user.tsx';

const LIST_STATUS = [
  {
    value: 'waiting_confirm',
    label: 'Chờ xác nhận',
  },
  {
    value: 'waiting_purchase',
    label: 'Chờ thanh toán',
  },
  {
    value: 'processing',
    label: 'Đã bắt đầu',
  },
  {
    value: 'end',
    label: 'Hoàn thành',
  },
];
const ListTourUserScreen = () => {
  const {getManual} = useFetch();

  const [listOrder, setListOrder] = useState([]);
  const [tabActive, setTabActive] = React.useState(LIST_STATUS[0]);
  const {showToast} = useToast();
  const [isLoading, setIsLoading] = useState(true);

  const getListTourUser = async () => {
    setIsLoading(true);
    setListOrder([]);
    getManual(listApi.ORDER_USER, {
      type: tabActive?.value,
    })
      .then((response: any) => {
        setListOrder(response.returnValue);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getListTourUser().then();
  }, [tabActive?.value]);

  return (
    <LayoutCommon label="Chuyến đi của bạn" onBack={goBack}>
      <View className="pb-[100px]">
        <ScrollView
          horizontal={true}
          className="px-4 mb-6 mt-4"
          showsHorizontalScrollIndicator={false}>
          {LIST_STATUS.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setTabActive(item)}
                key={index}
                className="mr-4">
                <Text
                  className={`font-bold ${
                    tabActive?.value === item.value
                      ? 'text-primary'
                      : 'text-gray-500'
                  }`}>
                  {item?.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ScrollView className="px-4">
          {isLoading && <ActivityIndicator color="#1677ff" />}
          {listOrder?.map((item, index) => {
            return (
              <TourItemUser
                classNameCustom="w-full mb-6"
                item={item}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </LayoutCommon>
  );
};
export default ListTourUserScreen;
