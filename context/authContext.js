/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '../firebase-config';

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is not auth provider');
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const postsCollectionRef = collection(db, 'posts');
  const data = getDocs(postsCollectionRef);

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const createPost = (title, postText) => {
    addDoc(postsCollectionRef, {
      title,
      postText,
      date: new Date().toDateString(),
      userId: auth.currentUser.uid,
    });
  };

  const getPost = async (setPostList) => {
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const onGetPost = (callback) => onSnapshot(collection(db, 'posts'), callback);

  const deletePost = (id) => {
    deleteDoc(doc(db, 'posts', id));
  };

  const updatePost = (id, updatedPost) => updateDoc(doc(db, 'posts', id), updatedPost);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{
      signup,
      login,
      user,
      logout,
      loading,
      loginWithGoogle,
      createPost,
      getPost,
      onGetPost,
      deletePost,
      updatePost,
    }}
    >
      {children}

    </authContext.Provider>
  );
}
