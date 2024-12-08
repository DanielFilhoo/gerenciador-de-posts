import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

const Post = () => {
    const {id} = useParams();

    const [post, setpost] = useState({})

    const getPost = async() => {
        try {

          const response = await blogFetch.get(`/posts/${id}`)

          const data = response.data

          setpost(data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getPost();
    }, [])

  return (
    <div className="post-container">
      {!post.title ? <p>Carregando...</p> : <div className="post"> 
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        </div>}
    </div>
  )
}

export default Post