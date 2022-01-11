import React, { useState } from 'react';
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Digite a altura e o peso.');
  const [infoImc, setInfoImc] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    let heightFormat = height.replace(',', '.');
    let weightFormat = weight.replace(',', '.');
    return (weightFormat / (heightFormat * heightFormat)).toFixed(2);
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage('Campo Obrigatório*');
    }
  }

  function validateImc() {
    if (height != null && weight != null) {
      const resImc = imcCalculator();
      setImc(resImc);
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu IMC é: ');
      if (resImc >= 16 && resImc < 17) {
        setInfoImc('Você esta muito abaixo do peso.');
      } else if (resImc > 17 && resImc < 18.5) {
        setInfoImc('Você esta abaixo do peso.');
      } else if (resImc >= 18.5 && resImc < 24.9) {
        setInfoImc('Você esta com peso normal.');
      } else if (resImc >= 25 && resImc < 30) {
        setInfoImc('Você esta muito acima do peso.');
      } else if (resImc >= 30 && resImc < 35) {
        setInfoImc('Você esta em Obesidade de Grau I.');
      } else if (resImc >= 35 && resImc <= 40) {
        setInfoImc('Você esta em Obesidade de Grau II.');
      } else if (resImc > 40) {
        setInfoImc('Você esta em Obesidade de Grau III.');
      }
      setTextButton('Calcular Novamente');
      setErrorMessage(null);

      return;
    }
    verificationImc();
    setImc(null);
    setMessageImc('Digite a altura e o peso.');
    setTextButton('Calcular');
    setInfoImc(null);
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formLabel}> Altura: </Text>
        <Text style={styles.errorMessage}> {errorMessage} </Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}> Peso: </Text>
        <Text style={styles.errorMessage}> {errorMessage} </Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 75.3"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            Keyboard.dismiss();
            validateImc();
          }}
        >
          <Text style={styles.txtButtonCalculator}> {textButton} </Text>
        </TouchableOpacity>
      </View>

      <ResultImc
        messageResultImc={messageImc}
        resultImc={imc}
        infoImc={infoImc}
      />
    </Pressable>
  );
}
