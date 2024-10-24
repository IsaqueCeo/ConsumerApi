import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' };

const EnhancedPostsScreen = () => {
  const [postsData, setPostsData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPostsData(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar posts:', error);
      });
  }, []);

  const removePost = (postId) => {
    Alert.alert(
      "Confirmação de Exclusão",
      "Você realmente deseja excluir este post?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: () => {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
              .then(() => {
                setPostsData(postsData.filter(post => post.id !== postId));
                alert('Post excluído com sucesso!');
              })
              .catch(error => {
                console.error('Erro ao excluir post:', error);
              });
          }
        }
      ]
    );
  };

  const updatePartialPost = (postId) => {
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      title: "Título Modificado"
    })
      .then(response => {
        setPostsData(postsData.map(post => post.id === postId ? response.data : post));
        alert('Post atualizado parcialmente!');
      })
      .catch(error => {
        console.error('Erro ao atualizar post:', error);
      });
  };

  if (postsData.length === 0) {
    return (
      <View style={styles.loadingScreen}>
        <Text style={styles.loadingText}>Carregando Posts...</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.screenTitle}>Posts Recentes</Text>
        <FlatList
          data={postsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Text style={styles.postTitle}>{item.title}</Text>
              <Text style={styles.postBody}>{item.body}</Text>

              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('EditPostScreen', { postId: item.id })}
              >
                <Text style={styles.buttonText}><Feather name="edit" size={24} color="black" /></Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => updatePartialPost(item.id)}
              >
                <Text style={styles.buttonText}><FontAwesome name="refresh" size={24} color="black" /></Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removePost(item.id)}
              >
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  screenTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  postCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  postBody: {
    fontSize: 16,
    color: '#34495e',
  },
  editButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  updateButton: {
    // backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
});

export default EnhancedPostsScreen;
