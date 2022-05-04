/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { BlogModal } from './blogModal';
import { db } from '../firebase-config';
import { ModalDelete } from './ModalDelete';
import Navbar from './Navbar';
import { useAuth } from '../context/authContext';
import plusIcon from '../img/plusIcon.svg';
import clipIcon from '../img/clipIcon.svg';
import editIcon from '../img/editPost.svg';
import deleteIcon from '../img/deletePost.svg';

export default function Blog() {
  const { user, loading } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [currentId, setCurrentId] = useState('');

  const addOrEditBlog = async (values) => {
    if (currentId === '') {
      await addDoc(collection(db, 'blogs'), values);
    } else {
      await updateDoc(doc(db, 'blogs', currentId), values);
    }
    setCurrentId('');
  };

  const getBlogs = async () => {
    onSnapshot(collection(db, 'blogs'), (querySnapshot) => {
      const docs = [];
      // eslint-disable-next-line no-shadow
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setBlogs(docs);
    });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (loading) return (<h1>Loading</h1>);

  return (
    <>
      <Navbar />
      <section className="container-dashboard">
        <h1 className="title-blog">
          Welcome
          <br />
          {user.email}
          !!!
        </h1>
        <section className="container-notes">
          {blogs.map((blog) => (
            <div className="post" key={blog.id}>
              <div className="postInfo">
                <img className="clip-icon" src={clipIcon} alt="clip-icon" />
                <p className="title">{blog.tittle}</p>
                <p className="postText">{blog.message}</p>
                <p className="postDate">{blog.date}</p>
              </div>
              <div className="btn-post">
                <button
                  type="button"
                  className=""
                  onClick={() => {
                    setOpenModalDelete(true);
                    setCurrentId(blog.id);
                  }}
                >
                  <img className="delete-icon" src={deleteIcon} alt="delete-icon" />
                </button>
                <button
                  type="button"
                  className=""
                  onClick={() => {
                    setOpenModal(true);
                    setCurrentId(blog.id);
                  }}
                >
                  <img className="edit-icon" src={editIcon} alt="edit-icon" />
                </button>
              </div>

            </div>
          ))}
        </section>
        <button
          type="button"
          className=""
          onClick={() => setOpenModal(true)}
        >
          {' '}
          <img className="plus-icon" src={plusIcon} alt="plus-icon" />
        </button>

        <BlogModal
          currentId={currentId}
          blogs={blogs}
          addOrEditBlog={addOrEditBlog}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />

        <ModalDelete
          openModalDelete={openModalDelete}
          closeModalDelete={() => setOpenModalDelete(false)}
          currentId={currentId}
        />

      </section>

    </>
  );
}
