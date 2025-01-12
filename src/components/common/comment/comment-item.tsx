import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SvgItem} from '~/components/items';
import {svgsNames} from '~/assets/svgs';
import {formatTimeAgo} from '~/helpers';
import {useAuth} from '~/hooks/use-auth.tsx';
import React from 'react';
interface Props {
  comment: any;
  onDelete?: () => void;
  onEdit?: () => void;
}
export const CommentItem = (props: Props) => {
  const {comment, onDelete, onEdit} = props;
  const {user} = useAuth();
  return (
    <View className="bg-gray-300  rounded-lg w-full p-2 mb-2">
      <View className="flex  flex-row justify-between ">
        <View className="flex flex-row items-center">
          {comment?.user?.avatar ? (
            <Image
              className="rounded-full"
              source={{uri: comment?.user?.avatar}}
              width={24}
              height={24}
            />
          ) : (
            <SvgItem name={svgsNames.AvatarDefault} width={24} height={24} />
          )}
          <Text className="text-gray-500 text-[15px] font-medium inline bg-gray-300 ml-2 mr-4 ">
            {comment?.user?.username}
          </Text>
          <Text className=" text-xs inline text-gray-500 ">
            {formatTimeAgo(comment?.createdAt)}
          </Text>
        </View>
        {comment?.user?.id === user?.id && (
          <View className="ml-10 flex flex-row">
            <TouchableOpacity onPress={onEdit} className="mr-2">
              <Text className="text-primary text-xs">Sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
              <Text className="text-red-500 text-xs">Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Text className="mt-2 text-md">{comment?.content}</Text>
    </View>
  );
};
