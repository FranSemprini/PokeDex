import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAamncXzqMbFnI4cjnCzQaomVD5L367IAc",
  authDomain: "poke-3fc38.firebaseapp.com",
  projectId: "poke-3fc38",
  storageBucket: "poke-3fc38.appspot.com",
  messagingSenderId: "985345312546",
  appId: "1:985345312546:web:4cee709a38b9abbe82077b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)