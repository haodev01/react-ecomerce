import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {PropsWithChildren} from 'react';
import {TheHeader} from '~/components/blocks';
interface Props extends PropsWithChildren {
  label?: string;
  onBack?: () => void;
}

export const LayoutCommon = (props: Props) => {
  const {children, label, onBack = () => {}} = props;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="w-full flex-1">
      <TheHeader onPressBack={onBack} label={label} />
      <TouchableWithoutFeedback
        className="w-full flex-1"
        onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
