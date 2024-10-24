import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfileScreen = ({ route }) => {
  const { userId } = route.params;
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  if (!userDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Buscando informações do usuário...</Text>
      </View>
    );
  }

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.title}>Perfil de {userDetails.name}</Text>
      <Text>Email: {userDetails.email}</Text>
      <Text>Telefone: {userDetails.phone}</Text>
      <Text>Website: {userDetails.website}</Text>
      <Text>Empresa: {userDetails.company.name}</Text>
      <Text>Endereço: {userDetails.address.street}, {userDetails.address.city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default UserProfileScreen;
