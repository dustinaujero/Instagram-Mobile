import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Instagram from './app/instagram';

export default class App extends React.Component{

  render() {
    return (
      <View style={styles.container}>
        <Instagram />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
