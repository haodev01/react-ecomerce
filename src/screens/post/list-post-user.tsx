import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {listApi} from '~/constants';
import {useFetch} from '~/hooks/use-fetch';
import {LayoutCommon} from '~/components/layouts/layout-common';
import {goBack} from '~/routes/AppStackNavigator';
import {PostItemUser} from '~/components/common/post/post-item-user';

const ListPostUserScreen = () => {
  const [listPost, setListPost] = useState([]);
  const {getManual, deleteManual} = useFetch();

  const getListPostUser = async () => {
    getManual(listApi.GET_POST_USER, {})
      .then((response: any) => {
        console.log(response);
        setListPost(response.returnValue?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleDeletePost = (id: number) => {
    console.log(id);
    deleteManual(listApi.DELETE_POST_USER)
      .then(async () => {
        await getListPostUser();
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getListPostUser().then();
  }, []);
  return (
    <LayoutCommon label="Bài viêt của tôi" onBack={goBack}>
      <ScrollView className="px-4 mt-6">
        <View>
          {listPost?.map((item: any, index: number) => (
            <PostItemUser
              onDelete={handleDeletePost}
              key={index}
              item={item}
              classNameCustom="w-full mb-8"
            />
          ))}
        </View>
      </ScrollView>
    </LayoutCommon>
  );
};
export default ListPostUserScreen;
