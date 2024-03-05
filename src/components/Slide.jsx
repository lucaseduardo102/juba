import React from "react";

const carouselStyle = {
  marginLeft: "300px", 
  marginRight: "100px", 
};

export function Slide () {

return (
  <div className="container">
    <div className="d-flex justify-content-center">
      <div className="carousel slide text-center" data-bs-ride="carousel" id="ads" style={carouselStyle}>
          <div className="carousel-indicators">
            <button
              className="active"
              data-bs-target="#ads"
              data-bs-slide-to="0"
            ></button>
            <button
              className=""
              data-bs-target="#ads"
              data-bs-slide-to="1"
            ></button>
            <button
              className=""
              data-bs-target="#ads"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://picsum.photos/1280/420?random=1"
                alt=""
                className="d-block mx-auto"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/1280/420?random=2"
                alt=""
                className="d-block mx-auto"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/1280/420?random=3"
                alt=""
                className="d-block mx-auto"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-target="#ads"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            data-bs-target="#ads"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}