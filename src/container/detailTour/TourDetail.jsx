import React, { useState } from "react";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";
import 'antd/dist/antd.css';
// import { Tabs } from 'antd';
import { Tabs} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Tab} from '@mui/material';
import "./detailTour.scss";
import { Container, Paper } from "@mui/material";
import { red } from "@mui/material/colors";
const TourDetail = ({ tourData }) => {
  const [introductionOn, setIntroduction] = useState(true);

  const renderIntroduction = (diaDiem, index) => (
    <div className={`introduction--item ${index % 2 === 0 ? "even" : "odd"}`}>
      <img
        src={`https://tour-api-dev.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
        
      />
      <div className="place--infor">
        <h1>{diaDiem.id_dia_diem.ten}</h1>
        <p>{diaDiem.id_dia_diem.mo_ta}</p>
      </div>
    </div>
  );
  const renderDetail = (diaDiem, index) => (
    <div className={`detail--item ${index % 2 === 0 ? "even" : "odd"}`}>
      <img
        src={`https://tour-api-dev.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
      />
      <div className="place--infor">
        <h1>{diaDiem.id_dia_diem.ten}</h1>
        <p>{diaDiem.dich_vu}</p>
        <p>{diaDiem.ngay_o} ngày</p>
      </div>
    </div>
  );
  const onChange = (key) => {
    console.log(key);
  }; 
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
    <>
      <div className="tour--information__detail">
        {/* <div className="button--section">
          {introductionOn ? (
            <>
              <ButtonCustom
                nameString="Giới thiệu chung"
                variant="contained"
                customFunction={() => setIntroduction(true)}
              />
              <ButtonCustom
                nameString="Lịch trình cụ thể"
                variant="outlined"
                customFunction={() => setIntroduction(false)}
              />
            </>
          ) : (
            <>
              <ButtonCustom
                nameString="Giới thiệu chung"
                variant="outlined"
                customFunction={() => setIntroduction(true)}
              />
              <ButtonCustom
                nameString="Lịch trình cụ thể"
                variant="contained"
                customFunction={() => setIntroduction(false)}
              />
            </>
          )}
        </div> */}
        {/* <div className="content">
          {introductionOn ? (
            <div className="introduction--container">
              {tourData.lich_trinh?.map((diaDiem, index) =>
                renderIntroduction(diaDiem, index)
              )}
            </div>
          ) : (
            <div className="detail--container">
              {tourData.lich_trinh?.map((diaDiem, index) =>
                renderDetail(diaDiem, index)
              )}
            </div>
          )}
        </div> */}
        <Paper elevation={4}>
        <Container >
        <div className="diemnoibat">
        <p className="title_diemnoibat">ĐIỂM NỔI BẬT</p>
        <div className="des_diemnoibat">
            <p>  &bull; {tourData.ten}</p>
            <p>  &bull; {tourData.ten}</p>
            <p>  &bull; {tourData.ten}</p>
        </div>
        </div>

        <div className="tab">
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{ tabSize: "large", fontSize: "20px"}} label="GIỚI THIỆU " value="1" />
            <Tab sx={{ tabSize: "large", fontSize: "20px"}} label="CHI TIẾT LỊCH TRÌNH" value="2" />
          </TabList>
        

        
        <TabPanel value="1">
        <div className="introduction--container">
                    {tourData.lich_trinh?.map((diaDiem, index) =>
                      renderIntroduction(diaDiem, index)
                    )}
       </div>
        </TabPanel>
        
        <TabPanel className="tabPanel" value="2">
          <div className="detail--container">
              {tourData.lich_trinh?.map((diaDiem, index) =>
                renderDetail(diaDiem, index)
              )}
            </div></TabPanel>
        
      </TabContext>
      </div>
        
</Container>
</Paper>
      </div>
    </>
  );
};

export default TourDetail;
