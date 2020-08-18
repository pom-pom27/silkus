import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardCategories = ({ title, imagePath, color }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 95,
          height: 93,
          borderRadius: 20,
          alignSelf: 'flex-end',
          backgroundColor: color,
          marginBottom: 5,
          position: 'absolute',
          left: 33,
          bottom: 63,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image resizeMode="cover" source={imagePath} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column-reverse',
          marginBottom: 16,
        }}>
        <Text style={{ marginLeft: 30, maxWidth: 60 }}>{title}</Text>
      </View>
    </View>
  );
};

export default CardCategories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 120,
    height: 151,
    elevation: 3,
    borderRadius: 20,
    marginVertical: 12,
  },
});
