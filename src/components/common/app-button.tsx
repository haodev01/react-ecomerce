import {Text, TouchableOpacity} from 'react-native';

interface Props {
  label: string,
  onPress : () => void,
  disabled?: boolean
}
export const AppButton = (props: Props) =>  {
  const {label, onPress, disabled = false} = props;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} className="w-full bg-primary rounded-lg h-12 flex items-center justify-center ">
      <Text className="text-center text-base font-bold text-white">{label}</Text>
    </TouchableOpacity>
  );
};
