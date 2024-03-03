import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity, scroll, ScrollView } from 'react-native'
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

export default function App(){

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState();
  const [valor, setValor] = useState(200);
  const [status, setStatus] = useState(false);

  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    {key: 1, sexo: 'Masculino'},
    {key: 2, sexo: 'Feminino'},
  ]);

  function pegaNome(texto){
    setNome(texto)
  }

  function pegaIdade(texto){
    setIdade(texto)
  }

  function entrar(){
    alert(
      'Nome: ' + nome +
      '\nIdade: ' + idade +
      '\nSexo: ' + sexo[sexoSelecionado].sexo +
      '\nLimite: ' + valor.toFixed(0) +
      '\nEstudante: ' + status
    )
  }

  let sexoItem = sexo.map( (v,k) => {
    return <Picker.Item key={k} value={k} label={v.sexo} />
  } )

  return(
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Soft Bank</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.textInput}>Digite seu nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={ (nome) => pegaNome(nome)}
        />
        <Text style={styles.textInput}>Digite sua idade:</Text>
        <TextInput
          style={styles.input}
          onChangeText={ (idade) => pegaIdade(idade)}
          keyboardType="number-pad"
          maxLength={3}
        />

        <Text style={styles.textInput}>Selecione seu sexo: </Text>

        <Picker
          selectedValue={sexoSelecionado}
          onValueChange={ (itemValue, itemIndex) => setSexoSelecionado(itemValue) }
        >
          {sexoItem}
        </Picker>

        <Text style={styles.textInput}>Selecione seu limite:  { valor.toFixed(0) }</Text>

        <Slider
          minimumValue={200}
          maximumValue={3000}
          value={valor}
          onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
          minimumTrackTintColor="green"
          maximumTrackTintColor="#B0B0B0"
          thumbTintColor="#fff"
        />

        <Text style={styles.textSwitch}>Estudante: </Text>

        <Switch
          style={styles.switch}
          value={status}
          onValueChange={ (valorSelecionado) => setStatus(valorSelecionado) }
        />

        <TouchableOpacity
          onPress={ () => entrar({
            alert
          }) }
        >
          <Text style={styles.button}>Abrir conta</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D6E5E3',
  },
  head:{
    height: 90,
    backgroundColor: '#08B68E',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 40,
  },
  textInput:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  input:{
    width: 300,
    marginTop: 10,
    marginLeft: 20,
    borderWidth: 1,
    fontSize: 20,
    padding: 3
  },
  textSwitch:{
    width: 100,
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  switch:{
    marginTop: -36,
    marginRight: 230
  },
  button:{
    backgroundColor: '#9FD8CB',
    width: 100,
    marginLeft: 155,
    textAlign: 'center',
    padding: 15,
    borderRadius: 20,
    fontSize: 14,
    marginTop: 10
  }
})