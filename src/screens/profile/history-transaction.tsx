import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LayoutCommon} from '../../components/layouts/layout-common';
import {listApi} from '../../constants';
import {useFetch} from '../../hooks/use-fetch';
import {goBack} from '../../routes/AppStackNavigator';

const HistoryItem = (props: any) => {
  const {item} = props;
  return (
    <View className="bg-white shadqow rounded-lg p-4">
      <View>
        <Text className="text-xl font-bold">Xy2323232hy</Text>
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
      isHistory: '3',
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
  return (
    <LayoutCommon label="Lịch sử giao dịch" onBack={goBack}>
      <View className="px-4 mt-6">
        <View className="px-4 mb-6  flex flex-row items-center justify-center">
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
        {listTransaction?.map((item, index) => {
          return <HistoryItem item={item} key={index} />;
        })}
      </View>
    </LayoutCommon>
  );
};

export default HistoryTransactionScreen;
