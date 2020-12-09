import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, RadioButton, Text } from "react-native-paper";
import { styles } from "./styles";

export default function SegundaEtapa() {
  const [possuiConta, setPossuiConta] = useState("não");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  return (
    <View>
      <View style={styles.radioGroup}>
        <Text style={styles.title}>Possui conta no Mercado Livre?</Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={(value) => setPossuiConta(value)}
            value={possuiConta}
          >
            <View style={styles.radio}>
              
                <Text>Não</Text>
                <RadioButton value="não" />
             
              
                <Text>Sim</Text>
                <RadioButton value="sim" />
              
            </View>
          </RadioButton.Group>
          
        </View>
      </View>

      <TextInput
        mode="outlined"
        label="Nome de usuário Meli"
        style={styles.input}
        value={usuario}
        onChangeText={(value) => setUsuario(value)}
      />

      <TextInput
        mode="outlined"
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        mode="outlined"
        label="Telefone"
        style={styles.input}
        value={telefone}
        onChangeText={(value) => setTelefone(value)}
      />
    </View>
  );
}
