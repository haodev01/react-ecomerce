import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {DropdownAddress} from '~/components/common/dropdown/dropdown-address.tsx';
import {POST_TOPIC} from '~/constants/data.ts';

type Props = NativeStackScreenProps<CommonNavigatorParams, 'EditPostScreen'>;

const EditPostScreen = (props: Props) => {
  const {route} = props;
  const id = route.params?.id ?? '';
  const [title, setTitle] = useState<string>('');
  const [base64Image, setBase64Image] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [itemSelect, setItemSelect] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);

  const {putManual, getManual} = useFetch();
  const {showToast} = useToast();
  const getPostDetail = async () => {
    setIsLoading(true);
    getManual(`${listApi.POST_DETAIL}/${id}`, {})
      .then((response: any) => {
        console.log(response?.returnValue);
        const item = POST_TOPIC.find(
          item => item.value === response?.returnValue?.topic,
        );
        setItemSelect(item);
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
    setIsLoadingCreate(true);
    if (base64Image.length > 1000) {
      const response = await uploadBase64ToCloudinary(base64Image);
      imageUrl = response?.url;
    } else {
      imageUrl = base64Image;
    }
    if (!title || !content || !imageUrl) {
      setIsLoadingCreate(false);
      return showToast('Vui lòng nhập đày đủ thông tin', 'error');
    }
    setIsLoadingCreate(true);
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
      })
      .finally(() => setIsLoadingCreate(false));
  };
  return (
    <LayoutCommon label="Sửa bài viết" onBack={goBack}>
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
          <View className="my-4 w-full">
            <Text className="text-base mb-1">Danh mục bài viết</Text>
            <DropdownAddress
              listItem={POST_TOPIC}
              label="Danh mục bài viết"
              handleSelect={(item: any) => {
                setItemSelect(item);
              }}
              itemSelect={itemSelect}
            />
          </View>
        )}
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
          {isLoadingCreate ? (
            <TouchableOpacity
              className={
                'w-full bg-primary rounded-lg h-12 flex items-center justify-center  '
              }>
              <ActivityIndicator size="small" color="white" />
            </TouchableOpacity>
          ) : (
            <AppButton label="Sửa bài viết" onPress={handleEditPost} />
          )}
        </View>
      </ScrollView>
    </LayoutCommon>
  );
};

export default EditPostScreen;
