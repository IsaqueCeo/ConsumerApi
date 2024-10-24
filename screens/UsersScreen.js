import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching the users data from an API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Usuários</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.user}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Telefone: {item.phone}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyMessage}>Nenhum usuário disponível.</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  user: {
    marginBottom: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default UsersScreen;
