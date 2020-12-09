import React from "react";
import { styles } from "./styles";
import { Avatar, Card, Title, Paragraph, Button } from "react-native-paper";
import { ScrollView, View, Image, Text } from "react-native";
import filter from "../../images/filter.png";
import luisa from "../../images/luisa.png";
import PerfilRank from "../../components/perfilRanking";
import Podium from "../../images/podium.png";
import { ranking } from "./ranking";

export default function Ranking({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.text}>
        <Image source={Podium} style={styles.itensImagem} />
        <Title style={styles.title}>Ranking de Afiliados</Title>
        <Paragraph style={styles.paragraph}>
          Veja os melhores afiliados da nossa plataforma e peça a eles para
          divulgar o seu produto!
        </Paragraph>
      </View>

      <Card style={styles.card}>
        <Card.Actions style={styles.cardContent}>
          <Button>
            {" "}
            <Image source={filter} style={styles.tinyLogo} />{" "}
          </Button>
          <Button>
            {" "}
            <Text style={{ fontSize: 10 }}>Categoria</Text>{" "}
          </Button>
          <Button>
            {" "}
            <Text style={{ fontSize: 10 }}>Cronologia</Text>{" "}
          </Button>
          <Button>
            {" "}
            <Text style={{ fontSize: 10 }}>Avaliação</Text>{" "}
          </Button>
        </Card.Actions>
      </Card>

      {ranking.map((x) => (
        <PerfilRank
          key={x.nome}
          img={luisa}
          nome={x.nome}
          vendas={x.vendas}
          rating={x.rating}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}
