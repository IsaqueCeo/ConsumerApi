import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import jsonData from '../data/jsonData';

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' };

const PostsScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.headerText}>Posts</Text>
        <FlatList
          data={jsonData.Posts.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postBody}>{item.body}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', 
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff', 
    textTransform: 'uppercase',
    letterSpacing: 2, 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
  postContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderLeftWidth: 6, 
    borderLeftColor: '#3498db', 
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textTransform: 'capitalize', 
  },
  postBody: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

export default PostsScreen;
