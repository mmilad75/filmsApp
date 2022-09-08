import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailScreen from '../screens/Movie/DetailScreen';
import {Movie} from '../state/genre/interfaces';
import {MovieGenre} from '../helpers/interfaces';

export type HomeStackParamsList = {
  'home.home': undefined;
  'home.movieDetail': {
    item: Movie;
    parent: MovieGenre;
  };
};

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Home'}}
        name="home.home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{title: 'Details'}}
        name="home.movieDetail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
