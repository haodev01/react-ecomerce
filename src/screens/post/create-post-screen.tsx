import {Image, Text, TextInput, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {AppButton} from '~/components/common';
import {base64ToFile} from '~/helpers';

const CreatePostScreen = () => {
  const [title, setTitle] = useState<string>('');
  const [previewImage, setPreviewImage] = useState<string>('');
  const [base64Image, setBase64Image] = useState<string>('');

  const selectImageLibary = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };
    const result = await launchImageLibrary(options);
    // @ts-ignore
    if (result?.assets[0]?.base64) {
      const file = base64ToFile(result?.assets[0]?.base64, 'image.png');
      setBase64Image(result?.assets[0]?.base64);
    }
    // @ts-ignore
    if (result?.assets[0]?.uri) {
      setPreviewImage(result?.assets[0]?.uri);
    }
  };
  return (
    <LayoutCommon>
      <View className="px-4">
        <View className="mb-4 w-full">
          <Text className="text-base mb-1">Tiêu đề bài viết</Text>
          <TextInput
            value={title}
            onChangeText={value => setTitle(value)}
            className="rounded-md border border-1  w-full border-gray-300 px-4"
            placeholder="Tiêu đề  ..."
          />
        </View>
        <AppButton label="Chọn ảnh" onPress={selectImageLibary} />
        {!!previewImage && (
          <Image
            width={300}
            height={300}
            source={{
              uri: previewImage,
            }}
          />
        )}
      </View>
    </LayoutCommon>
  );
};

export default CreatePostScreen;
