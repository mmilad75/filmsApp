import React, {useEffect, useState} from 'react';
import {renderImageUrl} from '../../../helpers/functions';
import {
  Title,
  WishlistButton,
  ButtonText,
  Key,
  Value,
  RightArea,
  Description,
  Image,
} from './styledComponents';
import Container from '../../../components/Common/Container';
import Row from '../../../components/Common/Row';
import {setWishlist} from '../../../state/wishlist/actions';
import {useDispatch, useSelector} from '../../../helpers/hooks';
import {RouteProp} from '@react-navigation/native';
import {WishlistStackParamsList} from '../../../navigators/WishlistStack';
import {HomeStackParamsList} from '../../../navigators/HomeStack';

interface Props {
  route: RouteProp<
    WishlistStackParamsList & HomeStackParamsList,
    'wishlist.movieDetail' | 'home.movieDetail'
  >;
}

const DetailScreen: React.FC<Props> = ({route}) => {
  const item = route?.params?.item;
  const parent = route.params?.parent;

  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const [buttonTitle, setButtonTitle] = useState('');

  useEffect(() => {
    const movieExists = wishlist.data.find(movie => movie.id === item?.id);
    if (movieExists !== undefined) {
      let name;
      switch (parent.name) {
        case 'action':
          name = 'Action Remove Wishlist';
          break;
        case 'comedy':
          name = 'Comedy Remove Wishlist';
          break;
        case 'drama':
          name = 'Drama Remove Wishlist';
          break;
        default:
          name = '';
          break;
      }
      setButtonTitle(name);
    } else {
      let name;
      switch (parent.name) {
        case 'action':
          name = 'Action To Wishlist';
          break;
        case 'comedy':
          name = 'Comedy To Wishlist';
          break;
        case 'drama':
          name = 'Drama To Wishlist';
          break;
        default:
          name = '';
          break;
      }
      setButtonTitle(name);
    }
  }, [item?.id, parent.name, wishlist]);

  const onSetWishlistPress = () => {
    if (item) {
      dispatch(setWishlist(item));
    }
  };

  return (
    <Container>
      {item?.title && <Title>{item.title}</Title>}
      <Row>
        {item?.poster_path && (
          <Image
            resizeMode="contain"
            source={{
              uri: renderImageUrl(item.poster_path),
            }}
          />
        )}
        <RightArea>
          <WishlistButton
            parentScreen={parent.name}
            onPress={onSetWishlistPress}>
            <ButtonText>{buttonTitle}</ButtonText>
          </WishlistButton>
          {item?.original_title && (
            <>
              <Key>Original Title:</Key>
              <Value>{item.original_title}</Value>
            </>
          )}
          {item?.popularity && (
            <>
              <Key>Popularity:</Key>
              <Value>{item.popularity}</Value>
            </>
          )}
        </RightArea>
      </Row>
      {item?.overview && (
        <Description parentScreen={parent.name}>{item.overview}</Description>
      )}
    </Container>
  );
};

export default DetailScreen;
