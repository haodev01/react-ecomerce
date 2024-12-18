import {Text, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {AppButton} from '~/components/common';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';

const ProfileScreen = () => {
  return (
    <LayoutCommon>
      <View>
        <Text>ProfileScreen</Text>
        <AppButton
          label="Login"
          onPress={() => navigate(routesName.LoginScreen)}
        />
        <AppButton
          label="Register"
          onPress={() => navigate(routesName.RegisterScreen)}
        />
      </View>
    </LayoutCommon>
  );
};
export default ProfileScreen;
