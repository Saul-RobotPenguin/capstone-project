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
      setTimeout(() => {
        setError(false);
      }, 3000);
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
      {error && (
        <div class="alert alert-warning shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{status}</span>
          </div>
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="Your Username"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsersUsername(e.target.value)}
          required
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
