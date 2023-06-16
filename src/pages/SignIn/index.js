import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useState, useContext } from 'react'

import image from "../../assets/Logo.png"
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { AuthContext } from '../../context/auth';

export default function SignIn() {
  const { signUp, signIn, loadingAuth } = useContext(AuthContext);

  const [type, setType] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");


  function toggleLogin(){
    setType(!type);
    setName("");
    setEmail("");
    setPasword("");
  }



  async function handleSignUp(){

    if(name === "" || email === "" || password === ""){
      alert("Preencha todos os campos para cadastrar.");
      return;
    }

    await signUp(email, password, name)
    setName("");
    setEmail("");
    setPasword("");
  }



  async function handleSignIn(){

    if(email === "" || password === ""){
      alert("Preencha todos os campos.");
      return;
    }

    await signIn(email, password)
    setEmail("");
    setPasword("");
  }

  return (
    <View style={styles.container}>
        <Image source={image}/>

        {
          type && (
            <TextInput
              style={styles.input}
              placeholder='Nome Completo'
              value={name}
              onChangeText={(text) => setName(text)}
            />
          )
        }

        <TextInput
          style={styles.input}
          placeholder='teste@teste.com'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder='***********'
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPasword(text)}
        />

        <TouchableOpacity style={styles.inputButton} onPress={type ? handleSignUp : handleSignIn}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <Text 
                style={{color: "#FFF", fontWeight: 500, fontSize: 16}}>
                {type ? "Cadastrar" : "Acessar"}
              </Text>
            )
          }
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 5}} onPress={toggleLogin}>
          <Text>{type ? "Já possuo uma conta" : "Não possui uma conta? Cadastre-se!"}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    marginTop: 15,
    width: '80%',
    height: 40,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 1,
  },

  inputButton: {
    width: "80%",
    height: 40,
    backgroundColor: "#FD2B3A",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 6
  }
})

