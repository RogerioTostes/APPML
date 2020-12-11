// import React, { useState, useEffect } from "react";
// import { View, Text, ScrollView, Image, Clipboard } from "react-native";
// import { TextInput, Snackbar } from "react-native-paper";
// import { styles } from "./styles";
// import share from "../../images/share.png";
// import StarRating from "react-native-star-rating";
// import Icon from "react-native-vector-icons/Fontisto";
// import { produtos } from "./produtos";

// import {
//   Avatar,
//   Card,
//   Title,
//   Paragraph,
//   Button,
//   Dialog,
//   Portal,
// } from "react-native-paper";
// export default function Produto() {
//   const [busca, setBusca] = useState("");

//   function retornaProdutos() {
//     if (!busca) {
//       return produtos;
//     } else {
//       return produtos.filter((x) =>
//         x.nome.toLowerCase().includes(busca.toLowerCase())
//       );
//     }
//   }

//   const [visible, setVisible] = useState(false);

//   const onDismissSnackBar = () => setVisible(false);

//   return (
//     <>
//       <View style={styles.container}>
//         <TextInput
//           label="Buscar"
//           value={busca}
//           onChangeText={(text) => setBusca(text)}
//           style={styles.input}
//         />
//         <ScrollView
//           style={styles.scrollView}
//           contentContainerStyle={styles.contentContainerStyle}
//         >
//           {retornaProdutos().map((prod) => (
//             <Card style={styles.card} key={prod.nome}>
//               <View style={styles.viewRow}>
//                 <Card.Cover
//                   source={{
//                     uri: prod.imagem,
//                   }}
//                   style={styles.cover}
//                 />
//                 <Card.Content>
//                   <Title style={styles.titleSize}>{prod.nome}</Title>
//                   <Paragraph>
//                     <Text style={styles.titulos}>
//                       Preço:{" "}
//                       <Text style={{ fontWeight: "normal" }}>
//                         {prod.valor} R$
//                       </Text>
//                     </Text>
//                   </Paragraph>
//                   <Paragraph>
//                     <Text style={styles.titulos}>
//                       Comissão:{" "}
//                       <Text style={{ fontWeight: "normal" }}>
//                         {prod.valorComissao}% p/venda
//                       </Text>
//                     </Text>
//                   </Paragraph>
//                   <Paragraph>
//                     <Text style={styles.titulos}>
//                       Em estoque:{" "}
//                       <Text style={{ fontWeight: "normal" }}>
//                         {prod.estoque}
//                       </Text>
//                     </Text>
//                   </Paragraph>
//                   <Paragraph>
//                     <Text style={styles.titulos}>
//                       Vendedor:{" "}
//                       <Text style={{ fontWeight: "normal" }}>
//                         {prod.nomeVendedor}
//                       </Text>
//                     </Text>
//                   </Paragraph>
//                   <View style={styles.viewRow}>
//                     <StarRating
//                       disabled={true}
//                       maxStars={5}
//                       rating={prod.rating}
//                       fullStarColor={"#1D2C7C"}
//                       starSize={25}
//                     />
//                     <Text style={{ color: "#1D2C7C" }}> {prod.rating}</Text>
//                   </View>
//                 </Card.Content>
//               </View>
//               <View style={styles.viewRow}>
//                 <Card.Content>
//                   <Button
//                     style={styles.buttonShare}
//                     mode="contained"
//                     onPress={() => {
//                       setVisible(true);
//                       Clipboard.setString(
//                         "Ei, se liga nesse produto do Meli: " + prod.link
//                       );
//                     }}
//                   >
//                     <Icon name="share" size={15} />
//                   </Button>
//                 </Card.Content>
//                 <Text style={styles.link}> {prod.link} </Text>
//               </View>
//             </Card>
//           ))}
//         </ScrollView>
//         <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
//           <Text>Link copiado!</Text>
//         </Snackbar>
//       </View>
//     </>
//   );
// }
import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../login/firebaseConfig';

class AddUserScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('produtos');
    this.state = {
      produto: '',
      valor: '',     
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.produto === ''){
     alert('Campo vazio')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        produto: this.state.produto,
        valor: this.state.valor,       
      }).then((res) => {
        this.setState({
          produto: '',
          valor: '',          
          isLoading: false,
        });
        this.props.navigation.navigate('PerfilAfiliado')
      })
      .catch((err) => {
        console.error("Erro ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'produto'}
              value={this.state.produto}
              onChangeText={(val) => this.inputValueUpdate(val, 'produto')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'valor'}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'valor')}
          />
        </View>       
        <View style={styles.button}>
          <Button
            title='Adicionar produto'
            onPress={() => this.storeUser()} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddUserScreen;