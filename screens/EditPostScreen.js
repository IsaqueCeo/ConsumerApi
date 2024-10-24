import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';




const EditarPublicacao = ({ route }) => {
  const { postId } = route.params;
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const buscarDados = async () => {
      setCarregando(true);
      try {
        const resposta = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setTitulo(resposta.data.title);
        setConteudo(resposta.data.body);
      } catch (erro) {
        console.error('Erro ao carregar os dados:', erro);
      } finally {
        setCarregando(false);
      }
    };
    buscarDados();
  }, [postId]);

  const atualizarPublicacao = async () => {
    setCarregando(true);
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        title: titulo,
        body: conteudo,
      });
      alert('Publicação atualizada com sucesso!');
      navigation.navigate('Posts');
    } catch (erro) {
      console.error('Erro ao atualizar a publicação:', erro);
    } finally {
      setCarregando(false);
    }
  };

  if (carregando) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Editar Publicação</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Título da Publicação"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        value={conteudo}
        onChangeText={setConteudo}
        placeholder="Conteúdo da Publicação"
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={atualizarPublicacao}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#ECEFF1',
  },
  headerText: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 25,
    color: '#1A237E',
  },
  input: {
    height: 45,
    borderColor: '#B0BEC5',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 15,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#1E88E5',
  },
});

export default EditarPublicacao;
