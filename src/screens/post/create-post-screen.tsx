import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {AppButton} from '~/components/common';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {Editor} from '~/components/common/editor';
import ImagePickerComponent from '~/components/common/image-picker';
import {listApi, routesName} from '~/constants';
import {useFetch} from '~/hooks/use-fetch';
import {useToast} from '~/hooks/use-toast';
import {goBack, navigate} from '~/routes/AppStackNavigator';
import {uploadBase64ToCloudinary} from '~/helpers';

const CreatePostScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [base64Image, setBase64Image] = useState<string>('');

  const [content, setContent] = useState<string>('');

  const {postManual} = useFetch();
  const {showToast} = useToast();

  const handleCreatePost = async () => {
    const response = await uploadBase64ToCloudinary(base64Image);
    const imageUrl = response?.url;
    if (!title || !content || !imageUrl) {
      return showToast('Vui lòng nhập đày đủ thông tin', 'error');
    }
    postManual(listApi.CREATE_POST, {
      title,
      content,
      image: imageUrl,
      topic: 'SUGGEST',
    })
      .then(async response => {
        console.log(response);
        showToast('Tạo bài viết thành công', 'success');
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
        <Editor onChange={(value: string) => setContent(value)} />
        <ImagePickerComponent setBase64Image={setBase64Image} />
        <View className="mt-5 mb-6">
          <AppButton label="Tạo bài viết" onPress={handleCreatePost} />
        </View>
      </ScrollView>
    </LayoutCommon>
  );
};

export default CreatePostScreen;
