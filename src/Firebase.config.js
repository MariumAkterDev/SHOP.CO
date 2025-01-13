import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBBRUZQCPhaRw60e4ybfMRag_LLKxLVT0",
  authDomain: "shopco-b0687.firebaseapp.com",
  projectId: "shopco-b0687",
  storageBucket: "shopco-b0687.firebasestorage.app",
  messagingSenderId: "264557891433",
  appId: "1:264557891433:web:5886b71ced1f66fba977f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app