import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {AppButton} from '~/components/common';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {Editor} from '~/components/common/editor';
import ImagePickerComponent from '~/components/common/image-picker';
import {listApi, routesName} from '~/constants';
import {useFetch} from '~/hooks/use-fetch';
import {useToast} from '~/hooks/use-toast';
import {
  CommonNavigatorParams,
  goBack,
  navigate,
} from '~/routes/AppStackNavigator';
import {uploadBase64ToCloudinary} from '~/helpers';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'EditPostScreen'>;

const EditPostScreen = (props: Props) => {
  const {route} = props;
  const id = route.params?.id ?? '';
  const [title, setTitle] = useState<string>('');
  const [base64Image, setBase64Image] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [isLoading, setIsLoading] = useState(true);

  const {putManual, getManual} = useFetch();
  const {showToast} = useToast();
  const getPostDetail = async () => {
    setIsLoading(true);
    getManual(`${listApi.POST_DETAIL}/${id}`, {})
      .then((response: any) => {
        console.log(response?.returnValue?.image);
        setTitle(response?.returnValue?.title);
        setContent(response?.returnValue?.currentContent ?? '');
        setBase64Image(response?.returnValue?.image ?? '');
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    getPostDetail();
  }, []);

  const handleEditPost = async () => {
    let imageUrl: string | undefined;
    if (base64Image.length > 1000) {
      const response = await uploadBase64ToCloudinary(base64Image);
      imageUrl = response?.url;
    } else {
      imageUrl = base64Image;
    }
    if (!title || !content || !imageUrl) {
      return showToast('Vui lòng nhập đày đủ thông tin', 'error');
    }
    putManual(listApi.CREATE_POST, {
      postId: id,
      title,
      content,
      image: imageUrl,
      topic: 'SUGGEST',
    })
      .then(async () => {
        showToast('Sửa  bài viết thành công', 'success');
        await navigate(routesName.TabHome, {}, true);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <LayoutCommon label="Tạo bài viết" onBack={goBack}>
      <ScrollView className="px-4 mt-6">
        <View className="my-4 w-full">
          <Text className="text-base mb-1">Tiêu đề bài viết</Text>
          <TextInput
            value={title}
            onChangeText={value => setTitle(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Tiêu đề  ..."
          />
        </View>
        {!isLoading && (
          <Editor
            onChange={(value: string) => setContent(value)}
            content={content}
          />
        )}
        {!isLoading && (
          <ImagePickerComponent
            imageInit={base64Image}
            setBase64Image={setBase64Image}
          />
        )}
        <View className="mt-5 mb-6">
          <AppButton label="Sửa bài viết" onPress={handleEditPost} />
        </View>
      </ScrollView>
    </LayoutCommon>
  );
};

export default EditPostScreen;
