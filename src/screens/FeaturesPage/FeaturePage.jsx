import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import JobLinkCard from "../../components/JobLinkCard/JobLinkCard";
import { Container, Row, Col, Visible } from "react-grid-system";

const FeaturedPage = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let username1 = localStorage.getItem("username");
  const [newJobPost, setNewJobPost] = useState(null);
  const [jobLinks, setJobLinks] = useState([]);
  const [usernameToSend, setUsernameToSend] = useState("");
  const [role1, setRole] = useState("");
  const [link1, setLink] = useState("");

  useEffect(() => {
    setUsernameToSend(username1);
  }, []);

  useEffect(() => {
    if (!token) {
      return navigate(`/login`);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      url: "http://localhost:3000/api/joblinks",
      method: "POST",
      data: {
        username: usernameToSend,
        ownerId: "nothing",
        role: role1,
        link: link1,
      },
    })
      .then((res) => setNewJobPost(res))
      .catch(console.error);
  };
  // console.log(jobLinksData);

  useEffect(() => {
    if (newJobPost) {
      return navigate(`/`);
    }
  }, [newJobPost, navigate]);

  console.log(link1);
  console.log(role1);
  console.log(localStorage.getItem("username"));
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="company"
          placeholder="Company"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setUsernameToSend(e.target.value)}
        />
        <input
          type="text"
          name="JobLink"
          placeholder="JobLink"
          class="input input-bordered w-full max-w-xs"
          onChange={(e) => setLink(e.target.value)}
        />
        <select
          class="select select-bordered w-full max-w-xs"
          onChange={(e) => setRole(e.target.value)}
        >
          <option disabled selected>
            What Type Of Role?
          </option>
          <option value="Web Developer">Web Developer</option>
          <option value="Data Science">Data Science</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>

        <button id="submit" type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeaturedPage;
