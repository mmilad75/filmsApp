import React from 'react';
import {List} from './styledComponents';
import {FlatListProps} from 'react-native';

const MovieHorizontalList: React.FC<FlatListProps<any>> = ({...props}) => (
  <List horizontal={true} showsHorizontalScrollIndicator={false} {...props} />
);

export default MovieHorizontalList;
