import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {goBack, navigate} from '~/routes/AppStackNavigator.tsx';
import {routesName} from '~/constants';

const post = {
  title: 'Green Tech: Innovations for a Sustainable Future',
  description: `
Artificial Intelligence (AI) has evolved dramatically over the past decade, moving from a niche technology to a cornerstone of innovation in virtually every industry. In 2024, AI continues to redefine the boundaries of what machines can do, offering groundbreaking advancements in areas such as natural language processing, computer vision, robotics, and decision-making systems.

The opportunities presented by AI are immense. For example, in healthcare, AI-powered tools are enabling early disease detection through medical imaging, personalized treatment plans based on genetic data, and even robotic-assisted surgeries. In education, AI-driven platforms provide personalized learning experiences, catering to each student's pace and style of learning. Moreover, in transportation, self-driving cars powered by AI are set to reduce traffic accidents and improve fuel efficiency.

However, alongside these opportunities come significant challenges. One of the most pressing concerns is ethical AI development. Ensuring that AI systems are unbiased and fair remains a formidable task, particularly when training data often reflects human prejudices. Another challenge lies in job displacement, as automation continues to replace tasks traditionally performed by humans. Industries such as manufacturing and logistics are particularly vulnerable to this shift, raising concerns about economic inequality and workforce reskilling.

Privacy is another critical issue. With AI systems requiring vast amounts of data to function effectively, individuals' personal information is often collected, stored, and analyzed at an unprecedented scale. This raises questions about how data is used, who controls it, and how individuals can protect their privacy in an increasingly connected world.

Despite these challenges, governments, academia, and private companies are collaborating to create frameworks and regulations that ensure AI is developed responsibly. Initiatives focusing on explainable AI (XAI) aim to make AI systems more transparent and understandable, helping build trust among users. Furthermore, advancements in AI safety research are paving the way for technologies that are robust, reliable, and aligned with human values.

In conclusion, the future of AI is both exciting and complex. As we navigate this rapidly evolving landscape, it is crucial to strike a balance between harnessing AI's potential and addressing its challenges. By doing so, we can ensure that AI serves as a force for good, driving innovation while safeguarding ethical principles and societal well-being.
  `,
  created_time: '2024-10-10',
  image:
    'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
};
const PostDetailScreen = () => {
  return (
    <LayoutCommon label={post?.title} onBack={goBack}>
      <ScrollView className="mt-4 px-4" showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: post?.image}}
          className="w-ful h-[250px] rounded-lg"
        />
        <View className="mt-2">
          <TouchableOpacity
            onPress={async () => {
              await navigate(routesName.CommentDetailScreen);
            }}>
            <Text>Bình luận</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-lg font-bold mt-2">{post?.title}</Text>
        <Text>{post?.description}</Text>
      </ScrollView>
    </LayoutCommon>
  );
};
export default PostDetailScreen;
