import axios from "axios";
import { Post } from "../types/post";
import { useEffect, useState } from "react";

const ExibirPostagens = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const buscarPostagens = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data.slice(0, 5));
      } catch (error) {
        console.log(error);
      } finally {
        setCarregando(false);
      }
    };

    buscarPostagens();
  }, []);

  return (
    <div>
      <h2>Lista de postagens</h2>
      {carregando ? (
        <p>Carregando posts...</p>
      ) : (
        <ul>
          {posts.map((posts) => (
            <li key={posts.id}>
              <h3>{posts.title}</h3>
              <p>{posts.body}</p>
            </li>
          ))}
        </ul>
      )}
      ;
    </div>
  );
};

export default ExibirPostagens;
