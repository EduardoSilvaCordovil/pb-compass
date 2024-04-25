import axios from "axios";
import { useEffect, useState } from "react";

const PostForm = ({ post, onSucess }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = { title, body, userId: 1 };

    try {
      if (post) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          newPost
        );
        onSucess(response.data, "update");
      } else {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          newPost
        );
        onSucess(response.data, "add");
      }
      setTitle("");
      setBody("");
    } catch (error) {
      console.log("ERRO AO ENVIAR POSTAGEM: ", error);
    }
  };

  const hadleDelete = async () => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`
      );
      onSucess(post, "delete");
      setTitle("");
      setBody("");
    } catch (error) {
      console.log("ERRO AO DELETAR POSTAGEM: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Digite o título"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Digite o conteúdo..."
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
      {post && (
        <button type="button" onClick={hadleDelete}>
          Excluir
        </button>
      )}
    </form>
  );
};
export default PostForm;
