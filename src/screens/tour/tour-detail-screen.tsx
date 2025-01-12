import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {
  CommonNavigatorParams,
  getCurrentRouteName,
  goBack,
  navigate,
} from '~/routes/AppStackNavigator.tsx';
import {formatDateDDMMYYYY, formatDateYYYYMMDD, formatVND} from '~/helpers';
import {AppButton} from '~/components/common';
import {SvgItem} from '~/components/items';
import {svgsNames} from '~/assets/svgs';
import React, {useEffect, useState} from 'react';
import {DialogContact} from '~/components/common/modal/dialog-contact.tsx';
import {listApi, routesName} from '~/constants';
import {useAuth} from '~/hooks/use-auth.tsx';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {useToast} from '~/hooks/use-toast.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DatePicker from 'react-native-date-picker';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'PostDetailScreen'>;
const TourDetailScreen = (props: Props) => {
  const {route} = props;
  const {id} = route.params;

  const [date, setDate] = useState(new Date());
  const [isShowFilterDate, setIsShowFilterDate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tourDetail, setTourDetail] = useState<any>();
  const [numberOfMember, setNumberOfMember] = useState('1');
  const {isLogged} = useAuth();
  const {getManual, postManual} = useFetch();
  const {showToast} = useToast();

  const getTourDetail = async () => {
    getManual(`${listApi.GET_TOUR}/${id}`, {})
      .then((response: any) => {
        console.log(response);
        setTourDetail(response?.returnValue);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message);
      });
  };
  useEffect(() => {
    getTourDetail().then();
  }, []);

  const handlePress = async () => {
    if (!isLogged) {
      return navigate(routesName.LoginScreen, {
        screen: getCurrentRouteName(),
        id,
      });
    }
    if (!date || !numberOfMember) {
      return showToast('Vui lòng điền đầy đủ thông tin', 'error');
    }
    postManual(listApi.ORDER, {
      tourId: id,
      startDate: formatDateYYYYMMDD(date),
      numberOfMember: Number(numberOfMember),
    })
      .then(async response => {
        console.log(response);
        showToast('Đặt tour thành công', 'success');
      })
      .catch(error => {
        console.log(error);
        showToast(error?.response?.data?.info?.message, 'error');
      });
  };
  return (
    <LayoutCommon label={tourDetail?.name} onBack={goBack}>
      <View className="flex justify-between flex-1">
        <ScrollView
          className="mt-4 px-4 flex-1 "
          showsVerticalScrollIndicator={false}>
          <Text className="text-2xl font-bold mt-2 text-justify">
            {tourDetail?.name}
          </Text>
          <ScrollView horizontal={true} className="mt-4">
            {tourDetail?.images?.map((image: any, index: number) => (
              <Image
                key={index}
                source={{uri: image?.url}}
                className="w-[300px] h-[250px] rounded-lg mr-2"
              />
            ))}
          </ScrollView>
          <Text className="text-base text-justify mt-4">
            {tourDetail?.description}
          </Text>
        </ScrollView>
        <View className="w-full p-4 bg-white">
          <View className="flex flex-row items-center gap-2">
            <TouchableOpacity
              className={`w-full max-w-[50%] px-4 rounded-2xl h-14 flex-row items-center border-2 justify-between bg-white ${
                isShowFilterDate ? 'border-007' : 'border-222-10'
              } border`}
              activeOpacity={1}
              onPress={() => setIsShowFilterDate(true)}>
              <View className="flex-col">
                <Text
                  className={`${
                    isShowFilterDate ? 'text-007' : 'text-8080'
                  } text-xs`}>
                  Chọn ngày
                </Text>
                <View className="flex-row items-center">
                  <Text className="text-base text-222">
                    {formatDateDDMMYYYY(date)}
                  </Text>
                  {/*{isShowFilterDate && <AnimationBlinking classWind="ml-[0.5]" />}*/}
                </View>
              </View>
              <SvgItem name={svgsNames.IconContact} />
            </TouchableOpacity>
            <View className="flex-1">
              <TextInput
                value={numberOfMember}
                onChangeText={value => setNumberOfMember(value)}
                keyboardType="numeric"
                placeholder="Số người"
                className="rounded-md border border-1  w-full border-gray-300 px-4"
              />
            </View>
          </View>
          <DatePicker
            modal
            mode="date"
            open={isShowFilterDate}
            date={date}
            confirmText="Xác nhận"
            cancelText="Hủy"
            title="Chọn ngày"
            onConfirm={date => {
              setIsShowFilterDate(false);
              setDate(date);
            }}
            onCancel={() => {
              setIsShowFilterDate(false);
            }}
          />
          <View className="flex items-center flex-row justify-between">
            <Text className="font-bold text-base ">Giá từ:</Text>
            <Text className="text-lg font-bold text-primary">
              {formatVND(tourDetail?.feePerMember)}
              <Text className="text-gray-500 font-normal">/khách</Text>
            </Text>
          </View>
          <View className="flex flex-row mt-4">
            <View className="flex flex-row  mr-6">
              <TouchableOpacity className="w-10 h-10 bg-primary rounded-md mr-2 flex items-center justify-center">
                <SvgItem name={svgsNames.IconPhone} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                className="w-10 h-10 bg-primary rounded-md mr-2 flex items-center justify-center">
                <SvgItem name={svgsNames.IconContact} />
              </TouchableOpacity>
            </View>
            <AppButton
              classCustom="h-10 flex-1"
              label="Đặt ngay"
              onPress={handlePress}
            />
          </View>
        </View>
        <DialogContact
          tourGuideId={tourDetail?.tourGuideId}
          visible={visible}
          onHide={() => setVisible(false)}
        />
      </View>
    </LayoutCommon>
  );
};
export default TourDetailScreen;
