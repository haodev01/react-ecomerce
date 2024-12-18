import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {PropsWithChildren} from 'react';
interface Props extends PropsWithChildren {}

export const LayoutCommon = (props: Props) => {
  const {children} = props;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="w-full flex-1 px-4">
      <TouchableWithoutFeedback
        className="w-full flex-1"
        onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
