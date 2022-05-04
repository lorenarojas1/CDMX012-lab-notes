import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import plusIcon from "../img/plusIcon.svg";
// import editIcon from "../img/editPost.svg";
import lineBlack from "../img/lineBlack.svg";
import dotsIcon from "../img/dotsIcon.svg";
// import deleteIcon from "../img/deletePost.svg";
import {
    collection,
    getDocs,
} from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import Navbar from "../Navbar";
import DeleteArticle from "./deletePost";
import EditArticle from "./editPost";
// import { BlogModal } from "./blogModal";

export default function DashboardPage() {
// LORENA
   const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [postLists, setPostList] = useState([]);// si
  const postsCollectionRef = collection(db, "posts");




// LORENA
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postsCollectionRef]);

const handleCreatePost = async () => {
      navigate('/createPost');
  };
  

if (loading) return <h1>Loading</h1>

    return (
      <><Navbar />
      <div class="container-dashboard">
        <h1 class="title-blog">Welcome <br/>{user.email}!!!</h1>
        <div class="container-notes">
          {postLists.map((post) => {
            return (
              <div className="post">
                <div className="postInfo">
                  <img class="dots-icon" src={dotsIcon} alt="dots-icon" />
                  <img class="line-icon" src={lineBlack} alt="line-icon" />
                  <p className="title"> {post.title}</p>
                  <p className="postText"> {post.postText} </p>
                  <p className="postDate"> {post.date} </p>
                </div>

                <div className="btn-post">

                    {user && post.userId === auth.currentUser.uid && (
                      <EditArticle id={post.id}/>
                    )}
                    {user && post.userId === auth.currentUser.uid && (
                      <DeleteArticle id={post.id}/>
                    )}
                    
                </div>
                </div>
    
        
            );
          })}
        </div>

        <button on onClick={handleCreatePost}>
            <img class="plus-icon" src={plusIcon} alt="plus-icon" />
          </button>

      </div></>

    )
}

