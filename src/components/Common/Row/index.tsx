import React from 'react';
import {ViewProps} from 'react-native';
import {View} from './styledComponents';

const Row: React.FC<ViewProps> = ({children, ...props}) => (
  <View {...props}>{children}</View>
);

export default Row;
