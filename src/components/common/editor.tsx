import React from 'react';
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

const handleHead = ({tintColor}: any) => (
  <Text style={{color: tintColor}}>H1</Text>
);

interface Props {
  onChange: any;
}
export const Editor = (props: Props) => {
  const {onChange} = props;
  const richText = React.useRef(null);
  const onPressAddImage = () => {};
  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <Text className="text-base mb-1 mt-2">Nội dung bài viết</Text>
          <RichEditor
            ref={richText}
            onChange={descriptionText => {
              onChange(descriptionText);
              console.log('descriptionText:', descriptionText);
            }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <RichToolbar
        editor={richText}
        actions={[
          actions.undo,
          actions.redo,
          actions.setStrikethrough,
          // actions.checkboxList,
          actions.insertOrderedList,
          actions.blockquote,
          actions.alignLeft,
          actions.alignCenter,
          actions.alignRight,
          actions.code,
          actions.line,

          actions.foreColor,
          actions.hiliteColor,
          actions.heading1,
          actions.heading4,
        ]}
        iconMap={{[actions.heading1]: handleHead}}
        onPressAddImage={onPressAddImage}
      />
    </SafeAreaView>
  );
};
