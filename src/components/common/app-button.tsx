import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  classCustom?: string;
}
export const AppButton = (props: Props) => {
  const {label, onPress, disabled = false, classCustom = ''} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={`w-full bg-primary rounded-lg h-12 flex items-center justify-center ${classCustom} `}>
      <Text className="text-center text-base font-bold text-white">
        {label}
      </Text>
    </TouchableOpacity>
  );
};
