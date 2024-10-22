import React from 'react';
import { View, Text, FlatList } from 'react-native';
import jsonData from '../data/jsonData';

const UsersScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Usuários</Text>
      <FlatList
        data={jsonData.Users.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Telefone: {item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UsersScreen;
