import {View, Text} from 'react-native';
import {goBack, navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';
import {LayoutHome} from '~/components/layouts/layout-home.tsx';
import {svgsNames} from '~/assets/svgs';
import {TabMenuItem} from '~/components/common/tab-menu-item.tsx';
import {useAuth} from '~/hooks/use-auth.tsx';
import {AppButton} from '~/components/common';

const tabMenu = [
  {
    id: 1,
    label: 'Thông tin tài khoản',
    icon: svgsNames.IconProfile,
    route: routesName.HomeScreen,
  },
  {
    id: 1,
    label: 'Viết bài',
    icon: svgsNames.IconProfile,
    route: routesName.CreatePostScreen,
  },
  {
    id: 1,
    label: 'Danh sách bài viết',
    icon: svgsNames.IconProfile,
    route: routesName.ListPostUserScreen,
  },
  {
    id: 1,
    label: 'Chuyến đi của bạn',
    icon: svgsNames.IconProfile,
    route: routesName.ListTourUserScreen,
  },
  {
    id: 1,
    label: 'Đăng xuât',
    icon: svgsNames.IconLogout,
    action: 'logout',
  },
];

const ProfileScreen = () => {
  const {isLogged} = useAuth();
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
      </View>
    </LayoutHome>
  );
};
export default ProfileScreen;
