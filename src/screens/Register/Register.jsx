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

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="Your Username"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsersUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsersEmail(e.target.value)}
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

export default Register;
