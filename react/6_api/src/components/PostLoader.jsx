import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostLoader = () => {

  const { postId } = useParams();
  const [error, setError] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sucessMessage, setSucessesMessage] = useState();

  useEffect(() => {

    const fetchPost = async () => {
        
      setError("");
      setLoading(true);
      setSucessesMessage();

      try {
        if (postId > 500) {
          setPost(null);
          throw new Error("NÃO EXISTE!");
        }
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(response.data);
        setSucessesMessage("POST CARREGADO COM SUCESSO!");
      } catch (error) {
        setError("FALHA AO CARREGAR POST" + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  return (
    <div>
      <h1>Post: {post}</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {sucessMessage && <p style={{ color: "green" }}>{sucessMessage}</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostLoader;
