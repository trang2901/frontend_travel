import React, { useState, useEffect } from "react";
import axios from "axios";
import { Context } from "./Context.js";
import { Banner } from "../../components";
import { CategoryList, CardList } from "../../container";
import CircularProgress from "@mui/material/CircularProgress";
import Cancel from "@mui/icons-material/Cancel";
import Chat from "../../components/chat/Chat"
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
    axios("https://tour-api-dev.herokuapp.com/Tour")
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
      <Context.Provider value={[tag, setTag]}>
        <Banner />
        {/* <Chat/>  */}
        <CategoryList setTag={setTag} />
        {tag ? (
          <div className="catergory--selected">
            <div onClick={() => setTag("")}>
              <Cancel />
              <p>{tag}</p>
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
          <CardList DataTours={DataTours} tag={tag} />
        )}
      </Context.Provider>
    </>
  );
};

export default Home;
