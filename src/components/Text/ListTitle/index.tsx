import React from 'react';
import {Title} from './styledComponents';
import {TextProps} from 'react-native';

const ListTitle: React.FC<TextProps> = ({children, ...props}) => {
  return <Title {...props}>{children}</Title>;
};

export default ListTitle;
