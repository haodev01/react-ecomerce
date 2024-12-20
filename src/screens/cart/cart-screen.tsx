import {Text, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {goBack} from '~/routes/AppStackNavigator.tsx';

const CartScreen = () => {
  return (
    <LayoutCommon onBack={goBack} label="Giỏ hàng">
      <View className="px-4">
        <Text>Giỏ hàng</Text>
      </View>
    </LayoutCommon>
  );
};

export default CartScreen;
