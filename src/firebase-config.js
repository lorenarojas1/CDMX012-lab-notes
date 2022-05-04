/* eslint-disable linebreak-style */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDOLso3Nram1heAfO8GVlmEJAeyo-XPG-c',
  authDomain: 'labnotes-7060b.firebaseapp.com',
  projectId: 'labnotes-7060b',
  storageBucket: 'labnotes-7060b.appspot.com',
  messagingSenderId: '51562476133',
  appId: '1:51562476133:web:2c8e81c29a4fa550dccc8c',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();

export const storage = getStorage(app);
