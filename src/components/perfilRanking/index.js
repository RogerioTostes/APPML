import React from "react";
import { styles } from "./styles";
import { Card, Paragraph } from "react-native-paper";
import { ScrollView, View, Image } from "react-native";
import StarRating from "react-native-star-rating";

export default function PerfilRank({ img, vendas, nome, rating, navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Card
        style={styles.card}
        onPress={() => navigation.navigate("PerfilAfiliadoRanking")}
      >
        <Card.Content style={styles.cardContent}>
          <View>
            <Image source={img} style={styles.tinyLogo} />
          </View>
          <View>
            <Paragraph style={styles.text}>{nome}</Paragraph>
            <Paragraph style={styles.text}>{vendas}</Paragraph>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={rating}
              fullStarColor={"#1D2C7C"}
              starSize={25}
            />
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
