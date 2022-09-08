import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '../screens/Movie/DetailScreen';
import {Movie} from '../state/genre/interfaces';
import WishlistScreen from '../screens/Home/WishlistScreen';
import {MovieGenre} from '../helpers/interfaces';

export type WishlistStackParamsList = {
  'wishlist.home': undefined;
  'wishlist.movieDetail': {
    item: Movie;
    parent: MovieGenre;
  };
};

const Stack = createStackNavigator<WishlistStackParamsList>();

const WishlistStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Wishlist'}}
        name="wishlist.home"
        component={WishlistScreen}
      />
      <Stack.Screen
        options={{title: 'Details'}}
        name="wishlist.movieDetail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default WishlistStack;
