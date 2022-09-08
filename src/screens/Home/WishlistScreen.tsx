import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList} from 'react-native';
import MovieCard from '../../components/Card/MovieVerticalCard';
import Container from '../../components/Common/Container';
import ListTitle from '../../components/Text/ListTitle';
import {useSelector} from '../../helpers/hooks';
import {WishlistStackParamsList} from '../../navigators/WishlistStack';

export type navigationType = StackNavigationProp<
  WishlistStackParamsList,
  'wishlist.home'
>;

const WishlistScreen = () => {
  const wishlist = useSelector(state => state.wishlist.data);
  const navigation = useNavigation<navigationType>();

  return (
    <Container>
      <ListTitle>Wishlist</ListTitle>
      <FlatList
        horizontal={true}
        data={wishlist}
        renderItem={({item, index}) => (
          <MovieCard
            onPress={() => navigation.navigate('wishlist.movieDetail', {item})}
            key={index}
            item={item}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginBottom: 30}}
      />
    </Container>
  );
};

export default WishlistScreen;
