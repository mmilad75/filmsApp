import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WishlistStack from './WishlistStack';
import HomeStack from './HomeStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SafeArea from '../components/Common/SafeArea';

export type MainStackParamsList = {
  wishlist: undefined;
  home: undefined;
};

export type mainStackNavigationType = StackNavigationProp<MainStackParamsList>;

const Tab = createBottomTabNavigator<MainStackParamsList>();

const Main = () => (
  <Tab.Navigator screenOptions={{headerShown: false, tabBarIcon: () => null}}>
    <Tab.Screen name="home" component={HomeStack} />
    <Tab.Screen name="wishlist" component={WishlistStack} />
  </Tab.Navigator>
);

const Index: React.FC = () => (
  <SafeArea>
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  </SafeArea>
);

export default Index;
