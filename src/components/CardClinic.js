import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardClinic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBody}>
        <Image source={require('../assets/1.png')} />
        <View>
          <Text style={styles.cardTitle}>Dr. Stella Kane</Text>
          <Text style={styles.cardSubtitle}>
            Heart Surgeon - Flower Hospital
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardClinic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF1FA',
    borderRadius: 20,
  },
  cardBody: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 4,
    fontSize: 18,
    color: '#1E1C61',
  },
  cardSubtitle: {
    color: '#1E1C61',
    marginHorizontal: 20,
  },
});
