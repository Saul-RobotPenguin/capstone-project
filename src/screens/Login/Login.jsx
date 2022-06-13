import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [usersUsername, setUsersUsername] = useState("");
  const [usersPassword, setUsersPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(null);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: "http://localhost:3000/api/login",
      method: "POST",
      data: {
        username: usersUsername,
        password: usersPassword,
      },
    })
      .then((res) => checkIfError(res.data))

      .catch((err) => {
        console.error(err);
      });
  };

  function checkIfError(status) {
    const result = status;
    console.log(status);
    if (result.status == "error") {
      setError(true);
      setStatus(result.error);
    } else if (result.status == "ok") {
      localStorage.setItem("username", usersUsername);
      localStorage.setItem("token", status.data);
      let key = localStorage.getItem("token");
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    if (loggedIn) {
      return navigate(`/`);
    }
  }, [loggedIn, navigate]);

  return (
    <>
      {error && <p>{status}</p>}

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="Your Username"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsersUsername(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Your Password"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsersPassword(e.target.value)}
        />

        <button id="submit" type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
