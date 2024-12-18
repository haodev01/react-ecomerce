import {Text, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {AppButton} from '~/components/common';
import {navigate} from '~/routes/AppStackNavigator.tsx';
import {useAppSelector} from '~/store/hooks.ts';
import {useAuth} from '~/hooks/use-auth.tsx';

const HomeScreen = () => {
  const {isLogged} = useAuth();
  console.log({isLogged});
  return (
    <LayoutCommon>
      <View>
        <AppButton label="Login" onPress={() => navigate('LoginScreen')} />
        <AppButton
          label="Register"
          onPress={() => navigate('RegisterScreen')}
        />
      </View>
    </LayoutCommon>
  );
};

export default HomeScreen;
