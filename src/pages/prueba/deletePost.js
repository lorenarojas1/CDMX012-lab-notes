/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-alert */
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import deleteIcon from '../img/deletePost.svg';

export default function DeleteArticle({ id }) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        const postDoc = doc(db, 'posts', id);
        await deleteDoc(postDoc);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>
        <img className="delete-icon" src={deleteIcon} alt="delete-icon" />
      </button>
    </div>
  );
}
