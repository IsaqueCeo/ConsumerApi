import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import jsonData from '../data/jsonData';

const PhotosScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Fotos</Text>
      <FlatList
        data={jsonData.Photos.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PhotosScreen;
