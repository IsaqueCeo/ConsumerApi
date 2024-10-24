// import React from 'react';
// import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
// import jsonData from '../data/jsonData';

// const backgroundImage = { uri: 'https://images.unsplash.com/photo-1518673741959-d98658ff385b' };

// const CommentsScreen = () => {
//   return (
//     <ImageBackground source={backgroundImage} style={styles.background}>
//       <View style={styles.overlay}>
//         <Text style={styles.headerText}>Comentários</Text>
//         <FlatList
//           data={jsonData.Comments.data}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.commentContainer}>
//               <Text style={styles.commentName}>{item.name}</Text>
//               <Text style={styles.commentBody}>{item.body}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     padding: 20,
//   },
//   headerText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#fff',
//     marginBottom: 20,
//     letterSpacing: 1.5,
//     textTransform: 'uppercase',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 0, height: 2 },
//     textShadowRadius: 5,
//   },
//   commentContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 10,
//     borderLeftWidth: 6,
//     borderLeftColor: '#e67e22',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     elevation: 5,
//   },
//   commentName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 10,
//   },
//   commentBody: {
//     fontSize: 16,
//     color: '#7f8c8d',
//     lineHeight: 22,
//   },
// });

// export default CommentsScreen;
