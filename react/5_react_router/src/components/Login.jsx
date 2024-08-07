import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`O usuário ${username} logou com sucesso!`);
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
