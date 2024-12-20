import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {SvgItem} from '~/components/items';
import {useInsets} from '~/hooks/use-insets.ts';
import {svgsNames} from '~/assets/svgs';

interface DialogBaseProps {
  visible: boolean;
  close?: any;
  children?: any;
  hasBtnClose?: boolean;
  onHide?: any;
}

export const DialogBase = (props: DialogBaseProps) => {
  const {
    visible,
    close = () => {},
    onHide = () => {},
    children,
    hasBtnClose = false,
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);
  const {widthScreen} = useInsets();

  const styles = StyleSheet.create({
    bottomModal: {
      justifyContent: 'center',
      margin: 0,
    },
    container: {
      width: widthScreen - 48,
      maxWidth: 400,
    },
  });

  const handleClose = () => {
    close();
  };

  const onBackdropPress = () => {
    //
    onHide();
  };

  return (
    <Modal
      isVisible={isVisible}
      animationOutTiming={50}
      animationInTiming={50}
      backdropTransitionOutTiming={0}
      backdropColor="#222222"
      backdropOpacity={0.6}
      onBackdropPress={onBackdropPress}
      style={styles.bottomModal}
      onModalHide={onHide}>
      <View className="w-full">
        {visible && (
          <View
            style={styles.container}
            className="mx-auto rounded-2xl bg-f0f relative">
            {hasBtnClose && (
              <TouchableOpacity
                className="w-6 h-6 z-10 absolute top-4 right-4"
                onPress={handleClose}>
                <SvgItem name={svgsNames.AvatarDefault} />
              </TouchableOpacity>
            )}
            <View className="w-full p-6">{children}</View>
          </View>
        )}
      </View>
    </Modal>
  );
};
