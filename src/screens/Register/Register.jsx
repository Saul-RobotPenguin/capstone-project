import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [usersUsername, setUsersUsername] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersPassword, setUsersPassword] = useState("");

  const [createdUser, setCreatedUser] = useState(null);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: "http://localhost:3000/api/signup",
      method: "POST",
      data: {
        username: usersUsername,
        email: usersEmail,
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

    if (result.status == "error") {
      setError(true);
      setStatus(result.error);
    } else if (result.status == "success") {
      setCreatedUser(true);
    }
  }

  useEffect(() => {
    if (createdUser) {
      return navigate(`/login`);
    }
  }, [createdUser, navigate]);

  return (
    <>
      {error && <p>{status}</p>}


      <div class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700">
        <form class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" onSubmit={(e) => handleSubmit(e)}>
            <h1 class="text-center text-3xl">REGISTER</h1>
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light" for="email">Username</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" type="text" placeholder="Your Username"
                name="username" id="username" onChange={(e) => setUsersUsername(e.target.value)}
              required/>
          </div>
          
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light" for="password">Email</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" type="email"
                placeholder="Your Email" name="email" id="email" onChange={(e) => setUsersEmail(e.target.value)}
              required/>
          </div>
          
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light" for="password">Password</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" type="password"
                placeholder="Your Password" name="password" id="password" onChange={(e) => setUsersPassword(e.target.value)}
              required/>
            </div>

            <button class="btn" type="submit">
                Sign In
            </button>
        </form>
    </div>
    </>
  );
};

export default Register;
