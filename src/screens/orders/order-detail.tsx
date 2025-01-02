import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {CommonNavigatorParams, goBack} from '~/routes/AppStackNavigator.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {useToast} from '~/hooks/use-toast.ts';
import {listApi} from '~/constants';
import React, {useCallback, useEffect, useState} from 'react';
import {formatDateDDMMYYYY, formatVND} from '~/helpers';
import {SvgItem} from '~/components/items';
import {svgsNames} from '~/assets/svgs';
import DatePicker from 'react-native-date-picker';
import {AppButton} from '~/components/common';
import {DialogContact} from '~/components/common/modal/dialog-contact.tsx';
import {RenderHtml} from '~/components/common/render-html.tsx';
import {ORDER_DETAIL} from '~/constants/data.ts';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'OrderDetailScreen'>;

const OrderDetailScreen = (props: Props) => {
  const {route} = props;
  const id = route.params?.id;

  const [orderDetail, setOrderDetail] = useState<any>({});
  const {getManual} = useFetch();
  const {showToast} = useToast();

  const getOrderDetail = async () => {
    getManual(`${listApi.ORDER_USER}/${id}`, {})
      .then((response: any) => {
        console.log(response?.returnValue);
        setOrderDetail(response?.returnValue);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      });
  };
  useEffect(() => {
    getOrderDetail().then();
  }, []);
  const getStatusOrder = useCallback(() => {
    switch (orderDetail?.status) {
      case '0':
        return 'Chờ xác nhận';
      case '1':
        return 'Chờ xác nhận';
      case '2':
        return 'Chờ thanh toán';
      case '3':
        return 'Đã thanh toán';
      case '4':
        return 'Đã thanh toán';
      case '5':
        return 'Hoàn thành';
      case '6':
        return 'Hoàn thành';
      default:
        return 'Không xác định';
    }
  }, [orderDetail?.status]);

  return (
    <LayoutCommon label="Chi tiết đơn hàng" onBack={goBack}>
      <View className="flex justify-between flex-1">
        <ScrollView
          className="mt-4 px-4 flex-1 "
          showsVerticalScrollIndicator={false}>
          <Text className="text-xl  font-bold mt-2">
            {orderDetail?.tour?.name}
          </Text>
          <View className="w-fit  mt-2 p-2 rounded-lg bg-primary">
            <Text className="text-base font-bold text-white w-fit text-center">
              {getStatusOrder()}
            </Text>
          </View>
          <ScrollView horizontal={true} className="mt-4">
            {orderDetail?.tour?.images?.map((image: any, index: number) => (
              <Image
                key={index}
                source={{uri: image?.url}}
                className="w-[300px] h-[250px] rounded-lg mr-2"
              />
            ))}
          </ScrollView>
          <View className="mt-6">
            <RenderHtml source={ORDER_DETAIL} />
          </View>
        </ScrollView>
      </View>
    </LayoutCommon>
  );
};

export default OrderDetailScreen;
