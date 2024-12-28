import React, {useState} from 'react';
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
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'EditPostScreen'>;
const EditPostScreen = (props: Props) => {
  const {route} = props;
  const id = route.params?.id;
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
      topic: 'SUGGEST',
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

export default EditPostScreen;
