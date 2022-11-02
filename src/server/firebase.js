// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {Firestore, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHGntL7zd3sQxsA0Wr5bicIXU0L_5tWwo",
  authDomain: "imcprojetinho.firebaseapp.com",
  projectId: "imcprojetinho",
  storageBucket: "imcprojetinho.appspot.com",
  messagingSenderId: "568419192555",
  appId: "1:568419192555:web:881835685dea48e2c5b8ae",
  measurementId: "G-V3LC1F31S3"
};

// Initialize Firebase
export const iniciar = initializeApp(firebaseConfig);
export const auth = getAuth(iniciar)
export const db = getFirestore(iniciar)

export const provider = new GoogleAuthProvider()