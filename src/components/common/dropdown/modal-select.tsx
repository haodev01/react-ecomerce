import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {svgsNames} from '~/assets/svgs';
import {useInsets} from '~/hooks/use-insets.ts';
import {SvgItem} from '~/components/items';
import {DropdownOptionItem} from '~/components/common/dropdown/dropdown-item.tsx';

interface DropdownOptionFeatureProps {
  title?: string;
  visible: boolean;
  handleClose: any;
  listItem: any[];
  handleSelect: any;
  itemSelect: any;
}

export const ModalSelect = (props: DropdownOptionFeatureProps) => {
  const {
    visible = false,
    handleClose = () => {},
    listItem = [],
    title = '',
    handleSelect,
    itemSelect,
  } = props;

  const {styleInsets, heightScreen} = useInsets();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const styles = StyleSheet.create({
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
      minHeight: heightScreen - 100,
    },
  });

  const onClose = () => {
    handleClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      backdropColor="#222222"
      backdropOpacity={0.6}
      onSwipeComplete={onClose}
      style={styles.bottomModal}>
      <TouchableOpacity activeOpacity={1}>
        <View
          className="w-full bg-f0f rounded-t-3xl relative mt-32 pb-32"
          style={[
            styleInsets.pb,
            {maxHeight: heightScreen - 100, minHeight: heightScreen - 100},
          ]}>
          <TouchableOpacity
            className="w-6 h-6 absolute top-4 right-4 z-10"
            onPress={onClose}
            onLongPress={onClose}>
            <SvgItem name={svgsNames.Close} />
          </TouchableOpacity>
          <View className="w-full px-4 py-6">
            <Text className="text-[22px] text-222 font-semibold">{title}</Text>
            <FlatList
              keyboardShouldPersistTaps="handled"
              data={listItem}
              renderItem={({item}) => (
                <DropdownOptionItem
                  key={item?.value}
                  item={item}
                  handleSelect={handleSelect}
                  isSelected={item?.value === itemSelect?.value}
                />
              )}
              keyExtractor={item => item.value}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
