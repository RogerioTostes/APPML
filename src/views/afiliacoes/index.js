import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import share from "../../images/share.png";
import { TextInput } from "react-native-paper";
import StarRating from "react-native-star-rating";
import { getProdutos } from "./actions";

import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
  Dialog,
  Portal,
} from "react-native-paper";

export default function Afiliacoes() {
  const [busca, setBusca] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (produtos.length == 0) {
      setLoading(true);
      getProdutos().then((x) => {
        setProdutos(x);
        setLoading(false);
      });
    }
  });

  function retornaProdutos() {
    if (!busca) {
      return produtos;
    } else {
      return produtos.filter((x) =>
        x.nome.toLowerCase().includes(busca.toLowerCase())
      );
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          label="Buscar"
          value={busca}
          onChangeText={(text) => setBusca(text)}
          style={styles.input}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {loading ? (
            <View style={styles.containerLoading}>
              <ActivityIndicator size="large" color="#1D2C7C" />
            </View>
          ) : (
            retornaProdutos().map((prod) => (
              <Card style={styles.card} key={prod.key}>
                <View style={styles.viewRow}>
                  <Card.Cover
                    source={{
                      uri: prod.imagem,
                    }}
                    style={styles.cover}
                  />
                  <Card.Content>
                    <Title style={styles.titleSize}>{prod.nome}</Title>
                    <Paragraph>
                      <Text style={styles.titulos}>
                        Preço:{" "}
                        <Text style={{ fontWeight: "normal" }}>
                          R$ {prod.valor}
                        </Text>
                      </Text>
                    </Paragraph>
                    <Paragraph>
                      <Text style={styles.titulos}>
                        Comissão:{" "}
                        <Text style={{ fontWeight: "normal" }}>
                          R$ {prod.valorComissao}
                        </Text>
                      </Text>
                    </Paragraph>
                    <Paragraph>
                      <Text style={styles.titulos}>
                        Em estoque:{" "}
                        <Text style={{ fontWeight: "normal" }}>
                          {prod.estoque}
                        </Text>
                      </Text>
                    </Paragraph>
                    <Paragraph>
                      <Text style={styles.titulos}>
                        Vendedor:{" "}
                        <Text style={{ fontWeight: "normal", fontSize: 11 }}>
                          {prod.nomeVendedor}
                        </Text>
                      </Text>
                    </Paragraph>
                    <View style={styles.viewRow}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={prod.rating}
                        fullStarColor={"#1D2C7C"}
                        starSize={25}
                      />
                      <Text style={{ color: "#1D2C7C" }}> {prod.rating}</Text>
                    </View>
                  </Card.Content>
                </View>

                <Card.Actions>
                  <Button mode="contained">Afiliar-se</Button>
                </Card.Actions>
              </Card>
            ))
          )}
        </ScrollView>
      </View>
    </>
  );
}
