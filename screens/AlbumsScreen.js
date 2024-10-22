import React from 'react';
import { View, Text, FlatList } from 'react-native';
import jsonData from '../data/jsonData';

const AlbumScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Álbuns</Text>
      <FlatList
        data={jsonData.Albums.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>Fotos: {item.photoCount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AlbumScreen;
