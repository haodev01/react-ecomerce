import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LayoutCommon} from '~/components/layouts/layout-common.tsx';
import {
  getCurrentRouteName,
  goBack,
  navigate,
} from '~/routes/AppStackNavigator.tsx';
import {formatVND} from '~/helpers';
import {AppButton} from '~/components/common';
import {SvgItem} from '~/components/items';
import {svgsNames} from '~/assets/svgs';
import {useState} from 'react';
import {DialogContact} from '~/components/common/modal/dialog-contact.tsx';
import {routesName} from '~/constants';
import {useAuth} from '~/hooks/use-auth.tsx';
import React from 'react';

const post = {
  title:
    'Miền Tây: Cần Thơ - Cà Mau - Đất Mũi - Bạc Liêu - Sóc Trăng - Trải Nghiệm gói bánh tét Tết, làm mứt gừng | Mâm cỗ ngày Tết ',
  description: `
Artificial Intelligence (AI) has evolved dramatically over the past decade, moving from a niche technology to a cornerstone of innovation in virtually every industry. In 2024, AI continues to redefine the boundaries of what machines can do, offering groundbreaking advancements in areas such as natural language processing, computer vision, robotics, and decision-making systems.

The opportunities presented by AI are immense. For example, in healthcare, AI-powered tools are enabling early disease detection through medical imaging, personalized treatment plans based on genetic data, and even robotic-assisted surgeries. In education, AI-driven platforms provide personalized learning experiences, catering to each student's pace and style of learning. Moreover, in transportation, self-driving cars powered by AI are set to reduce traffic accidents and improve fuel efficiency.

However, alongside these opportunities come significant challenges. One of the most pressing concerns is ethical AI development. Ensuring that AI systems are unbiased and fair remains a formidable task, particularly when training data often reflects human prejudices. Another challenge lies in job displacement, as automation continues to replace tasks traditionally performed by humans. Industries such as manufacturing and logistics are particularly vulnerable to this shift, raising concerns about economic inequality and workforce reskilling.

Privacy is another critical issue. With AI systems requiring vast amounts of data to function effectively, individuals' personal information is often collected, stored, and analyzed at an unprecedented scale. This raises questions about how data is used, who controls it, and how individuals can protect their privacy in an increasingly connected world.

Despite these challenges, governments, academia, and private companies are collaborating to create frameworks and regulations that ensure AI is developed responsibly. Initiatives focusing on explainable AI (XAI) aim to make AI systems more transparent and understandable, helping build trust among users. Furthermore, advancements in AI safety research are paving the way for technologies that are robust, reliable, and aligned with human values.

In conclusion, the future of AI is both exciting and complex. As we navigate this rapidly evolving landscape, it is crucial to strike a balance between harnessing AI's potential and addressing its challenges. By doing so, we can ensure that AI serves as a force for good, driving innovation while safeguarding ethical principles and societal well-being.
  `,
  created_time: '2024-10-10',
  listImage: [
    'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
    'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
    'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
    'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
    'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
  ],
  image:
    'https://media.travel.com.vn/LastMinute/lm__2412184_mbkshoppingmall.webp',
};
const TourDetailScreen = () => {
  const [visible, setVisible] = useState(false);
  const {isLogged} = useAuth();

  const handlePress = async () => {
    if (!isLogged) {
      return navigate(routesName.LoginScreen, {
        screen: getCurrentRouteName(),
        id: '1',
      });
    }
  };

  return (
    <LayoutCommon label={post?.title} onBack={goBack}>
      <View className="flex justify-between flex-1">
        <ScrollView
          className="mt-4 px-4 flex-1 "
          showsVerticalScrollIndicator={false}>
          <Text className="text-xl  font-bold mt-2">{post?.title}</Text>
          <ScrollView horizontal={true} className="mt-4">
            {post.listImage.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                className="w-[300px] h-[250px] rounded-lg mr-2"
              />
            ))}
          </ScrollView>
          <Text className="text-base text-align">{post?.description}</Text>
        </ScrollView>
        <View className="w-full p-4 bg-white">
          <View className="flex items-center flex-row justify-between">
            <Text className="font-bold text-base ">Giá từ:</Text>
            <Text className="text-lg font-bold text-primary">
              {formatVND(10000000)}
              <Text className="text-gray-500 font-normal">/khách</Text>
            </Text>
          </View>
          <View className="flex flex-row mt-4">
            <View className="flex flex-row  mr-6">
              <TouchableOpacity className="w-10 h-10 bg-primary rounded-md mr-2 flex items-center justify-center">
                <SvgItem name={svgsNames.IconPhone} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                className="w-10 h-10 bg-primary rounded-md mr-2 flex items-center justify-center">
                <SvgItem name={svgsNames.IconContact} />
              </TouchableOpacity>
            </View>
            <AppButton
              classCustom="h-10 flex-1"
              label="Đặt ngay"
              onPress={handlePress}
            />
          </View>
        </View>
        <DialogContact visible={visible} onHide={() => setVisible(false)} />
      </View>
    </LayoutCommon>
  );
};
export default TourDetailScreen;
