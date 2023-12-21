import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXMWQqV9qLkMt406UdpUiEO8Y10DYqEhg",
  authDomain: "entrega-reactjs-coder.firebaseapp.com",
  projectId: "entrega-reactjs-coder",
  storageBucket: "entrega-reactjs-coder.appspot.com",
  messagingSenderId: "855821189768",
  appId: "1:855821189768:web:87e85e6e2cd8827573553d",
};

// Inicializa la aplicación
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
export const db = getFirestore(app);

