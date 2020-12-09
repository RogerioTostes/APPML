import React, { useState } from "react";
import { View, Image, ScrollView, Linking } from "react-native";
import { styles } from "./styles";
import luisa from "../../images/luisa.png";
import seach from "../../images/search.png";
import caixa from "../../images/caixa.png";
import pago from "../../images/pago.png";
import add from "../../images/add.png";
import { StackActions } from "@react-navigation/native";
import eye from "../../images/eye.png";
import StarRating from "react-native-star-rating";
import {
  Text,
  Paragraph,
  Card,
  Title,
  DataTable,
  Button,
} from "react-native-paper";

export default function Perfil({ navigation }) {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.space}>
        <Image source={luisa} style={styles.imagem} />
      </View>
      <Text style={styles.titleSize}>Luísa Moraes Lopes</Text>
      <View style={styles.viewRow}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={4.8}
          fullStarColor={"#1D2C7C"}
          starSize={25}
        />
        <Text style={styles.titleSize}> 4.8</Text>
      </View>

      <View style={styles.viewRow}>
        <Card
          style={styles.card}
          onPress={() => navigation.navigate("Afiliacoes")}
        >
          <View style={styles.notification}>
            <Image source={add} style={styles.imgCard} />
          </View>
          <Card.Actions>
            <Paragraph style={styles.text}>Solicitar Afiliação</Paragraph>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <View style={styles.notification}>
            <Image source={eye} style={styles.imgCard} />
          </View>
          <Card.Actions>
            <Paragraph style={styles.text}>Ver Solicitações</Paragraph>
          </Card.Actions>
        </Card>
      </View>
      <View style={styles.viewRow}>
        <Card
          style={styles.card}
          onPress={() => {
            if (Platform.OS === "ios") {
              Linking.openURL("mercadopago://app").catch((err) => {
                Linking.openURL(
                  "https://apps.apple.com/br/app/mercado-pago/id925436649"
                );
              });
            } else {
              Linking.openURL("mercadopago://app").catch((err) => {
                Linking.openURL(
                  "https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR"
                );
              });
            }
          }}
        >
          <View style={styles.notification}>
            <Image source={pago} style={styles.imgCardPago} />
          </View>

          <Card.Actions>
            <Paragraph style={styles.text}>Finanças</Paragraph>
          </Card.Actions>
        </Card>

        <Card
          style={styles.card}
          onPress={() => navigation.navigate("Produtos")}
        >
          <View style={styles.notification}>
            <Image source={caixa} style={styles.imgCard} />
          </View>
          <Card.Actions>
            <Paragraph style={styles.text}>Meus Produtos</Paragraph>
          </Card.Actions>
        </Card>
      </View>

      <View style={styles.viewRow}>
        <Card
          style={styles.card2}
          onPress={() => navigation.navigate("Estatisticas")}
        >
          <View style={styles.notification}>
            <Image source={seach} style={styles.imgCard} />
          </View>
          <Card.Actions>
            <Paragraph style={styles.text}>Estatísticas</Paragraph>
          </Card.Actions>
        </Card>
      </View>

      <View style={styles.resumo}>
        <Card>
          <Card.Content>
            <Title style={styles.titleSize}>
              Estatísticas de afiliação - Resumo semanal
            </Title>
            <DataTable.Row>
              <DataTable.Cell>
                {" "}
                <Paragraph style={styles.text}>3 produtos afiliados</Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                {" "}
                <Paragraph style={styles.text}>
                  15 vendas influenciadas
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                {" "}
                <Paragraph style={styles.text}>
                  3 vendedores atendidos
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>

      <Button
        mode="contained"
        style={styles.buttonSair}
        onPress={() => navigation.dispatch(StackActions.replace("Login"))}
      >
        Sair
      </Button>
    </ScrollView>
  );
}
