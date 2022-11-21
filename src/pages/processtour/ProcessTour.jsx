import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Button, Container } from "@mui/material";
import axios from "axios";
import { Tabs } from "antd";
// import { Container } from "@mui/system";
import { ArrowBack } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
// import "./detail.scss";
import { Process } from "../../container";
import './processtour.scss'
import { ScrollButton } from "../../components";
const ProcessTour = () => {
  const [proccessOn, setProccessOn] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [processData, setProcessData] = useState([]);
  const [fileData, setFileData] = useState([]);

 const slugTour = JSON.stringify(localStorage.getItem('slugprocess'));
 const slug = slugTour.replaceAll('"', '').trimStart();
console.log('data', processData);
console.log('params:',slug);
  useEffect(() => {
    axios(
      `https://tourapi-dev-n.herokuapp.com/tour/${slug}`
    ).then(({ data }) => {
      setProcessData(data.lich_trinh);
      setFileData(data.ten);
    });
  }, []);

  const navigate = useNavigate();

  return (
    // <Container>
    <>
    <div className="detail">
      <Button
        variant="outlined"
        onClick={() => navigate("/customer/bookedTour")}
        style={{ position: "absolute", left: 0, color: '#08183c', borderColor: '#08183c', marginLeft: '1rem', marginTop: '1.5rem' }}
      >
        {<ArrowBack />}
        Trở về
  </Button>  
      <div className="content">
        <p className="title">{fileData}</p>
        
          <Process processData={processData} setProcessData={setProcessData} />
          {/* {processData.lich_trinh */}
        
      </div>
   
    </div>
    <ScrollButton />
    </>
   
  );
};

export default ProcessTour;
