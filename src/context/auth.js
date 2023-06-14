import React, { createContext, useState, useEffect } from "react"; 
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";


export const AuthContext = createContext({});

export default function AuthProvider({children}){
  const navigation = useNavigation()

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);


  async function signUp(email, password, name){
    setLoadingAuth(true)
    await auth().createUserWithEmailAndPassword(email, password)

    .then(async (value) => {

      let uid = value.user.uid;
      await firestore().collection('users')
      .doc(uid).set({
        name: name,
        createdAt: new Date(),
      })
      .then(() => {
        let data = {
          uid: uid,
          name: name,
          email: value.user.email,
        }

        setUser(data);
        setLoadingAuth(false);
        navigation("Home")
      })
    })
    .catch((err) => {

      if(err.code === "auth/email-already-in-use"){
        alert("Email já está em uso!")
      }
      if(err.code === "auth/invalid-email"){
        alert("Email invalido!")
      }
      console.log(err)
      setLoadingAuth(false);
    })
  }

  async function signIn(email, password){

    setLoadingAuth(true);
  
    await auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {

      let uid = value.user.uid;

      const userProfile = await firestore().collection('users')
      .doc(uid).get();

      let data = {
        uid: uid,
        name: userProfile.data().name,
        email: value.user.email
      }

      setUser(data);
      setLoadingAuth(false);
      navigation.navigate("Home")
    })

    .catch((err) => {
      if(err.code === "auth/user-not-found"){
        alert("Usuario não encontrado!")
      }
      console.log(err)
      setLoadingAuth(false);
    })
  }

  return(
    <AuthContext.Provider value={{ signUp, signIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  )
}