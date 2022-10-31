import React,{useState, useEffect}  from "react";

import anhbia from "../../image/anh-bia.jpg"
import { TourCard } from "../../components";
import axios from "axios";
import { CategoryList, CardList } from "../../container";
import './banner1.scss'
import { Divider } from "antd";
const Banner = () => {
  const [tag, setTag] = useState("");
  const [DataTours, setDataTours] = useState([]);
  const [fetching, setFetching] = useState(true);
  

  useEffect(() => {
    setFetching(true);
    fetchToursData();
    tag ? (document.title = tag) : (document.title = ".travelwoVi");
  }, [tag]);
  const fetchToursData = () => {
    axios("https://tourapi-dev-n.herokuapp.com/tour")
      .then(({ data }) => {
        if (tag) {
          const filteredTours = data.filter((tour) => tour.tags.includes(tag));
          setDataTours(filteredTours);
          setFetching(false);
        } else {
          setDataTours(data);
          setFetching(false);
        }
      })
      .catch((err) => {
        console.error("Fetching error: " + err);
      });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://dep.anh9.com/imgs/13116cover-facebook-song-bien-vo-nhe-vao-bo.jpg")`,
        }}
        className="jumbotron bg-cover text-white"
      >
        <div className="container py-5 text-center">
          <p className=" display-4 font-weight-bold" style={{color: '#08183c', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', fontSize: '43px'}}>
          DU LỊCH LÀ ĐỂ TẠO RA NHỮNG KỶ NIỆM ĐẸP
          </p>
          <p className="font-italic mb-0" style ={{color: 'white', fontWeight: 'bold'}} >
          “Hãy ngắm nhìn thế giới. Điều đó tuyệt vời hơn bất cứ giấc mơ nào. “- Ray Bradbury
          </p>
          {/* <p className="font-italic">
            Snippe by
            <a href="https://bootstrapious.com" className="text-white">
              <u>Bootstrapious</u>
            </a>
          </p> */}
          <p></p>
          <a href="/home" role="button" className="btn btn-primary px-5" style={{backgroundColor: '#08183c', border: 'none', color: '#f97150', height: '40px', borderRadius: '20px'}}>
            Trải nghiệm ngay
          </a>
        </div>
      </div>

      <div className="container py-5">
      <div className="tourmoi">
          <Divider dashed orientation="left" plain style={{borderColor:'#f97150'}}> <p className="tourmoi">TOUR MỚI</p></Divider> </div>

      
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
      <CardList DataTours={DataTours} tag={tag} />
    </>
  );
};

export default Banner;
