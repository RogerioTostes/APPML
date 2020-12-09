import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Card, DataTable, Paragraph } from "react-native-paper";
import { data } from "./afiliados";
import { styles } from "./styles";
import InviteImagem from "../../images/invite.png";
import ImagemEduardo from "../../images/eduardo.png";
import range from "../../images/range.png";
export default function MeusAfiliados({ navigation }) {
  const { afiliados, solicitacoes } = data;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Card
        style={styles.card}
        onPress={() => navigation.navigate("SolicitacaoAfiliacao")}
      >
        <Card.Content style={styles.cardContent}>
          <Image source={InviteImagem} />
          <Text style={styles.text}>
            {solicitacoes.length} Solicitação de afiliação
          </Text>
        </Card.Content>
      </Card>

      {afiliados.map((x) => (
        <Card style={styles.cardAfiliado} key={x.nome}>
          <Card.Content>
            <View style={styles.cardContent}>
              <Image source={ImagemEduardo} />
              <Text style={styles.text}>{x.nome}</Text>
            </View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Produto</DataTable.Title>
                <DataTable.Title>Link</DataTable.Title>
              </DataTable.Header>
              {x.produtos.map((y) => (
                <DataTable.Row key={y.nome}>
                  <DataTable.Cell>{y.nome}</DataTable.Cell>
                  <DataTable.Cell>{y.link}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
            <View>
              
              {/* <Paragraph>- {x.visualizacoes} visualizações</Paragraph>
              <Paragraph>- {x.cliques} cliques</Paragraph>
              <Paragraph>- {x.acessos} na página de compra</Paragraph>
              <Paragraph>- {x.compras} compras com sucesso</Paragraph>
              <Paragraph>
                - Total em comissão pago: R$ {x.totalComissao}
              </Paragraph> */}
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
