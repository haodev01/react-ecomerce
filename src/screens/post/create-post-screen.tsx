import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {AppButton} from '~/components/common';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {Editor} from '~/components/common/editor';
import ImagePickerComponent from '~/components/common/image-picker';
import {listApi, routesName} from '~/constants';
import {useFetch} from '~/hooks/use-fetch';
import {useToast} from '~/hooks/use-toast';
import {goBack, navigate} from '~/routes/AppStackNavigator';

const CreatePostScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [base64Image, setBase64Image] = useState<string>('');

  const [content, setContent] = useState<string>('');

  const {postManual} = useFetch();
  const {showToast} = useToast();

  const handleCreatePost = () => {
    if (!title || !content || !base64Image) {
      return showToast('Vui lòng nhập đày đủ thông tin', 'error');
    }
    postManual(listApi.CREATE_POST, {
      title,
      content,
      base64Image,
    })
      .then(async () => {
        showToast('Tạo bài viết thành công', 'success');
        await navigate(routesName.TabHome, {}, true);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <LayoutCommon label="Tạo bài viết" onBack={goBack}>
      <View className="px-4 mt-6">
        <ImagePickerComponent setBase64Image={setBase64Image} />
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
        <View className="mt-5">
          <AppButton label="Tạo bài viết" onPress={handleCreatePost} />
        </View>
      </View>
    </LayoutCommon>
  );
};

export default CreatePostScreen;
