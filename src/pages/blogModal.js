/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {
  getDoc,
  doc,
} from 'firebase/firestore';
import { db, auth } from '../firebase-config';
// const postsCollectionRefs = collection(db, "blogs");

export function BlogModal({
  openModal,
  closeModal,
  addOrEditBlog,
  currentId,
  // blogs,
}) {
  const valuesBlogs = {
    tittle: '',
    message: '',
    date: new Date().toDateString(),
    userId: auth.currentUser.uid,
  };
  // const navigate = useNavigate();

  const [values, setValues] = useState(valuesBlogs);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const saveDataBlog = async () => {
    addOrEditBlog(values);
    setValues({ ...valuesBlogs });
  };

  const getBlogById = async (id) => {
    const docB = await getDoc(doc(db, 'blogs', id));
    setValues({ ...docB.data() });
  };

  useEffect(() => {
    if (currentId === '') {
      setValues({ ...valuesBlogs });
    } else {
      getBlogById(currentId);
    }
  }, [currentId]);

  if (!openModal) return null;

  return (
    <section className="containerPopup">
      <div className="containerExtern">
        <div className="popupBlog">
          <button
            type="button"
            className="btnClosePopup"
            onClick={closeModal}
          >
            X
          </button>
          <p className="titleNote">{currentId === '' ? 'Create Note ✏️' : 'Update Note ✏️'}</p>
          <input
            className="titleBlog"
            type="text"
            placeholder="Title"
            name="tittle"
            value={values.tittle}
            onChange={inputChange}
          />
          <textarea
            className="blogMessage"
            placeholder="Description"
            name="message"
            value={values.message}
            onChange={inputChange}
          />
          <button
            type="button"
            className="btnSaveBlog"
            onClick={() => {
              saveDataBlog();
              closeModal();
            }}
          >
            {currentId === '' ? 'Save' : 'Update'}
          </button>
        </div>
      </div>
    </section>
  );
}
