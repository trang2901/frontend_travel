import React, { useState, useEffect } from "react";
import axios from "axios";
import { Context } from "./Context.js";
import { Banner } from "../../components";
import { CategoryList, CardList } from "../../container";
import CircularProgress from "@mui/material/CircularProgress";
import Cancel from "@mui/icons-material/Cancel";
import Chat from "../../components/chat/Chat";
import { Divider, Row, Col } from "antd";
import './home.scss'
import { Button } from "@mui/material";
import Search from '../../components/search/Search'
const Home = () => {
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
    {/* <Search /> */}
      <Context.Provider value={[tag, setTag]}>
        <Banner />
       
        <CategoryList setTag={setTag} />
        <p></p><p></p>
        
        {tag ? (
          <div className="catergory--selected">
            <div onClick={() => setTag("")} className="selected--item">
             
              <p> <Cancel style={{fontSize: 'large',}}/>Lọc theo <strong style={{color: '#f97150'}}>{tag}</strong></p>
              
            </div>
          </div>
        ) : (
          <></>
        )}

        {fetching ? (
          <div
            className="loading"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <CircularProgress disableShrink />
          </div>
        ) : (
          <>
          <div className="tourList">
         
          
          <Divider plain style={{borderColor:'#f97150'}}><p className="introduction">DANH SÁCH TOUR</p></Divider>
          </div>
          <p></p>
          <Search />
          <CardList DataTours={DataTours} tag={tag} />
        
          </>
        )}
      </Context.Provider>
    </>
  );
};

export default Home;
