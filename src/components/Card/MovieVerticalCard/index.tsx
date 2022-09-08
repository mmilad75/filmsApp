import React, {memo} from 'react';
import {renderImageUrl} from '../../../helpers/functions';
import {Movie} from '../../../state/genre/interfaces';
import {Image, Title, Container} from './styledComponents';
import {HomeStackParamsList} from '../../../navigators/HomeStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {WishlistStackParamsList} from '../../../navigators/WishlistStack';

interface Props {
  item: Movie;
  onPress: () => void;
}

export type navigationType = StackNavigationProp<
  HomeStackParamsList & WishlistStackParamsList,
  'home.home'
>;

const MovieCard: React.FC<Props> = ({item, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Image
        resizeMode="contain"
        source={{uri: renderImageUrl(item.poster_path)}}
      />
      <Title>{item.title}</Title>
    </Container>
  );
};

function arePropsEqual(prevProps: Props, nextProps: Props) {
  return prevProps.item.id === nextProps.item.id;
}

export default memo(MovieCard, arePropsEqual);
