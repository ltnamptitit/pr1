import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCjfSEKx3_t7asIz2q4CaEDEIQu5Iysp24",
    authDomain: "todo-beso-pr1.firebaseapp.com",
    projectId: "todo-beso-pr1",
    storageBucket: "todo-beso-pr1.appspot.com",
    messagingSenderId: "653515526379",
    appId: "1:653515526379:web:3ee5eb82351a92cf44eeae"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)