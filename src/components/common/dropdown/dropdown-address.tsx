import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {svgsNames} from '~/assets/svgs';
import {SvgItem} from '~/components/items';
import {ModalSelect} from '~/components/common/dropdown/modal-select.tsx';

interface Props {
  hasBorder?: boolean;
  isDisable?: boolean;
  listItem: any[];
  label: string;
  handleSelect: any;
  itemSelect: any;
  classCustom?: string;
}
export const DropdownAddress = (props: Props) => {
  const {
    hasBorder = true,
    isDisable,
    label = '',
    listItem,
    handleSelect,
    itemSelect,
    classCustom = '',
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  const backgroundDropdown = !isDisable ? 'bg-white' : 'bg-dede';
  const borderDropDown = hasBorder ? 'rounded-lg border border-gray-300' : '';
  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };
  const textSizeTitle = itemSelect?.name ? 'text-[12px]' : 'text-[12px]';
  return (
    <TouchableOpacity
      disabled={isDisable}
      className={`relative flex-1  ${classCustom} ${borderDropDown}`}
      onPress={handleOpenModal}>
      <View
        className={`rounded-xl  flex-row h-10 px-[16px] py-2 items-center ${backgroundDropdown}`}>
        <View className="flex-1">
          <Text className={`${textSizeTitle} text-gray-500 items-center`}>
            {label}
          </Text>
          {itemSelect?.value && (
            <Text className="text-[14px] text-222 items-center">
              {itemSelect?.label}
            </Text>
          )}
        </View>
        <SvgItem name={svgsNames.IconArrowDown} width={16} height={16} />
      </View>
      <ModalSelect
        title={label}
        visible={isVisible}
        listItem={listItem}
        itemSelect={itemSelect}
        handleClose={handleCloseModal}
        handleSelect={(item: any) => {
          handleCloseModal();
          handleSelect(item);
        }}
      />
    </TouchableOpacity>
  );
};
