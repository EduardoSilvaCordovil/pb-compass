import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound"
import Dashboard from "./components/Dashboard";
import TaskDetails from "./components/TaskDetails";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>

          <li>
            <Link to="/about">Sobre</Link>
          </li>

          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/contact"
            >
              Contato
            </NavLink>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <div>
          <h2>Tarefas</h2>
          <Link to="/tasks/1">Tarefa 1</Link>
          <Link to="/tasks/2">Tarefa 2</Link>
          <Link to="/tasks/3">Tarefa 3</Link>
        </div>

        <div>
          <h2>Itens</h2>
          <Link to="/items/1">Item 1</Link>
        </div>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <p>Rodapé</p>
    </>
  );
}
export default App;
