import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {goBack, navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';
import {CommentItem} from '~/components/common/comment/comment-item.tsx';
import {useRef, useState} from 'react';

export const CommentDetailScreen = () => {
  const [message, setMessage] = useState('');

  const scrollViewRef = useRef(null);

  const handleSendComment = () => {
    setMessage('');
    // @ts-ignore
    scrollViewRef?.current.scrollToEnd({animated: true});
    Keyboard.dismiss();
  };
  return (
    <LayoutCommon label="Bình luận" onBack={goBack}>
      <View className="flex flex-1 justify-between">
        <View className="bg-gray-300 p-2 rounded-md">
          <TouchableOpacity
            onPress={() => {
              navigate(routesName.PostDetailScreen, {
                id: '1',
              });
            }}>
            <Text className="text-[15px]">
              <Text>Binh luận trong bài viết </Text>
              <Text className="font-bold">
                Green Tech: Innovations for a Sustainable Future
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="mt-4 w-full  px-4 " ref={scrollViewRef}>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </ScrollView>
        <View className="p-4 bg-white mt-6 flex flex-row items-center gap-x-2">
          <TextInput
            placeholder="Bình luận"
            value={message}
            onChangeText={(value: string) => setMessage(value)}
            className="border border-1 border-gray-300 p-2 rounded-md flex-1"
          />
          <TouchableOpacity onPress={handleSendComment}>
            <Text className="w-10 ">Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutCommon>
  );
};
