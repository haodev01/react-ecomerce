import {LayoutCommon} from '../../components/layouts/layout-common';
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {goBack} from '../../routes/AppStackNavigator';
import {useFetch} from '../../hooks/use-fetch';
import {listApi} from '../../constants';

const HistoryItem = () => {
  return (
    <View className="bg-white shadqow rounded-lg p-4">
      <View>
        <Text className="text-xl font-bold">Xy2323232hy</Text>
      </View>
    </View>
  );
};

const HistoryTransactionScreen = () => {
  const [listTransaction, setListTransaction] = useState([]);
  const {getManual} = useFetch();
  const getListTransaction = async () => {
    getManual(listApi.TRANSACTION_MY_REQUEST_WITHDRAW, {
      startDate: '',
      startEnd: '',
      isHistory: 'WAITING',
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getListTransaction();
  }, []);
  return (
    <LayoutCommon label="Lịch sử giao dịch" onBack={goBack}>
      <View className="px-4 mt-6">
        <HistoryItem />
      </View>
    </LayoutCommon>
  );
};

export default HistoryTransactionScreen;
