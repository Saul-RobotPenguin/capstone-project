import { useLocation } from "react-router-dom";
import { Row } from "react-grid-system";
import { useState } from "react";

const Article = (props) => {
  const location = useLocation();

  console.log(location.state.Article.Article);
  // setArticle(location.state.Article);

  return (
    <Row justify="center" style={{ gap: "2%" }} className="py-6  " debug>
      <div className="  content-between ">
        <div
          className="card  bg-base-100 shadow-xl height 
          "
          style={{ width: "720px", height: "500px" }}
        >
          <iframe
            width="700px"
            height="550"
            src={location.state.Article.Article.url}
            title="W3Schools Free Online Web Tutorials"
          ></iframe>
        </div>
      </div>
    </Row>
  );
};

export default Article;
