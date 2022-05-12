import React from 'react';
import {
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase-config';

export function ModalDelete({ openModalDelete, closeModalDelete, currentId }) {
  const onDeleteBlog = async (id) => {
    await deleteDoc(doc(db, 'blogs', id));
  };

  if (!openModalDelete) return null;
  return (
    <section className="modalDelete">
      <div className="popupDelete">
        <button
          className="closePopDelete"
          type="button"
          onClick={closeModalDelete}
        >
          X
        </button>
        <p className="titleDelete">
          🗑️
          <br />
          Are you sure you want to delete this note?
        </p>
        <div data-testid="btns" className="btnsDelete">
          <button
            id="btnDelete"
            type="button"
            className="btnDelete"
            onClick={() => {
              onDeleteBlog(currentId);
              closeModalDelete();
            }}
          >
            Delete
          </button>
          <button
            name="btn-cancel"
            id="cancel"
            type="button"
            className="btnNoDelete"
            onClick={closeModalDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
