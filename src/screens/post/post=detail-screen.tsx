import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {
  CommonNavigatorParams,
  goBack,
  navigate,
} from '~/routes/AppStackNavigator.tsx';
import {listApi, routesName} from '~/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {RenderHtml} from '~/components/common/render-html.tsx';
import React from 'react';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'PostDetailScreen'>;
const PostDetailScreen = (props: Props) => {
  const {route} = props;
  const id = route.params?.id;

  const [postDetail, setPostDetail] = useState<any>({});

  const {getManual} = useFetch();

  const getPostDetail = async () => {
    getManual(`${listApi.POST_DETAIL}/${id}`, {}).then((response: any) => {
      setPostDetail(response?.returnValue);
    });
  };

  useEffect(() => {
    getPostDetail().then();
  }, [id]);

  return (
    <LayoutCommon label={postDetail?.title} onBack={goBack}>
      <ScrollView className="mt-4 px-4" showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: postDetail?.image}}
          className="w-ful h-[250px] rounded-lg"
        />
        <View className="mt-2">
          <TouchableOpacity
            onPress={async () => {
              await navigate(routesName.CommentDetailScreen, {
                id: postDetail?.id,
                title: postDetail?.title,
              });
            }}>
            <Text>Bình luận</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-lg font-bold mt-2">{postDetail?.title}</Text>
        <RenderHtml source={postDetail?.currentContent} />
      </ScrollView>
    </LayoutCommon>
  );
};
export default PostDetailScreen;
