import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import ImagemUsuario from "../../../images/fotoUsuario.png";

export default function TerceiraEtapa() {
  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");

  const numberOfLines = 10;

  return (
    <View>
      <View style={styles.itensImagem}>
        <Image source={ImagemUsuario} style={styles.imagem} />
        <Button
          mode="contained"
          style={styles.buttonAcessar}
          onPress={() => console.log("Pressed")}
        >
          Importar Imagem
        </Button>
      </View>

      <TextInput
        mode="outlined"
        label="Nome"
        style={styles.input}
        value={nome}
        onChangeText={(value) => setNome(value)}
      />

      <TextInput
        mode="outlined"
        label="Informaões Bio"
        style={{ ...styles.input }}
        value={bio}
        onChangeText={(value) => setBio(value)}
        multiline={true}
        numberOfLines={Platform.OS === "ios" ? null : numberOfLines}
        minHeight={
          Platform.OS === "ios" && numberOfLines ? 20 * numberOfLines : null
        }
      />
    </View>
  );
}
