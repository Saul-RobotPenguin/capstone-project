import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-grid-system";
import { Link } from "react-router-dom";

const JobLinkCard = (props) => {
  return (
    <>
      <Col xs={10} sm={8} md={6} lg={4} xl={3} className="py-6  ">
        <div className=" w-full   ">
          <div
            className="card  bg-base-100 shadow-xl height 
          "
            style={{ width: "320px", height: "500px" }}
          >
            <figure></figure>
            <div className="card-body  ">
              <h3 className="card-title text-base ">.Article.title</h3>
              <h3 className="card-title text-sm italic">By</h3>
              <h3 className="place-content-center ">...</h3>
            </div>
            <div className="card-actions justify-end pb-6 pr-6">
              <Link to={`/Article/${props.id}`} state={{ Article: props }}>
                <button className="btn btn-primary">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default JobLinkCard;
