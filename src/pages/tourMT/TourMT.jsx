import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TourHead, TourDetail, RegionList } from "../../container";
import { Context } from "../home/Context";
import CardList from "../../container/cardList/CardList";
import { Banner, ScrollButton } from "../../components";
import CircularProgress from "@mui/material/CircularProgress";
import Cancel from "@mui/icons-material/Cancel";
import axios from "axios";
import { Divider } from "antd";
import Search from "../../components/search/Search";
import { Card} from 'semantic-ui-react'
import { Input } from 'antd';
import Pagination from '../../components/pagination/Pagination'
import "./tourmt.scss";

const TourMN = () => {
  const [tag, setTag] = useState("");
  const [DataTours, setDataTours] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [tourMB, setTourMB] = useState([]);
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [loading, setLoading] = useState(false);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DataTours.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {

    const body = document.querySelector('#root');
 
    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

    setFetching(true);
    fetchToursData();
    tag ? (document.title = tag) : (document.title = ".travelwoVi");
  }, [tag]);

  const fetchToursData = () => {
    axios("http://localhost:3001/tour")
      .then(({ data }) => {
        
          const ATourMB = data.filter((tour) => tour.loai_tour.ten_loai_tour === 'Tour Miền Trung');
          setDataTours(ATourMB);
          setFetching(false);
          setAPIData(ATourMB);   
      })
      .catch((err) => {
        console.error("Fetching error: " + err);
      });
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(APIData)
    }
}
  return (
    <>
      <div className="tourList">
        <Divider plain style={{ borderColor: "#f97150" }}>
          <p className="introduction">DU LỊCH MIỀN TRUNG</p>
        </Divider>
        <p style={{ color: "#08183c", fontSize: "18px", marginLeft: "2rem", marginTop: '-1.5rem', 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: '50px'
         }}>
          Miền Trung Việt Nam gồm Bắc Trung Bộ, Nam Trung Bộ và Tây Nguyên, tổng
          19 tỉnh thành. Miền Trung là giao điểm của sông núi hữu tình, thiên
          nhiên hùng vĩ, văn hóa đặc sắc, pha trộn ảnh hưởng của Hindu và Trung
          Hoa. Một điểm đến lý tưởng!
        </p>
        <p style={{ color: "#08183c", fontSize: "18px", marginLeft: "2rem", marginBottom: '0.5rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: '50px' }}>
          Chúng tôi tìm thấy{" "}
          <strong style={{ color: "red" }}>{DataTours.length}</strong> tours cho
          quý khách
        </p>
      </div>
    
      <div className="search--module">
            <div className="input--module">

            <i className="fa-solid fa-magnifying-glass"></i> {" "}{" "}
            <Input width={2000} placeholder="Tìm kiếm...."onChange={(e) => searchItems(e.target.value)}/>
            </div>

            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    <>
                    <div className="result">
                    <p>Có <strong style={{color: 'red'}}>{filteredResults.length}</strong> kết quả trùng khớp với từ khóa của bạn</p></div>
                    <CardList DataTours={filteredResults} loading={loading}/>
                    {/* <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={DataTours.length}
                    paginate={paginate}
                    /> */}
                    </>
                    ) : (
                    <>
                    <CardList DataTours={currentPosts} tag={tag} loading={loading}/>
                    <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={DataTours.length}
                    paginate={paginate}
                    />
                    </>
                    
                   
                )}
            </Card.Group>
        </div>
        
      <ScrollButton />
    </>
  );
};

export default TourMN;
