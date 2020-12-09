import React from "react";
import { styles } from "./styles";
import { Avatar, Card, Title, Paragraph, DataTable } from "react-native-paper";
import { ScrollView } from "react-native";
import ListaAfiliados from "../../images/caixa.png";
import Finanças from "../../images/mercadoPagoLogo.png";
import Indicações from "../../images/indicacoes.png";

export default function Dashboard() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Card style={styles.card}>
        <Card.Cover source={ListaAfiliados} />
        <Card.Content>
          <Title>Listas de afiliados</Title>
          <DataTable.Row>
            <DataTable.Cell>Produto</DataTable.Cell>
            <DataTable.Cell>Link</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Baton Anita</DataTable.Cell>
            <DataTable.Cell>
              www.mercadolivre.com /productID17865
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>AirFrie</DataTable.Cell>
            <DataTable.Cell>
              www.mercadolivre.com /productID17845
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Kindle</DataTable.Cell>
            <DataTable.Cell>
              www.mercadolivre.com /productID17855
            </DataTable.Cell>
          </DataTable.Row>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Estatisca de afiliação - Resumo semanal</Title>
          <DataTable.Row>
            <DataTable.Cell>3 produtos afiliados</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>15 vendas influenciadas</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>3 vendedores atendidos</DataTable.Cell>
          </DataTable.Row>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={Finanças} />
        <Card.Content>
          <Title>Finanças</Title>
          <DataTable.Row>
            <DataTable.Cell>Lucro em comissões</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Total em conta mercado pago</DataTable.Cell>
          </DataTable.Row>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={Indicações} />
        <Card.Content>
          <Title>Indicações</Title>

          <DataTable.Row>
            <DataTable.Cell> 15 Amigos convidados</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>3 - Amigos Aceitos</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Lucro por convite aceitos</DataTable.Cell>
          </DataTable.Row>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
