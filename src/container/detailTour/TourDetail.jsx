import React, { useState } from "react";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";
import "antd/dist/antd.css";
// import { Tabs } from 'antd';
import { Tabs } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tab } from "@mui/material";
import "./detailTour.scss";
import { Container, Paper } from "@mui/material";
import { red } from "@mui/material/colors";
import { Divider, Input,Row,Col } from "antd";
import TextareaAutosize from '@mui/material/TextareaAutosize';
const TourDetail = ({ tourData }) => {
  const [introductionOn, setIntroduction] = useState(true);
  const { TextArea } = Input;
  
  const renderIntroduction = (diaDiem, index) => (
    <div className={`introduction--item ${index % 3 === 0 ? "even" : "odd"}`}>
      <img
        src={`https://tourapi-dev-n.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
      />
      <div className="place--infor">
     <h1>{diaDiem.id_dia_diem.ten}</h1>
     
      <p>{diaDiem.id_dia_diem.mo_ta}</p>
      </div>
    </div>
  );
  
  const renderDetail = (diaDiem, index) => (
    
    <>
    <div className="detail--item">
      {/* <img
        src={`https://tourapi-dev-n.herokuapp.com/${diaDiem.id_dia_diem.hinh}`}
      /> */}
      <p>{diaDiem.id_dia_diem.ten}</p>
    </div>

    <div className="place--infor">
      <Row>
        <Col span={12}>
          <Row>
            <Col span={5}><p style={{color: '#08183c', fontWeight: 'bold'}}><i className="fa-solid fa-hotel"></i>{" "}Khách sạn: </p></Col>
            <Col span={7} style={{textAlign: 'left', fontWeight: 'bold', color: 'green'}}><p>{diaDiem.dich_vu}</p></Col>
          </Row>
        
        </Col>
        <Col span={12}>
        <Row>
            <Col span={5}><p style={{color: '#08183c', fontWeight: 'bold'}}><i className="fa-solid fa-calendar-days"></i>{" "}Ngày ở:</p></Col>
            <Col span={7} style={{textAlign: 'left', fontWeight: 'bold', color: 'green'}}><p>{diaDiem.ngay_o}{" "}ngày</p></Col>
          </Row>
           
        </Col>
      </Row>
      
      <div>
      <i className="fa-solid fa-book"></i>{" "}<label style={{color: '#08183c', fontWeight: 'bold'}}>Tổng quan: </label><p>{diaDiem.chitiet}</p>
      
      
      <div>
        <Row>
          <Col span={2} style={{color: '#08183c', fontWeight: 'bold'}}>
           <p>Sáng: </p> 
          </Col>
          <Col span={22} style={{textAlign: 'left'}}>
          <p>{diaDiem.chitietlichtrinh[0]}</p>
          </Col>
        </Row>
      
        <Row>
          <Col span={2} style={{color: '#08183c', fontWeight: 'bold'}}>
           <p>Trưa:</p> 
          </Col>
          <Col span={22} style={{textAlign: 'left'}}>
          <p>{diaDiem.chitietlichtrinh[1]}</p>
          </Col>
        </Row>
      
        <Row>
          <Col span={2} style={{color: '#08183c', fontWeight: 'bold'}}>
           <p>Chiều:</p> 
          </Col>
          <Col span={22} style={{textAlign: 'left'}}>
          <p>{diaDiem.chitietlichtrinh[2]}</p>
          </Col>
        </Row>
        <Row>
          <Col span={2} style={{color: '#08183c', fontWeight: 'bold'}}>
           <p>Tối: </p> 
          </Col>
          <Col span={22} style={{textAlign: 'left'}}>
          <p>{diaDiem.chitietlichtrinh[3]}</p>
          </Col>
        </Row>
        <Row>
        <Col span={12}></Col>
        <Col span={12} style={{textAlign: 'right', color: '#08183c', fontWeight: 'bold', marginBottom: '6px'}}>{diaDiem.noinghichan}</Col>
      </Row>
      </div>
     </div>
    {/* <p >{diaDiem.chitiet}</p> */}
  </div></>
  );
  const onChange = (key) => {
    console.log(key);
  };
  const [value, setValue] = React.useState("1");

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
          <Container>
            {/* <Paper elevation={4}> */}
            <div className="diemnoibat">
              <p className="title_diemnoibat">ĐIỂM NỔI BẬT</p>
              <div className="des_diemnoibat">
                <label>{tourData.diemnoibat}</label>
              </div>
            </div>
            {/* </Paper> */}
            <div className="tab">
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    sx={{ tabSize: "large", fontSize: "20px" }}
                    label="GIỚI THIỆU "
                    value="1"
                  />
                  <Tab 
                    sx={{ tabSize: "large", fontSize: "20px" }}
                    label="CHI TIẾT LỊCH TRÌNH"
                    value="2"
                  />
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
                  </div>

             <div className="divider"><Divider dashed style={{boderColor: 'darkgrey',}}></Divider>  </div>               
                  <div className="giatour">
                    <Row>
                      <Col span={2}><p className="note">Lưu ý: </p></Col>
                      <Col span={22}><p className="note--detail">Giờ và thứ tự thăm quan có thể bị thay đổi tùy tình hình thực tế và sắp xếp của 
                        HDV nhưng vẫn đảm bảo đầy đủ các điểm thăm quan ghi trong chương trình.</p></Col>
                    </Row>
                    
                    <p className="giatour--include">GIÁ TOUR BAO GỒM: </p>
                   
                     <p>- Đưa đón khách 2 chiều bằng xe du lịch đời mới, có máylạnh.</p> 
                      <p>- Lái xe nhiệt tình, chu đáo, cẩn thận HDV suốt hành trình: nhiệt tình, chu đáo và hiểu biết Khách sạn theo tiêu chuẩn phục vụ du lịch, 2 khách/phòng.</p> 
                      <p>- Nếu lẻ khách ghép 3 khách/phòng.</p>
                     <p>- Vé thăm quan các điểm như trong chương trình Thuyền thăm quan vịnh Hạ Long Các bữa ăn bao gồm: 3
                      bữa chính(không bao gồm đồ uống) + 1 bữa sáng buffet tạikhách sạn Bảo hiểm du lịch với mức bồi thường tối đa lên
                      đến 20,000,000/khách</p>
                    
                  </div>

                  <div className="giatour">
                    <p className="giatour--include">GIÁ TOUR KHÔNG BAO GỒM:</p>
                    <p>
                    - Các khoản chi cá nhân: điện thoại, dịch vụ giặt là, mua sắm cá nhân...</p>
                    <p>
                    - Thuế VAT</p>
                    <p>
                    - Xe đưa đón ngoài chương trình với khách hàng đến từ các địa phương khác. </p>
              
                    <p>- Tiền thưởng cho lái xe và HDV</p>
                    
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default TourDetail;
