import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DisplayProps {
  display: string;
}

const Display = ({ display }: DisplayProps) => {
  return (
    <View>
      <Text style={styles.title}>
        {display}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 17,
    marginBottom: 5,
    fontSize: 90,
    textAlign: 'right',
    color: 'white',
  },
});

export default Display;
