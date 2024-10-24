import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ComentariosDoPost = ({ route }) => {
    const { postId } = route.params;
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const carregarComentarios = async () => {
            try {
                const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
                const dados = await resposta.json();
                setComentarios(dados);
            } catch (erro) {
                console.error('Erro ao carregar comentários:', erro);
            }
        };
        carregarComentarios();
    }, [postId]);

    return (
        <View style={styles.container}>
            <FlatList
                data={comentarios}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.comentario}>
                        <Text style={styles.nome}>{item.name}</Text>
                        <Text style={styles.texto}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    comentario: {
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#FFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    texto: {
        fontSize: 14,
        lineHeight: 20,
        color: '#666',
    },
});

export default ComentariosDoPost;
