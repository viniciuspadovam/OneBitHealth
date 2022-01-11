import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: 'Meu imc hoje é: ' + props.resultimc,
    });
  };

  return (
    <View style={styles.resultimc}>
      <View style={styles.boxShareBtn}>
        {props.resultImc != null ? (
          <TouchableOpacity onPress={onShare} style={styles.share}>
            <Text style={styles.shareText}> Share </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <Text style={styles.information}> {props.messageResultImc} </Text>
      <Text style={styles.resultimctxt}> {props.resultImc} </Text>
      <Text style={styles.information}> {props.infoImc} </Text>
    </View>
  );
}
