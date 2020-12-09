import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { styles } from "./styles";

export default function PrimeiraEtapa() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [pais, setPais] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Nome"
        style={styles.input}
        value={nome}
        onChangeText={(value) => setNome(value)}
      />

      <TextInput
        mode="outlined"
        label="Data de Nascimento"
        style={styles.input}
        value={dataNascimento}
        onChangeText={(value) => setDataNascimento(value)}
      />

      <TextInput
        mode="outlined"
        label="CPF"
        style={styles.input}
        value={cpf}
        onChangeText={(value) => setCpf(value)}
      />

      <TextInput
        mode="outlined"
        label="País"
        style={styles.input}
        value={pais}
        onChangeText={(value) => setPais(value)}
      />

      <TextInput
        mode="outlined"
        label="Rua"
        style={styles.input}
        value={rua}
        onChangeText={(value) => setRua(value)}
      />

      <TextInput
        mode="outlined"
        label="Bairro"
        style={styles.input}
        value={bairro}
        onChangeText={(value) => setBairro(value)}
      />
    </View>
  );
}
