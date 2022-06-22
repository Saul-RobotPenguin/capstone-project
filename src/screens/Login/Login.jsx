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
    

    <div class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700">
        <form class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" onSubmit={(e) => handleSubmit(e)} >
            <h1 class="text-center text-3xl">LOGIN</h1>
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light" for="email">Username</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" type="text" placeholder="Your Username"
                name="username" id="username" onChange={(e) => setUsersUsername(e.target.value)}
              required/>
          </div>
          
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light" for="password">Password</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" type="password"
                placeholder="Your Password" name="password" id="password" onChange={(e) => setUsersPassword(e.target.value)}
              required/>
            </div>

            <button class="btn" type="submit" id="submit">
                Log In
            </button>
        </form>
    </div>

    </>
  );
};

export default Login;
