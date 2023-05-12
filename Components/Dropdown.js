import React, {useRef} from 'react';
import SelectDropdown from 'react-native-select-dropdown';

export const DropdownComp = props => {
  const {
    defaultBtnText,
    data,
    onSelect,
    refference,
    buttonTextAfterSelection,
    rowTextForSelection,
  } = props;
  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      buttonTextAfterSelection={buttonTextAfterSelection}
      rowTextForSelection={rowTextForSelection}
      ref={refference}
      defaultButtonText={defaultBtnText}
      buttonStyle={{
        padding: 5,
        borderWidth: 1,
        borderColor: 'BLACK',
        width: '100%',
        backgroundColor:'#AEE2FF'
      }}
      rowStyle={{
        backgroundColor: '#DAF5FF',
      }}
      dropdownStyle={{
        borderRadius: 20,
      }}
    />
  );
};
