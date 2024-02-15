import { useEffect, useState } from 'react'

import './App.css'
import {auth,db} from './firebase/initialization';
import { createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from "firebase/auth";
import {doc,getDoc,updateDoc,arrayUnion} from "firebase/firestore";

function App() {

  const [userName,setUserName]=useState('');
  const [userPassword,setUserPassword]=useState('');
  const [searchData,setSearchData]=useState('');
  
  console.log(auth?.currentUser?.email);

  const getHistory=async()=>{
    try{
      console.log("history called")
      const customerData=doc(db,"customer_data",auth?.currentUser?.email);

      const data=await getDoc(customerData);

      console.log(data.data());

    }catch(e){
       console.log(e);
    }
       
  }

  
  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userName, userPassword);
      const user = userCredential.user;
      console.log("User signed up successfully:", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
    }
  };


  const logOut=()=>{
    try{
         signOut(auth);
    }
    catch(e){
         console.log(e);
    }
  }

  const signUp=async()=>{
        try{
          await signInWithEmailAndPassword(auth,userName,userPassword);
        }catch(e){
          console.log(e);
        }
  }

  const addSearch=async()=>{
        try{
            const customerDoc=doc(db,'customer_data',auth?.currentUser?.email);

            const update=await updateDoc(customerDoc,{history:arrayUnion(searchData)});

        }catch(e){
          console.log(e);
        }
  }

  return (
    <>  
      <div>
        <input type="text" onChange={(val)=>{
          setUserName(val.target.value);
          console.log(userName);
        }}/>
        <input type="text" onChange={(val)=>{
          setUserPassword(val.target.value);
        }}/>
      </div>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={logOut}>Log Out</button>
      <input type="text" onChange={(val)=>{
        setSearchData(val.target.value);
      }} />
      <button onClick={addSearch}>search</button>
      <button onClick={()=>{getHistory(userName)}}>get history</button>
    </>
  )
}

export default App
