// import {  doc } from "firebase/firestore";
// import { db } from "../firebase-config";
import editIcon from "../img/editPost.svg";
// import { deleteDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export default function DeleteEdit({ id}) {
  const navigate = useNavigate();

    const handleEdit = async () => {
      if (window.confirm("Are you sure you want to edit this article?")) {
        try {
          await navigate('/createPost')

          
             // deleteDoc(postDoc);
        } catch (error) {
          console.log(error);
        }
      }
    };


    return (
      <div>
      <button onClick={ handleEdit}>
      <img class="edit-icon" src={editIcon} alt="edit-icon" />
                       </button>

      </div>
    );
  }