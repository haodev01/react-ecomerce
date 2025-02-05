import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {svgsNames} from '~/assets/svgs';
import {AppButton} from '~/components/common';
import {TabMenuItem} from '~/components/common/tab-menu-item.tsx';
import {LayoutHome} from '~/components/layouts/layout-home.tsx';
import {routesName} from '~/constants';
import {useAuth} from '~/hooks/use-auth.tsx';
import {goBack, navigate} from '~/routes/AppStackNavigator.tsx';
import {DialogBase} from '../../components/common/modal/dialog-base';
import {LINK_WEB} from '../../configs/api';

const ProfileScreen = () => {
  const {isLogged} = useAuth();
  const [showDeposit, setShowDeposit] = React.useState(false);
  const handleShowDeposit = () => {
    console.log('handleShowDeposit');
    setShowDeposit(true);
  };
  const tabMenu = [
    {
      id: 1,
      label: 'Thông tin tài khoản',
      icon: svgsNames.IconProfile,
      route: routesName.UpdateProfileScreen,
    },
    {
      id: 1,
      label: 'Lịch sử giao dịch',
      icon: svgsNames.IconMoney,
      route: routesName.HistoryTransaction,
    },
    {
      id: 1,
      label: 'Đổi mật khẩu',
      icon: svgsNames.IconPassword,
      route: routesName.ChangePasswordScreen,
    },
    {
      id: 1,
      label: 'Viết bài',
      icon: svgsNames.IconCreatePost,
      route: routesName.CreatePostScreen,
    },
    {
      id: 1,
      label: 'Danh sách bài viết',
      icon: svgsNames.IconCreatePost,
      route: routesName.ListPostUserScreen,
    },
    {
      id: 1,
      label: 'Danh sách hướng dẫn viên',
      icon: svgsNames.IconCreatePost,
      route: routesName.ListTourGuide,
    },
    {
      id: 1,
      label: 'Chuyến đi của bạn',
      icon: svgsNames.IconProfile,
      route: routesName.ListTourUserScreen,
    },
    {
      id: 1,
      label: 'Nạp tiền',
      icon: svgsNames.IconMoney,
      action: 'deposit',
      handler: () => handleShowDeposit(),
    },
    {
      id: 1,
      label: 'Rút tiền',
      icon: svgsNames.IconMoney,
      route: routesName.WithdrawalMoneyScreen,
    },
    {
      id: 1,
      label: 'Đăng xuât',
      icon: svgsNames.IconLogout,
      action: 'logout',
    },
  ];
  return (
    <LayoutHome label="Trang cá nhân" onBack={goBack}>
      <View className="p-4">
        <View className="w-full ">
          {isLogged && (
            <View className="w-full rounded-2xl bg-white overflow-hidden">
              {tabMenu.map((menu: any, idx: number) => {
                return (
                  <TabMenuItem
                    item={menu}
                    key={idx}
                    hasBorderBottom={idx !== tabMenu.length - 1}
                  />
                );
              })}
            </View>
          )}
          {!isLogged && (
            <View className="mt-4">
              <Text className="text-base text-center mb-2 px-6">
                Bạn vui lòng đăng nhập để trải nghiệm hết các tính năng
              </Text>
              <AppButton
                label="Đăng nhập ngay"
                onPress={() => navigate(routesName.LoginScreen)}
              />
            </View>
          )}
        </View>
        <DialogBase visible={showDeposit}>
          <View>
            <Text className="text-xl font-bold text-left">Thông báo</Text>
            <Text className="text-base text-left mt-1">
              Chúng tôi sẽ điều hướng bạn ra web để có thể thực hiện chức năng
              nạp tiền
            </Text>
            <View className="mt-4 border-t border-gray-300 ">
              <TouchableOpacity
                className="mb-3 pt-2"
                onPress={() => setShowDeposit(false)}>
                <Text className="text-base text-primary text-center">Hủy</Text>
              </TouchableOpacity>
              <AppButton
                label="Xác nhận"
                onPress={() => {
                  setShowDeposit(false);
                  Linking.openURL(LINK_WEB);
                }}
              />
            </View>
          </View>
        </DialogBase>
      </View>
    </LayoutHome>
  );
};
export default ProfileScreen;
