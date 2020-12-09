import React, { useState } from "react";
import { Dimensions, View, Text, ScrollView, Image } from "react-native";
import {
  Card,
  Button,
  Portal,
  Dialog,
  Paragraph,
  
} from "react-native-paper";
import { styles } from "./styles";
import { data } from "./afiliados";
import ImagemLuisa from "../../images/luisa.png";
import ImagemSucesso from "../../images/sucesso.png";
import range from "../../images/range.png";
import StarRating from 'react-native-star-rating';
import {
  BarChart,
} from "react-native-chart-kit";

export default function PerfilAfiliadoRanking() {

  const dataPlot = {
    labels: ["Visualizações", "Cliques", "No Carinho", "Compras" ],
    datasets: [
      {
        data: [2000, 1053, 647, 240]
      }
    ]
  };

  var plotDim = Dimensions.get('window').width * 0.9

  const { solicitacoes } = data;

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const dialog = (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Parabéns</Dialog.Title>
          <Dialog.Content>
            <Image source={ImagemSucesso} style={styles.center} />
            <Paragraph>
              A solicitação de divulgação enviada, acompanhe e a resposta do
              afiliado através do painel de solicitação.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Fechar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );

  return (
    <>
      {dialog}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {solicitacoes.map((x) => (
          <Card style={styles.card} key={x.nome}>
            <Card.Content>
              <View style={styles.cardContent}>
                <Image source={ImagemLuisa} />
                <View style={styles.header}>
                  <Text style={styles.titulo}>{x.nome}</Text>
                  <Text style={styles.text}>
                    {x.vendasInfluenciadas} vendas influênciadas
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={x.rating}
                    fullStarColor={"#1D2C7C"}
                    starSize={25}
                  />
                  <Text style={{fontSize:16}}>  {x.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.header}>
                <Text>{x.mensagem}</Text>
              </View>
              <View style={styles.containerCards}>
                <Card style={styles.cardAmarelo1}>
                  <Card.Content>
                    <Text style={styles.titleSize}>
                      {x.vendasInfluenciadas} Vendas influênciadas
                    </Text>
                  </Card.Content>
                </Card>

                <Card style={styles.cardAmarelo2}>
                  <Card.Content>
                    <Text style={styles.titleSize}>
                      {x.acessos} Links acessados
                    </Text>
                  </Card.Content>
                </Card>
              </View>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <Button
                mode="contained"
                style={{ ...styles.form, ...styles.buttonAcessar }}
                onPress={showDialog}
              >
                Solicitar Afiliação
              </Button>
            </Card.Actions>
          </Card>
        ))}
        <Card style={styles.card}>
   
        <BarChart
        data={dataPlot}
        width={plotDim}
        height={220}
        
        chartConfig={{
          backgroundColor: "#FFF159",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: () => '#333',
          
          propsForBackgroundLines: {
              strokeWidth: 0
          },

          fillShadowGradient: "#1D2C7C",
          fillShadowGradientOpacity: 1, 
        }}
        
        withHorizontalLabels={false}
        showValuesOnTopOfBars={true}
        />
        
        </Card>
      
      </ScrollView>
    </>
  );
}
