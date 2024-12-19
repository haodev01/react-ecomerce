import {Text} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {goBack} from '~/routes/AppStackNavigator.tsx';

const TourScreen = () => {
  return (
    <LayoutCommon label="Tour" onBack={goBack}>
      <Text>Tour</Text>
    </LayoutCommon>
  );
};
export default TourScreen;
