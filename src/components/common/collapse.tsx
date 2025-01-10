import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RenderHtml} from '~/components/common/render-html.tsx';

interface CollapseItem {
  index: number;
  label: string;
  children: React.ReactNode; // HTML hoặc component React khác
}

interface CollapseProps {
  items: CollapseItem[];
}

const Collapse: React.FC<CollapseProps> = ({items}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View className="w-full space-y-2">
      {items?.map(item => (
        <View key={item?.key} className="border border-gray-300 rounded-lg">
          <TouchableOpacity
            onPress={() => toggleItem(item?.key)}
            className="p-2 bg-gray-100 rounded-t-lg">
            <Text className="text-lg font-medium">{item?.label}</Text>
          </TouchableOpacity>
          {activeIndex === item?.key && (
            <View className="p-4 bg-white rounded-b-lg">
              <RenderHtml source={item?.children} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Collapse;
