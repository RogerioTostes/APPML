import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { styles, optionsStep, optionsFristStep, optionsBar } from "./styles";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import PrimeiraEtapa from "./primeiraEtapa";
import SegundaEtapa from "./segundaEtapa";
import TerceiraEtapa from "./terceiraEtapa";

export default function Cadastro() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* <View style={{ flex: 1 }}>
        <ProgressSteps {...optionsBar}>
          <ProgressStep {...optionsFristStep} label="Primeira etapa">
            <PrimeiraEtapa />
          </ProgressStep>
          <ProgressStep {...optionsStep} label="Segunda etapa">
            <SegundaEtapa />
          </ProgressStep>
          <ProgressStep {...optionsStep} label="Terceira etapa">
            <TerceiraEtapa />
          </ProgressStep>
        </ProgressSteps>
      </View> */}


{/* <ProgressStep {...optionsFristStep} label="Primeira etapa"> */}
            <PrimeiraEtapa />
          {/* </ProgressStep> */}


    </KeyboardAvoidingView>
  );
}
