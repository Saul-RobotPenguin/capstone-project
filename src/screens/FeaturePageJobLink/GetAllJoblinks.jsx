import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Container, Row, Col, Visible } from "react-grid-system";
const GetAllJobLinks = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const [jobLinks, setJobLinks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:3000/api/joblinks");
      setJobLinks(response.data.joblinks);
      console.log(response.data.joblinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!token) {
      return navigate(`/login`);
    }
  }, []);
  const jobLinksData = jobLinks.map((jobLink) => {
    return (
      <Col xs={10} sm={8} md={6} lg={4} xl={3} className="py-6  ">
        <Row justify="center" style={{ gap: "2%" }} className="py-6  " debug>
          <div className="  content-between ">
            <div key={jobLink._id}>
              <div
                className="card  bg-base-100 shadow-xl height 
               "
                style={{ width: "320px", height: "200px" }}
              >
                <div class="card-body">
                  <h2 class="card-title"> {jobLink.role}</h2>
                  <p>
                    A New {jobLink.role} Job Opportunity at {jobLink.username}
                  </p>
                  <div class="card-actions justify-end">
                    {/* <div className="card-actions justify-end pb-6 pr-6"> */}
                    <button className="btn-sm btn-primary">
                      <a href={jobLink.link}>Apply To This Job!</a>
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Col>
    );
  });
  return (
    <h1>
      <Container fluid>
        <Visible xs>
          <Row
            align="center"
            justify="center"
            direction="column"
            style={{ gap: "10%" }}
            debug
          >
            <Row
              justify="center"
              style={{ gap: "2%" }}
              className="py-6  "
              debug
            >
              {jobLinksData}
            </Row>
          </Row>
        </Visible>
        <Visible md>
          <Row justify="center" style={{ gap: "10%" }} debug>
            {jobLinksData}
          </Row>
        </Visible>
        <Visible lg>
          <Row justify="center" style={{ gap: "10%" }} debug>
            {jobLinksData}
          </Row>
        </Visible>
        <Visible xl>
          <Row justify="center" style={{ gap: "2%" }} debug>
            {jobLinksData}
          </Row>
        </Visible>
      </Container>
    </h1>
  );
};

export default GetAllJobLinks;
