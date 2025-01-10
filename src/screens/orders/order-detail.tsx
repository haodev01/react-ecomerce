import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RenderHtml} from '~/components/common/render-html.tsx';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {listApi} from '~/constants';
import {ORDER_DETAIL} from '~/constants/data.ts';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {useToast} from '~/hooks/use-toast.ts';
import {CommonNavigatorParams, goBack} from '~/routes/AppStackNavigator.tsx';
import {AppButton} from '../../components/common';
import {DialogBase} from '../../components/common/modal/dialog-base';
import {calculateDays, formatCurrency} from '../../helpers';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'OrderDetailScreen'>;

const OrderDetailScreen = (props: Props) => {
  const {route} = props;
  const id = route.params?.id;

  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [orderDetail, setOrderDetail] = useState<any>({});
  const {getManual, deleteManual, putManual} = useFetch();
  const {showToast} = useToast();

  const getOrderDetail = async () => {
    setIsLoading(true);
    getManual(`${listApi.ORDER_USER}/${id}`, {})
      .then((response: any) => {
        setOrderDetail(response?.returnValue);
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getOrderDetail().then();
  }, []);
  const getStatusOrder = useCallback(() => {
    switch (orderDetail?.status) {
      case '0':
        return 'Chờ xác nhận';
      case '1':
        return 'Chờ đặt cọc';
      case '2':
        return 'Chờ thanh toán';
      case '3':
        return 'Chờ bắt đầu';
      case '4':
        return 'Đã bắt đầu';
      case '5':
        return 'Hoàn thành';
      case '6':
        return 'Đã hủy';
      default:
        return 'Không xác định';
    }
  }, [orderDetail?.status]);

  const getLabelButton = useCallback(() => {
    switch (orderDetail?.status) {
      case '0':
        return 'Chờ xác nhận';
      case '1':
        return 'Đặt cọc ngay';
      case '2':
        return 'Thanh toán ngay';
      case '3':
        return 'Bắt đầu chuyến đi';
      case '4':
        return 'Kết thúc chuyến đi';
      default:
        return 'Không xác định';
    }
  }, [orderDetail?.status]);

  const isShowButton = useMemo(() => {
    if (['1', '2', '3', '4'].includes(orderDetail?.status)) {
      return true;
    }
    return false;
  }, [orderDetail?.status]);

  const handleDelete = async () => {
    deleteManual(listApi.ORDER_USER, {
      orderId: id,
    })
      .then(async () => {
        await getOrderDetail();
        setVisibleDelete(false);
        showToast('Bạn đã hủy chuyến đi thành công');
      })
      .catch(error => {
        showToast(error?.response?.data?.info?.message, 'error');
      });
  };

  const handlePayment = async () => {
    const amount = Number(orderDetail?.price) - Number(orderDetail?.paid);
    putManual(listApi.ORDER_PAID, {
      orderId: id,
      amount,
    })
      .then(async (response: any) => {
        if (response.statusCode === 200) {
          await getOrderDetail();
          showToast('Thanh toán chuyến đi thành công', 'success');
        } else {
          showToast('Thanh toán thất bại', 'error');
        }
      })
      .catch(() => {
        showToast('Số dư tài khoản không đủ', 'error');
      })
      .finally(() => {
        setVisible(false);
      });
  };
  const handleStart = async () => {
    putManual(`${listApi.ORDER_START_USER}/${id}`, {})
      .then(async (response: any) => {
        if (response.statusCode === 200) {
          await getOrderDetail();
          showToast('Bă bắt đầu chuyến đi', 'success');
        } else {
          showToast('Có lỗi xảy ra', 'error');
        }
      })
      .catch(() => {
        showToast('Chưa đến ngày bắt đầu chuyến đi!', 'error');
      })
      .finally(() => {
        setVisible(false);
      });
  };

  const handlePer = async () => {
    putManual(listApi.ORDER_PREPAID, {orderId: id})
      .then(async (response: any) => {
        if (response.statusCode === 200) {
          await getOrderDetail();
          showToast('Thanh toán chuyến đi thành công', 'success');
        } else {
          showToast('Thanh toán thất bại', 'error');
        }
      })
      .catch(() => {
        showToast('Số dư tài khoản không đủ', 'error');
      })
      .finally(() => {
        setVisible(false);
      });
  };
  const handleEnd = async () => {
    putManual(`${listApi.ORDER_END_ORDER}`, {orderId: id})
      .then(async (response: any) => {
        console.log(response);
        if (response.statusCode === 200) {
          await getOrderDetail();
          showToast('Kết thúc chuyến đi thành công', 'success');
        } else {
          showToast('Có lỗi xảy ra', 'error');
        }
      })
      .catch(() => {
        showToast('Có lỗi xảy ra ngoại lệ', 'error');
      })
      .finally(() => {
        setVisible(false);
      });
  };
  const handleOk = () => {
    if (orderDetail?.status === '1') {
      return handlePer();
    } else if (orderDetail?.status === '2') {
      return handlePayment();
    } else if (orderDetail?.status === '3') {
      return handleStart();
    } else if (orderDetail?.status === '4') {
      return handleEnd();
    }
    return showToast('Trạng thái không phù hợp', 'error');
  };

  const isShowButtonDelete = useMemo(() => {
    if (['6'].includes(orderDetail?.status)) {
      return false;
    }
    return true;
  }, [orderDetail?.status]);
  console.log(orderDetail?.status);

  return (
    <LayoutCommon label="Chi tiết đơn hàng" onBack={goBack}>
      <View className="flex-1">
        {isLoading && (
          <ActivityIndicator size="large" color="#1677ff" className="mt-4" />
        )}
        {!isLoading && (
          <View className="flex-1">
            <View className="flex justify-between flex-1">
              <ScrollView
                className="mt-4 px-4 flex-1 "
                showsVerticalScrollIndicator={false}>
                <Text className="text-xl  font-bold mt-2">
                  {orderDetail?.tour?.name}
                </Text>
                <View>
                  <View className="flex flex-row gap-4 items-center flex-wrap mt-4 justify-start">
                    <View className="text-left text-[16px] flex items-center flex-row">
                      <Text className="font-bold text-[18px] mr-1 ">
                        Trạng thái:
                      </Text>
                      <Text className="text-base text-primary font-bold">
                        {getStatusOrder()}
                      </Text>
                    </View>
                    <View className="text-left text-[16px] flex items-center flex-row">
                      <Text className="font-bold text-[18px] mr-1">
                        {' '}
                        Giá tiền:
                      </Text>
                      <Text className="text-base text-f97">
                        {formatCurrency(orderDetail?.price)}
                      </Text>
                    </View>
                    <View className="text-left text-[16px] flex items-center flex-row">
                      <Text className="font-bold text-[18px] font-bold mr-1">
                        Thời gian:
                      </Text>
                      <Text className="text-base font-bold">
                        {calculateDays(
                          orderDetail?.startDate,
                          orderDetail?.endDate,
                        )}
                      </Text>
                    </View>
                    <View className="text-left text-[16px] flex items-center flex-row">
                      <Text className="font-bold text-[18px] mr-1">
                        {' '}
                        Số người:
                      </Text>
                      <Text className="text-base font-bold">
                        {orderDetail?.tour?.maxMember}
                      </Text>
                    </View>
                  </View>
                </View>
                <ScrollView horizontal={true} className="mt-4">
                  {orderDetail?.tour?.images?.map(
                    (image: any, index: number) => (
                      <Image
                        key={index}
                        source={{uri: image?.url}}
                        className="w-[300px] h-[250px] rounded-lg mr-2"
                      />
                    ),
                  )}
                </ScrollView>
                <View>
                  <View className="mt-4 mb-2">
                    <Text className="text-2xl font-bold">Giá tiền</Text>
                  </View>
                  <View className="mt-2 flex gap-2 flex-row">
                    <Text className="text-orange-500">+</Text>
                    <Text className="text-slate-500 text-base">Phí tour:</Text>
                    <Text>{formatCurrency(orderDetail?.tour?.basePrice)}</Text>
                  </View>
                  <View className="mt-2 flex gap-2 flex-row">
                    <Text className="text-orange-500">+</Text>
                    <Text className="text-slate-500 text-base">
                      Phí phụ thu:
                    </Text>
                    <Text className="text-base">
                      {formatCurrency(orderDetail?.tour?.feePerMember)}
                    </Text>
                  </View>
                  <View className="mt-2 flex gap-2 flex-row">
                    <Text className="text-orange-500">+</Text>
                    <Text className="text-slate-500 text-base">Số lượng:</Text>
                    <Text className="text-base">{orderDetail?.size}</Text>
                  </View>
                  <View className="mt-2 flex gap-2 flex-row">
                    <Text className="text-orange-500">+</Text>
                    <Text className="text-slate-500 text-base">
                      Thành tiền:
                    </Text>
                    <Text className="text-base">
                      {formatCurrency(orderDetail?.price)}
                    </Text>
                  </View>
                </View>
                <View>
                  <View className="pt-5 text-3xl">
                    <Text className="text-2xl">Lưu ý về chuyến đi</Text>
                  </View>
                  <View className="mt-5 font-normal">
                    <Text className="font-bold pb-2 text-xl">
                      QUY TRÌNH ĐĂNG KÝ TOUR
                    </Text>
                    <Text className="pb-1 text-base">
                      Đợt 01: Quý khách thanh toán 10% giá trị của tour ngay khi
                      đăng ký mua tour.
                    </Text>
                    <Text className="pb-1 text-base">
                      Đợt 02: Quý khách thanh toán 100% giá trị của tour trước
                      lịch khởi hành 07 ngày.
                    </Text>
                    <Text className="pb-1 text-base">
                      *Lưu ý: Đối với những tour quý khách đăng ký sát lịch khởi
                      hành từ 03 cho đến 07 ngày, quý khách vui lòng liên hệ
                      1900 3398 để xác nhận số chỗ còn lại và thanh toán 100%
                      giá trị của tour.
                    </Text>
                    <Text className="pt-2 font-bold text-xl">
                      ĐIỀU KIỆN HỦY TOUR
                    </Text>
                    <Text className="font-bold py-2 text-lg">
                      <Text className="text-green-500">+</Text> Trường hợp hủy
                      bỏ dịch vụ từ Ktravel:
                    </Text>
                    <Text>
                      Nếu Ktravel không thực hiện được chuyến du lịch/ dịch vụ,
                      công ty phải báo ngay cho khách hàng biết và thanh toán
                      lại cho khách hàng toàn bộ số tiền mà khách hàng đã đóng
                      trong vòng 3 ngày kể từ lúc chính thức thông báo hủy
                      chuyến đi/ dịch vụ du lịch bằng hình thức tiền mặt hoặc
                      chuyển khoản.
                    </Text>
                    <Text className="font-bold py-2 text-lg">
                      <Text className="text-green-500">+</Text> Trường hợp hủy
                      bỏ dịch vụ từ Quý khách hàng:
                    </Text>
                    <Text className="pb-1 text-base">
                      Trong trường hợp không thể tiếp tục sử dụng dịch vụ/ tour,
                      Quý khách phải thông báo cho Công ty bằng văn bản hoặc
                      email (Không giải quyết các trường hợp liên hệ chuyển/ hủy
                      tour qua điện thoại). Đồng thời Quý khách vui lòng mang
                      Biên bản đăng ký tour/ dịch vụ & biên lai đóng tiền đến
                      văn phòng Vietnam Booking để làm thủ tục hủy/ chuyển tour.
                    </Text>
                    <Text className="pb-1 text-base">
                      Các trường hợp chuyển/ đổi dịch vụ/ tour: Cty sẽ căn cứ
                      xem xét tình hình thực tế để tính phí và có mức hỗ trợ Quý
                      khách hàng
                    </Text>
                    <Text className="pb-1 text-base">
                      Trường hợp hủy dịch vụ/ tour: Quý khách phải chịu chi phí
                      hủy tour/ dịch vụ theo quy định của Ktravel và toàn bộ phí
                      ngân hàng cho việc thanh toán trực tuyến.
                    </Text>
                    <Text className="font-bold py-2 text-lg">
                      <Text className="text-green-500">+</Text> Phí hủy được quy
                      định như sau:
                    </Text>
                    <Text className="pb-1 text-base">
                      Ngay sau khi đặt cọc hoặc thanh toán hoặc trước 10 ngày:
                      phí hủy 30% tiền tour.
                    </Text>
                    <Text className="pb-1 text-base">
                      Hủy 7 ngày trước ngày khởi hành: phí hủy 50% tiền tour.
                    </Text>
                    <Text className="pb-1 text-base">
                      Hủy 3 ngày trước ngày khởi hành: phí hủy 85% tiền tour
                    </Text>
                    <Text className="pb-1 text-base">
                      Hủy 05 ngày trước ngày khởi hành: phí hủy 100% tiền tour
                    </Text>
                    <Text className="pb-1 text-base">
                      Trường hợp quý khách đến trễ giờ khởi hành được tính là
                      hủy 05 ngày trước ngày khởi hành.
                    </Text>
                    <Text className="pb-1 text-base">
                      Giai đoạn Lễ/Tết: không hoàn, không hủy, không đổi.
                    </Text>
                    <Text className="pb-1 text-base">
                      Việc huỷ bỏ chuyến đi phải được thông báo trực tiếp với
                      Công ty hoặc qua fax, email, tin nhắn và phải được Công ty
                      xác nhận. Việc huỷ bỏ bằng điện thoại không được chấp
                      nhận.
                    </Text>
                    <Text className="pt-2">
                      Các ngày đặt cọc, thanh toán, huỷ và dời tour: không tính
                      thứ 07, Chủ Nhật.
                    </Text>
                    <Text className="pt-2">
                      Đến ngày hẹn thanh toán 100% giá trị tour, nếu quý khách
                      không thực hiện thanh toán đúng hạn và đúng số tiền, xem
                      như quý khách tự ý hủy tour và mất hết số tiền đặt cọc giữ
                      chỗ.
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <View className="bg-white p-4 border-t border-gray-300">
                {isShowButtonDelete && (
                  <AppButton
                    label="Hủy chuyến đi"
                    onPress={() => setVisibleDelete(true)}
                    classCustom="mb-2"
                  />
                )}
                {isShowButton && (
                  <AppButton
                    label={getLabelButton()}
                    onPress={() => {
                      setVisible(true);
                    }}
                  />
                )}
              </View>
            </View>
            <DialogBase visible={visibleDelete}>
              <View>
                <Text className="text-xl font-bold text-center">
                  Xác nhận hủy
                </Text>
                <Text className="text-base text-center mt-1">
                  Bạn có muốn hủy chuyến đi ?
                </Text>
                <View className="mt-4 border-t border-gray-300 ">
                  <TouchableOpacity
                    className="mb-3 pt-2"
                    onPress={() => setVisibleDelete(false)}>
                    <Text className="text-base text-primary text-center">
                      Hủy
                    </Text>
                  </TouchableOpacity>
                  <AppButton label="Xác nhận" onPress={handleDelete} />
                </View>
              </View>
            </DialogBase>
            <DialogBase visible={visible}>
              <View>
                {orderDetail?.status === '1' && (
                  <>
                    <Text className="text-xl font-bold text-left mb-2">
                      Xác nhận đặt cọc
                    </Text>
                    <Text className="text-base text-left mt-1 mb-1">
                      Bạn sẽ đặt cọc trước 10% giá trị chuyến đi để đảm bảo
                      chuyến đi diễn ra một cách hoàn hảo.
                    </Text>
                    <Text className="text-base">
                      Tổng: {formatCurrency(orderDetail?.price * 0.1)}
                    </Text>
                  </>
                )}
                {orderDetail?.status === '2' && (
                  <>
                    <Text className="text-xl font-bold text-left mb-2">
                      Xác nhận thanh toán
                    </Text>
                    <Text className="text-base text-left mt-1 mb-1">
                      Bạn sẽ thanh toán số tiền chuyến đi này cho hệ thống, để
                      đảm bảo chuyến đi diễn ra một cách hoàn hảo.
                    </Text>
                    <Text className="text-base">
                      Tổng:{' '}
                      {formatCurrency(orderDetail?.price * orderDetail?.paid)}
                    </Text>
                  </>
                )}
                {orderDetail?.status === '3' && (
                  <>
                    <Text className="text-xl font-bold text-left mb-2">
                      Xác nhận bắt đầu chuyến đi
                    </Text>
                    <Text className="text-base text-left mt-1 mb-1">
                      Bạn sẽ bắt đầu chuyến đi này, chúc bạn có những trải
                      nghiệm tuyệt vời!
                    </Text>
                  </>
                )}
                {orderDetail?.status === '4' && (
                  <>
                    <Text className="text-xl font-bold text-left mb-2">
                      Xác nhận kết thúc chuyến đi
                    </Text>
                    <Text className="text-base text-left mt-1 mb-1">
                      Bạn sẽ kết thúc chuyến đi này, chúc bạn có những trải
                      nghiệm tuyệt vời!
                    </Text>
                  </>
                )}

                <View className="mt-4 border-t border-gray-300 ">
                  <TouchableOpacity
                    className="mb-3 pt-2"
                    onPress={() => setVisible(false)}>
                    <Text className="text-base text-primary text-center">
                      Hủy
                    </Text>
                  </TouchableOpacity>
                  <AppButton label="Xác nhận" onPress={handleOk} />
                </View>
              </View>
            </DialogBase>
          </View>
        )}
      </View>
    </LayoutCommon>
  );
};

export default OrderDetailScreen;
