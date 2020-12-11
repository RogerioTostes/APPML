import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../login/firebaseConfig';

class Detalhes extends Component {

  constructor() {
    super();
    this.state = {
      produto: '',
      valor: '',      
      isLoading: true
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('produtos').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          produto: user.produto,
          valor: user.valor,         
          isLoading: false
        });
      } else {
        console.log("Não existente");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateUser() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase.firestore().collection('produtos').doc(this.state.key);
    updateDBRef.set({
      produto: this.state.produto,
      valor: this.state.valor,      
    }).then((docRef) => {
      this.setState({
        key: '',
        produto: '',
        valor: '',        
        isLoading: false,
      });
      this.props.navigation.navigate('PerfilAfiliado');
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteUser() {
    const dbRef = firebase.firestore().collection('produtos').doc(this.props.route.params.userkey)
      dbRef.delete().then((res) => {
          console.log('Removido')
          this.props.navigation.navigate('PerfilAfiliado');
      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Deletar',
      'Você deseja deletar?',
      [
        {text: 'Sim', onPress: () => this.deleteUser()},
        {text: 'Não', onPress: () => console.log('item não removido'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
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
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'produto')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'valor'}
              value={this.state.valor}
              onChangeText={(val) => this.inputValueUpdate(val, 'valor')}
          />
        </View>
                <View style={styles.button}>
          <Button
            title='Atualizar'
            onPress={() => this.updateUser()} 
            color="#19AC52"
          />
          </View>
         <View>
          <Button
            title='Deletar'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
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
  },
  button: {
    marginBottom: 7, 
  }
})

export default Detalhes;
