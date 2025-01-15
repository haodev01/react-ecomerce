import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LayoutCommon} from '../../components/layouts/layout-common';
import {listApi} from '../../constants';
import {useFetch} from '../../hooks/use-fetch';
import {goBack} from '../../routes/AppStackNavigator';
import {formatCurrency, formatDateDDMMYYYY} from '~/helpers';

const HistoryItem = (props: any) => {
  const {item} = props;

  const getStatus = useCallback(() => {
    switch (item?.status) {
      case '3':
        return 'Chờ xử lý';
      case '0':
        return 'Thất bại';
      case '1':
        return 'Thành công';
      default:
        return 'Không xác định';
    }
  }, [item?.status]);

  const getStyleStatus = useCallback(() => {
    switch (item?.status) {
      case '3':
        return 'bg-yellow-500';
      case '0':
        return 'bg-red-500';
      case '1':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }, [item?.status]);

  return (
    <View className="bg-white shadqow rounded-lg p-2 mb-2">
      <View className="flex items-start flex-row justify-between">
        <View>
          <Text className="text-base font-medium ">
            Mã giao dịch: {item?.id}
          </Text>
          <Text className="my-1">
            Ngày rút: {formatDateDDMMYYYY(item?.time)}
          </Text>
          <Text>Số tiền: {formatCurrency(item?.amount)}</Text>
        </View>
        <View>
          <View className={`${getStyleStatus()} p-1 rounded-md`}>
            <Text className="text-white">{getStatus()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const LIST_STATUS = [
  {
    value: '3',
    label: 'Chờ xử lý',
  },
  {
    value: '0',
    label: 'Thất bại',
  },
  {
    value: '1',
    label: 'Thành công',
  },
];
const HistoryTransactionScreen = () => {
  const [listTransaction, setListTransaction] = useState([]);
  const [tabActive, setTabActive] = useState(LIST_STATUS[0]);
  const [isLoading, setIsLoading] = useState(false);
  const {getManual} = useFetch();
  const getListTransaction = async () => {
    setIsLoading(true);

    getManual(listApi.TRANSACTION_MY_REQUEST_WITHDRAW, {
      startDate: '2024-01-12',
      endDate: '2025-09-01',
    })
      .then(response => {
        console.log(response);
        setListTransaction(response.returnValue?.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getListTransaction();
  }, [tabActive?.value]);
  console.log(listTransaction);
  return (
    <LayoutCommon label="Lịch sử giao dịch" onBack={goBack}>
      <ScrollView className="px-4 mt-6">
        <View className="mb-4">
          <Text className="text-xl font-bold">Danh sách lịch sử giao dịch</Text>
        </View>
        <View className="px-4 mb-6  flex flex-row items-center justify-center hidden">
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
        </View>
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {!isLoading && listTransaction?.length === 0 && (
          <View className="flex items-center justify-center">
            <Text className="text-gray-500">Không có lịch sử giao dịch</Text>
          </View>
        )}
        {!isLoading &&
          !!listTransaction?.length &&
          listTransaction?.map((item, index) => {
            return <HistoryItem item={item} key={index} />;
          })}
      </ScrollView>
    </LayoutCommon>
  );
};

export default HistoryTransactionScreen;
