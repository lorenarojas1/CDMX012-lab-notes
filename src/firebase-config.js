import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyDOLso3Nram1heAfO8GVlmEJAeyo-XPG-c",
    authDomain: "labnotes-7060b.firebaseapp.com",
    projectId: "labnotes-7060b",
    storageBucket: "labnotes-7060b.appspot.com",
    messagingSenderId: "51562476133",
    appId: "1:51562476133:web:2c8e81c29a4fa550dccc8c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

