import React, { Component } from 'react';
import { Image, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from './firebaseConfig';
import ImagemLogo from "../../images/logo.png";
import { styles } from "./styles";
export default class Login extends Component {
constructor() {
super();
this.state = { 
email: '', 
password: '',
isLoading: false
}
}
updateInputVal = (val, prop) => {
const state = this.state;
state[prop] = val;
this.setState(state);
}
userLogin = () => {
if(this.state.email === '' && this.state.password === '') {
Alert.alert('Login ou senha vazios')
} else {
this.setState({
isLoading: true,
})
firebase
.auth()
.signInWithEmailAndPassword(this.state.email, this.state.password)
.then((res) => {
console.log(res)
console.log('User logged-in successfully!')
this.setState({
isLoading: false,
email: '', 
password: ''
})      
this.props.navigation.navigate('PerfilAfiliado')
})
.catch(error => this.setState({ errorMessage: error.message }))
}
}
render() {
if(this.state.isLoading){
return(
<View style={styles.form}>
   <ActivityIndicator size="large" color="#9E9E9E"/>
</View>
)
}    
return (
<View style={styles.container}>
   <Image source={ImagemLogo} />
   <TextInput
      style={styles.form}
      label="Email"
      placeholder="Email"
      value={this.state.email}
      onChangeText={(val) =>
   this.updateInputVal(val, 'email')}
   />
   <TextInput
      style={styles.form}
      label="Senha"
      placeholder="Senha"          
      value={this.state.password}
      onChangeText={(val) =>
   this.updateInputVal(val, 'password')}
   maxLength={15}
   secureTextEntry={true}
   />            
    <Button
      mode="contained"
      style={{ ...styles.form, ...styles.buttonAcessar }}         
      title="Afiliado"
      onPress={() => this.userLogin()}
      /> 
   {/* <View style={styles.containerButton}>      
      <Button
      mode="contained"
      style={{ ...styles.form, ...styles.buttonAcessar }}         
      title="Afiliado"
      onPress={() => this.userLogin()}
      />   
      <Button
      mode="contained"
      style={{
      ...styles.form,
      ...styles.buttonCadastrar,
      ...styles.secondButton,
      }}         
      title="Vendedor"
      onPress={() => this.userLogin()}
      />   
   </View> */}
   <Text 
      style={styles.cadastre}
      onPress={() => this.props.navigation.navigate('Cadastro')}>          
      Não tem uma conta ? Cadastre-se
   </Text>
</View>
);
}
}