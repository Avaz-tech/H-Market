import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {commonStyles} from '../../Styles';

function LightButton({title, onPress, type = 'outlined'}) {
  const btnBgColor = type === 'filled' ? '#ffffff' : 'transparent';
  const btnTextColor = type === 'filled' ? ' #53565A' : '#ffffff';
  const border = type === 'filled' ? 0 : 1;
  const containerCommonStyle = {
    backgroundColor: btnBgColor,
    width: 100 + '%',
    borderRadius: 4,
    borderWidth: border,
    borderColor: 'white',
    ...commonStyles.defaultBtn,
  };

  const textCommonStyle = {
    color: btnTextColor,
    ...commonStyles.defaultBtnText,
  };
  return (
    <TouchableOpacity onPress={onPress} style={containerCommonStyle}>
      <Text style={textCommonStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default LightButton;
