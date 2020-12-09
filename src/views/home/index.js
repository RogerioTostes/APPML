import React from "react";
import { styles } from "./styles";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { ScrollView } from "react-native";
import DashboardImagem from "../../images/dashboard.png";
import ProdutosAfiliadosImagem from "../../images/produtosAfiliados.png";
import SolicitacaoDeAfiliacaoImagem from "../../images/solicitacaoDeAfiliacao.png";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Card style={styles.card}>
        <Card.Cover source={ProdutosAfiliadosImagem} />
        <Card.Content>
          <Title>Produtos Afiliados</Title>
          <Paragraph>53 produtos - 83 vendas influenciadas</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={SolicitacaoDeAfiliacaoImagem} />
        <Card.Content>
          <Title>Solicitações de Afiliação</Title>
          <Paragraph>53 produtos afiliado</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={DashboardImagem} />
        <Card.Content>
          <Title>Dashboard do Afiliado</Title>
          <Paragraph>83 vendas influenciadas - Lucro: R$ 30,00</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
