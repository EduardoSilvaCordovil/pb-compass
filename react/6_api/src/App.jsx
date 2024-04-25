import "./App.css";
import AxiosPosts from "./components/AxiosPosts";
import FetchPosts from "./components/FetchPosts";
import PostViewer from "./components/PostViewer";
import PostLoader from "./components/PostLoader";
import PostManager from "./components/PostManager";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">Fetch Posts</Link>
        <Link to="/axios-posts">Axios Posts</Link>
      </div>

      <div>
        <Link to="/posts">Gerenciar posts</Link>
      </div>

      <div>
        <Link to="/post/1">Carregar post 1</Link>
      </div>

      <div>
        <Link to="/post/999">Carregar post 999</Link>
      </div>

      <div>
        <Link to="/post/view/2">Carregar post 2</Link>
      </div> 

      <Routes>
        <Route path="/fetch-posts" element={<FetchPosts />} />
        <Route path="/axios-posts" element={<AxiosPosts />} />
        <Route path="/posts" element={<PostManager />} />
        <Route path="/post/:postId" element={<PostLoader />} />
        <Route path="/post/view/:postId" element={<PostViewer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
