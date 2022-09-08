import React from 'react';
import {SafeArea as SF} from './styledComponents';
import {ViewProps} from 'react-native';

const SafeArea: React.FC<ViewProps> = ({children, ...props}) => (
  <SF {...props}>{children}</SF>
);

export default SafeArea;
