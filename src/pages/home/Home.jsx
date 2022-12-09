import React, { useState, useEffect } from "react";
import axios from "axios";
import { Context } from "./Context.js";
import { Banner, ScrollButton } from "../../components";
import { CategoryList, CardList } from "../../container";
import CircularProgress from "@mui/material/CircularProgress";
import Cancel from "@mui/icons-material/Cancel";
import Chat from "../../components/chat/Chat";
import { Divider, Row, Col } from "antd";
import { Card } from "semantic-ui-react";
import { Input } from "antd";
import "./home.scss";
import { Button } from "@mui/material";
import Search from "../../components/search/Search";
import Pagination from '../../components/pagination/Pagination'
const Home = () => {
  const [tag, setTag] = useState("");
  const [DataTours, setDataTours] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [loading, setLoading] = useState(false);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DataTours.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios.get(`http://localhost:3001/tour`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  useEffect(() => {
    setFetching(true);
    fetchToursData();
    tag ? (document.title = tag) : (document.title = "DẾ MÈN TOURS");
  }, [tag]);

  const fetchToursData = () => {
    axios("http://localhost:3001/tour")
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
        {/* <Banner /> */}

        <CategoryList setTag={setTag} />
        <p></p>
        <p></p>
        <div className="tourList">
              <Divider plain style={{ borderColor: "#f97150" }}>
                <p className="introduction">DANH SÁCH TOUR</p>
              </Divider>
        </div>

        {tag ? (
          <>
          <div className="catergory--selected">
            <div onClick={() => setTag("")} className="selected--item">
              <p
                style={{
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                {" "}
                <Cancel style={{ fontSize: "large" }} />
                Lọc theo{" "}
                <strong
                  style={{
                    color: "#f97150",
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  }}
                >
                  {tag}
                </strong>
              </p>
            </div>
          </div>
          
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
            
              <CardList DataTours={DataTours} tag={tag} />
              
            </>        
          )}
</>

        ) : (
          <>
            <div className="search--module">
              <div className="input--module">
                <i className="fa-solid fa-magnifying-glass"></i>{" "}
                <Input
                  width={2000}
                  placeholder="Tìm kiếm...."
                  onChange={(e) => searchItems(e.target.value)}
                />
              </div>

              <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                  <>
                    <div className="result">
                      <p>
                        Có{" "}
                        <strong style={{ color: "red" }}>
                          {filteredResults.length}
                        </strong>{" "}
                        kết quả trùng khớp với từ khóa của bạn
                      </p>
                    </div>
                    <CardList
                      DataTours={filteredResults}
                      tag={filteredResults.tags}
                    />
                    <Divider
                      style={{ borderColor: "#08183c" }}
                    ></Divider>
                  </>
                ) : (
                  <>
                  <CardList DataTours={currentPosts} tag={tag} />
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={DataTours.length}
                    paginate={paginate}
                    />
                  </>
                )}


              </Card.Group>
            </div>
          </>
        )}

        {/* {fetching ? (
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
          
            <CardList DataTours={DataTours} tag={tag} />
           
          </>        
        )} */}
      </Context.Provider>
      <ScrollButton />
    </>
  );
};

export default Home;
