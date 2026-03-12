import { rotulo_input_meta, rotulo_btn_cadastro_meta, rotulo_lista_metas } from 'mensagens.js';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={{ width: 150 }}>
        <TextInput style={styles.inputText}
          placeholder={rotulo_input_meta} />
      </View>
      <View style={{ width: 150 }}>
        <Button title={rotulo_btn_cadastro_meta} />
      </View>
      <View>
        <Text>{rotulo_lista_metas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    padding: 30,
  },
  inputText: {
    borderColor: '#ccccc',
    borderWidth: 1
  },
});
