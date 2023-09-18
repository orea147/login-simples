import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("algo está errado.");
      }
    }
  };
  return (
    <div className="login-container">
      <h2>Página Fechada!</h2>
      <h3>Informe a sua conta para acessar:</h3>

      <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="Digite seu e-mail"
        className="input-field"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite seu senha"
        className="input-field"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
