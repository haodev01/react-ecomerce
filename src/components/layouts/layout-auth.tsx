import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {PropsWithChildren} from 'react';
import {TheHeader} from '~/components/blocks/the-header.tsx';
interface Props extends PropsWithChildren {
  onBack?: () => void;
}

export const LayoutAuth = (props: Props) => {
  const {children, onBack = () => {}} = props;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="w-full flex-1  bg-f0f">
      <TheHeader onPressBack={onBack} />
      <TouchableWithoutFeedback
        className="w-full flex-1"
        onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
