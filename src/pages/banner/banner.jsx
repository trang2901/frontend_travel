import React from "react";
import "./banner1.css";
import anhbia from "../../image/anh-bia.jpg"
import { TourCard } from "../../components";
import {CardList} from "../../container"
const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://anhdep123.com/top-100-hinh-anh-bien-dep-cuon-hut-nhin-la-muon-di-du-lich-ngay-va-luon/tong-hop-nhung-hinh-anh-dep-ve-bien/")`,
        }}
        className="jumbotron bg-cover text-white"
      >
        <div className="container py-5 text-center">
          <h1 className="display-4 font-weight-bold">
          Du lịch là để tạo ra những kỷ niệm đẹp.
          </h1>
          <p className="font-italic mb-0">
          “Hãy ngắm nhìn thế giới. Điều đó tuyệt vời hơn bất cứ giấc mơ nào. “- Ray Bradbury
          </p>
          {/* <p className="font-italic">
            Snippe by
            <a href="https://bootstrapious.com" className="text-white">
              <u>Bootstrapious</u>
            </a>
          </p> */}
          <p></p>
          <a href="/home" role="button" className="btn btn-primary px-5" style={{backgroundColor: '#7dbce6', border: 'none', color: 'black'}}>
            Trải nghiệm ngay
          </a>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="h3 font-weight-bold">Tour Mới</h2>
        
        {/* <div className="row">
          <div className="col-lg-10 mb-4">
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
          </div>
          <div className="col-lg-8">
            <p className="font-italic text-muted">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <strong className="font-weight-bold text-dark">
                adipisicing elit, sed{" "}
              </strong>
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
              <strong className="font-weight-bold text-dark">
                reprehenderit in voluptate{" "}
              </strong>
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
