import {FlatList, ScrollView, Text, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {PostItem} from '~/components/common/post/post-item.tsx';
import {techBlogs} from '~/constants/data.ts';
import {goBack} from '~/routes/AppStackNavigator.tsx';

const PostScreen = () => {
  return (
    <LayoutCommon label="Bài viết" onBack={goBack}>
      <View className="px-4   flex-1 w-full ">
        <Text className="font-bold text-xl mb-4">Danh sách bài viết</Text>
        <ScrollView className="pb-[120px]" showsVerticalScrollIndicator={false}>
          <View className="pb-[120px]">
            {techBlogs.map((item, index) => (
              <PostItem
                customImage="h-[200px]"
                classNameCustom="w-full mb-4 "
                item={item}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </LayoutCommon>
  );
};
export default PostScreen;
