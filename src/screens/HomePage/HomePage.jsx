import { useState } from "react";
import { Container, Row, Col, Visible } from "react-grid-system";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { GnewsSearchWebDevelopment } from "../../services/api-calls";
import { GnewsSearchDataScience } from "../../services/api-calls";
import { GnewsSearchCyberSecurity } from "../../services/api-calls";

import "./HomePage";

const HomePage = () => {
  //Saving Info from the api call
  const [articles, setArticles] = useState([]);

  async function handleWebDevSearch() {
    const response = await GnewsSearchWebDevelopment();

    SetItems(response.data.articles);
  }

  async function handleCyberSearch() {
    const response = await GnewsSearchCyberSecurity();

    SetItems(response.data.articles);
  }

  async function handleDataSearch() {
    const response = await GnewsSearchDataScience();

    SetItems(response.data.articles);
  }

  function SetItems(item) {
    setArticles(item);
  }

  return (
    <>
      <div className="bg-base-200 pt-36 pb-36">
        <div class="lg:flex-row-reverse  ">
          <div>
            <h1 class=" text-5xl font-bold  ">
              Resources For Bootcamp Graduates!
            </h1>
            <p class=" py-6 flex-1  ">
              Learn from experts and peers in an interactive, online,
              environment with articles tailored for digital learning.
            </p>

            <div class="mt-4"></div>
            <div class=" container flex justify-center ">
              <div class="flex rounded">
                <div tabindex="0" role="button" aria-label="MAIN BUTTON">
                  <button
                    onClick={handleCyberSearch}
                    className=" bg-dark_orange rounded-full btn hover:bg-milk hover:text-dark_orange "
                  >
                    Cyber Security
                  </button>
                  <button
                    onClick={handleWebDevSearch}
                    className="bg-sky rounded-full btn hover:bg-milk hover:text-sky  focus:outline-none "
                  >
                    Web Development
                  </button>
                  <button
                    onClick={handleDataSearch}
                    className=" bg-red rounded-full btn hover:bg-milk hover:text-red focus:outline-none"
                  >
                    Data Science
                  </button>
                  {/* <button onClick={() => articleApiCall()}>Go</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <Visible xs>
          <Row
            align="center"
            justify="center"
            direction="column"
            style={{ gap: "10%" }}
            debug
          >
            {articles.map((article, i) => (
              <ArticleCard Article={article} key={i} id={i} />
            ))}
          </Row>
        </Visible>

        <Visible sm>
          <Row
            align="center"
            justify="center"
            direction="column"
            style={{ gap: "10%" }}
            debug
          >
            {articles.map((article, i) => (
              <ArticleCard Article={article} key={i} id={i} />
            ))}
          </Row>
        </Visible>
        <Visible md>
          <Row justify="center" style={{ gap: "10%" }} debug>
            {articles.map((article, i) => (
              <ArticleCard Article={article} key={i} id={i} />
            ))}
          </Row>
        </Visible>
        <Visible lg>
          <Row justify="center" style={{ gap: "10%" }} debug>
            {articles.map((article, i) => (
              <ArticleCard Article={article} key={i} id={i} />
            ))}
          </Row>
        </Visible>
        <Visible xl>
          <Row justify="center" style={{ gap: "2%" }} debug>
            {articles.map((article, i) => (
              <ArticleCard Article={article} key={i} id={i} />
            ))}
          </Row>
        </Visible>
      </Container>
    </>
  );
};

export default HomePage;
