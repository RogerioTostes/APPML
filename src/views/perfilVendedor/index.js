import React, { useState } from "react";
import { View, Image, ScrollView, Linking } from "react-native";
import { styles } from "./styles";
import {
  Text,
  Paragraph,
  Card,
  Title,
  DataTable,
  Button,
} from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import carlos from "../../images/carlos.png";
import seach from "../../images/search.png";
import caixa from "../../images/caixa.png";
import pago from "../../images/pago.png";
import add from "../../images/add.png";
import friend from "../../images/friend.png";
import StarRating from "react-native-star-rating";

export default function Perfil({ navigation }) {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.space}>
        <Image source={carlos} style={styles.imagem} />
      </View>
      <Text style={styles.titleSize}>Carlos Santos Menezes</Text>
      <View style={styles.viewRow}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={4.5}
          fullStarColor={"#1D2C7C"}
          starSize={25}
        />
        <Text style={styles.titleSize}> 4.5</Text>
      </View>
      <View style={styles.viewRow}>
        <Card
          style={styles.card}
          onPress={() => navigation.navigate("Ranking")}
        >
          <View style={styles.notification}>
            <Image source={add} style={styles.imgCard} />
          </View>
          <Card.Actions>
            <Paragraph style={styles.text}>Buscar Afiliados</Paragraph>
          </Card.Actions>
        </Card>

        <Card
          style={styles.card}
          onPress={() => navigation.navigate("MeusAfiliados")}
        >
          <View style={styles.notification}>
            <Image source={friend} style={styles.imgCard} />
          </View>
          <Card.Actions>
            <Paragraph style={styles.text}>Meus Afiliados</Paragraph>
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

        <Card style={styles.card}>
          <View style={styles.notification}>
            <Image source={caixa} style={styles.imgCard} />
          </View>
          <Card.Actions>
            <Paragraph style={styles.text}>Meus Produtos</Paragraph>
          </Card.Actions>
        </Card>
      </View>

      <View style={styles.viewRow}>
        <Card style={styles.card2}>
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
                <Paragraph style={styles.text}>
                  0 solicitações de afiliação
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                {" "}
                <Paragraph style={styles.text}>
                  75 vendas realizados através dos afiliados
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
