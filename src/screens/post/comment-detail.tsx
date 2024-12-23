import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {
  CommonNavigatorParams,
  goBack,
  navigate,
} from '~/routes/AppStackNavigator.tsx';
import {listApi, routesName} from '~/constants';
import {CommentItem} from '~/components/common/comment/comment-item.tsx';
import {useEffect, useRef, useState} from 'react';
import {useFetch} from '~/hooks/use-fetch.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useToast} from '~/hooks/use-toast.ts';
import Toast from 'react-native-toast-message';
import show = Toast.show;

type Props = NativeStackScreenProps<
  CommonNavigatorParams,
  'CommentDetailScreen'
>;

export const CommentDetailScreen = (props: Props) => {
  const {route} = props;
  const {id, title = ''} = route.params;
  const inputRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState('');
  const [message, setMessage] = useState('');
  const [listComment, setListComment] = useState<any>([]);

  const {showToast} = useToast();
  const {getManual, postManual, deleteManual, putManual} = useFetch();

  const getListComment = async () => {
    getManual(listApi.GET_COMMENT, {
      postId: id,
    })
      .then((response: any) => {
        setListComment(response.returnValue?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getListComment().then();
  }, [id]);

  const scrollViewRef = useRef(null);

  const handleSendComment = () => {
    if (!message) {
      return showToast('Vui lòng nhập nội dung bình luận', 'error');
    }
    if (isEdit) {
      putManual(listApi.GET_COMMENT, {
        content: message,
        commentId: idEdit,
      })
        .then(async () => {
          setMessage('');
          // @ts-ignore
          scrollViewRef?.current.scrollToEnd({animated: true});
          Keyboard.dismiss();
          await getListComment();
        })
        .catch(error => {
          console.log(error);
        });
      return;
    }
    postManual(listApi.GET_COMMENT, {
      content: message,
      parrentCommentId: 1,
      postId: id,
    })
      .then(async () => {
        setMessage('');
        // @ts-ignore
        scrollViewRef?.current.scrollToEnd({animated: true});
        Keyboard.dismiss();
        await getListComment();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleDeleteComment = (id: number) => {
    deleteManual(`${listApi.GET_COMMENT}/${id}`)
      .then(async () => {
        showToast('Xóa bình luận thành công');
        await getListComment();
      })
      .catch((error: any) => {
        console.log(error);
        showToast('Có lỗi xảy ra', 'error');
      });
  };
  const handleCloseEdit = () => {
    setIsEdit(false);
    Keyboard.dismiss();
    setMessage('');
    setIdEdit('');
  };
  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', handleCloseEdit);
  }, []);
  return (
    <LayoutCommon label="Bình luận" onBack={goBack}>
      <View className="flex flex-1 justify-between">
        <View className="bg-gray-300 p-2 rounded-md">
          <TouchableOpacity
            onPress={async () => {
              await navigate(routesName.PostDetailScreen, {
                id,
              });
            }}>
            <Text className="text-[15px]">
              <Text>Binh luận trong bài viết </Text>
              <Text className="font-bold">{title}</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="mt-4 w-full  px-4 " ref={scrollViewRef}>
          <View>
            {!listComment?.length && (
              <Text className="text-center text-base">
                Chưa có bình luận nào cho bài viết
              </Text>
            )}
            {listComment?.map((item: any, index: number) => (
              <CommentItem
                comment={item}
                key={index}
                onEdit={() => {
                  setMessage(item.content);
                  setIsEdit(true);
                  setIdEdit(item.id);
                  // @ts-ignore
                  inputRef?.current?.focus();
                }}
                onDelete={() => {
                  handleDeleteComment(item.id);
                }}
              />
            ))}
          </View>
        </ScrollView>
        <View className="p-4 bg-white mt-6 flex flex-row items-center gap-x-2">
          <TextInput
            multiline={true}
            textBreakStrategy="simple"
            ref={inputRef}
            placeholder="Bình luận"
            value={message}
            onChangeText={(value: string) => setMessage(value)}
            className="border border-1 border-gray-300 p-2 rounded-md flex-1"
          />
          <View className="flex flex-row">
            <TouchableOpacity onPress={handleSendComment}>
              <Text className="w-10 ">Gửi</Text>
            </TouchableOpacity>
            {isEdit && (
              <TouchableOpacity onPress={handleCloseEdit}>
                <Text className=" text-red-500">Hủy</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </LayoutCommon>
  );
};
