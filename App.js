import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from './screens/PostsScreen';
import AlbumsScreen from './screens/AlbumsScreen';
import CommentsScreen from './screens/CommentsScreen';
import PhotosScreen from './screens/PhotosScreen';
import UsersScreen from './screens/UsersScreen';
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Posts" component={PostsScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Photos" component={PhotosScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
