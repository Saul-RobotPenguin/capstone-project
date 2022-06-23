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


    <div class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700">
        <form class="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" onSubmit={(e) => handleSubmit(e)}>
            <h1 class="text-center text-3xl">JOB POSTING</h1>
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light" for="company">Company</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" type="text" placeholder="Company"
                name="company" id="company" onChange={(e) => setUsernameToSend(e.target.value)}
              required/>
          </div>
          
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light" for="job link">Job Link</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" type="text"
                placeholder="Job Link" name="job link" id="job link" onChange={(e) => setLink(e.target.value)}
              required/>
          </div>

        <div class="flex flex-col space-y-2">
        <label class="text-sm font-light" for="role">What Type Of Role?</label>
        <select class="w-96 px-3 py-2 rounded-md border border-slate-400" type="select" placeholder="What Type Of Role?" name="password" id="password" onChange={(e) => setRole(e.target.value)} >
         
        <option disabled selected>
            What Type Of Role?
        </option>
        <option value="Web Developer">Web Developer</option>
        <option value="Data Science">Data Science</option>
        <option value="Cyber Security">Cyber Security</option>
        </select>          
        </div>


            <button class="btn" type="submit">
                Create
            </button>
        </form>
    </div>


    // <div>
    //   <form onSubmit={(e) => handleSubmit(e)}>
    //     <input
    //       type="text"
    //       name="company"
    //       placeholder="Company"
    //       class="input input-bordered w-full max-w-xs"
    //       onChange={(e) => setUsernameToSend(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       name="JobLink"
    //       placeholder="JobLink"
    //       class="input input-bordered w-full max-w-xs"
    //       onChange={(e) => setLink(e.target.value)}
    //     />
    //     <select
    //       class="select select-bordered w-full max-w-xs"
    //       onChange={(e) => setRole(e.target.value)}
    //     >
    //       <option disabled selected>
    //         What Type Of Role?
    //       </option>
    //       <option value="Web Developer">Web Developer</option>
    //       <option value="Data Science">Data Science</option>
    //       <option value="Cyber Security">Cyber Security</option>
    //     </select>

    //     <button id="submit" type="submit" className="btn">
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
};

export default FeaturedPage;
