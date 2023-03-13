// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, addDoc, deleteDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApFaNMe4wiY5esfNbDChqOwFoRK-7DG1g",
    authDomain: "seattlecrime-492f8.firebaseapp.com",
    projectId: "seattlecrime-492f8",
    storageBucket: "seattlecrime-492f8.appspot.com",
    messagingSenderId: "408683887601",
    appId: "1:408683887601:web:84e5389e3ff676f2b6e250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//A function to get cards from the firebase
export async function getCards() {
    const cards = await getDocs(collection(db, "cards"));
    let result = [];
    cards.forEach((card) => result.push(card.data()));
    return result;
}

//A function to add cards to the firebase to store
export async function addCard(someObject) {
    await addDoc(collection(db, "cards"), someObject);
}

//A function to remove cards from the firebase
export async function removeCard(cardLink) {
    const docsToDelete = await getDocs(query(collection(db, "cards"), where("link", "==", cardLink)));
    docsToDelete.forEach((doc) => deleteDoc(doc.ref));
}