import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import MovieCard from '../../components/Card/MovieVerticalCard';
import Container from '../../components/Common/Container';
import MovieHorizontalList from '../../components/List/MovieHorizontalList';
import ListTitle from '../../components/Text/ListTitle';
import {MOVIE_GENRES} from '../../helpers/constants';
import {useDispatch, useSelector} from '../../helpers/hooks';
import {HomeStackParamsList} from '../../navigators/HomeStack';
import {getGenreMovies} from '../../state/genre/actions';

export type navigationType = StackNavigationProp<
  HomeStackParamsList,
  'home.home'
>;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.genre);
  const navigation = useNavigation<navigationType>();

  useEffect(() => {
    dispatch(getGenreMovies(28));
    dispatch(getGenreMovies(12));
    dispatch(getGenreMovies(35));
  }, [dispatch]);

  return (
    <Container>
      <ListTitle>{MOVIE_GENRES[0].title}</ListTitle>
      <MovieHorizontalList
        data={movies[0]?.data}
        renderItem={({item, index}) => (
          <MovieCard
            onPress={() =>
              navigation.navigate('home.movieDetail', {
                item,
                parent: MOVIE_GENRES[0],
              })
            }
            key={index}
            item={item}
          />
        )}
      />

      <ListTitle>{MOVIE_GENRES[1].title}</ListTitle>
      <MovieHorizontalList
        data={movies[1]?.data}
        renderItem={({item, index}) => (
          <MovieCard
            onPress={() =>
              navigation.navigate('home.movieDetail', {
                item,
                parent: MOVIE_GENRES[1],
              })
            }
            key={index}
            item={item}
          />
        )}
      />

      <ListTitle>{MOVIE_GENRES[2].title}</ListTitle>
      <MovieHorizontalList
        data={movies[2]?.data}
        renderItem={({item, index}) => (
          <MovieCard
            onPress={() =>
              navigation.navigate('home.movieDetail', {
                item,
                parent: MOVIE_GENRES[2],
              })
            }
            key={index}
            item={item}
          />
        )}
      />
    </Container>
  );
};

export default HomeScreen;
