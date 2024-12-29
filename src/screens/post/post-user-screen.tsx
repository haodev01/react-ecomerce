import {Text, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {goBack} from '~/routes/AppStackNavigator.tsx';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {useEffect, useState} from 'react';
import {listApi} from '~/constants';

const PostUserScreen = () => {
  const [listPost, setListPost] = useState([]);
  const {getManual} = useFetch();

  const getListPost = async () => {
    await getManual(listApi.GET_LIST_POST_USER, {})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    getListPost().then();
  }, []);
  return (
    <LayoutCommon label="Danh sách bài viết" onBack={goBack}>
      <View>
        <Text>Danh sách bài viết</Text>
      </View>
    </LayoutCommon>
  );
};
export default PostUserScreen;
