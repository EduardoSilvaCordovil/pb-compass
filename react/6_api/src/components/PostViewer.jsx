import useHttp from "../hooks/useHttp";
import { useParams } from "react-router-dom";

const PostViewer = () => {
  const { postId } = useParams();
  const {
    date: post,
    error,
    loading,
  } = useHttp(
    `http://jsonplaceholder.typicode.cpm/posts/${postId}`,
    null,
    null,
    [postId]
  );
  return (
    <div>
      <h1>Post: {post}</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostViewer;
