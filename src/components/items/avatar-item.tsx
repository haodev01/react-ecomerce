import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {svgsNames} from '~/assets/svgs';
import {SvgItem} from '~/components/items/svg-item.tsx';

export const AvatarItem = ({width = 96}) => {
  const avatarUrl = '';
  const styles = StyleSheet.create({
    avatar: {
      width,
      aspectRatio: 1,
    },
  });
  return (
    <View style={styles.avatar}>
      {avatarUrl ? (
        <Image
          source={{uri: avatarUrl}}
          className="w-full h-full rounded-full"
        />
      ) : (
        <SvgItem name={svgsNames.AvatarDefault} width={width} height={width} />
      )}
    </View>
  );
};
