import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/img/logo_initial.png')}
        />
        <TouchableOpacity
          style={styles.btnDetalhes}
          onPress={() => { }}
          activeOpacity={0.5}
        >
          <Text style={styles.text}>Saiba Mais</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff200',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnDetalhes: {
    backgroundColor: '#7158e2',
    width: 200,
    padding: 10,
    alignItems: "center",
    marginTop: 50,
    borderRadius: 7
  },
  text: {
    color: '#fff',
    fontSize: 17
  },
  logo: {
    width: 240,
    height: 180,
    marginBottom: 100
  }
});

export default App;
