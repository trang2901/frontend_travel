import React, {useState} from "react"
import {Divider, Row, Col} from "antd";
import { Container } from "@mui/material";
import logo from "../../image/DORIS_TOURS.png"
import imageTr from "../../image/Image_Tr.jpg"
import imageNg from "../../image/image_ng.jpg"
import ReactPlayer from "react-player";
import imgDL from "../../image/dulichDaLat.jpg"
import imgHG from "../../image/amthuchagiang.jpg"
import imgVHL from "../../image/vinhhalong.jpg"
import imgCNMT from "../../image/chonoimientay.png"
import imgDN from "../../image/danang.jpg"
import imgVN from "../../image/xinchaoVN.jpg"
import img1 from "../../image/banhtroininhbinh.jpg"
import './library.scss'
import { ScrollButton } from "../../components";
const Library5 = () => {
    const [playTime, setPlayTime] = useState(0);

  const handleProgress = (state) => {
    setPlayTime(formatTime(state.playedSeconds));
  };
  const formatTime = (time) => {
    const date = new Date(time * 1000);
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = ("0" + date.getUTCSeconds()).slice(-2);
    if (hour) {
      return `${hour}:${("0" + minute).slice(-2)}:${second}`;
    }
    return `${minute}:${second}`;
  };
  return (
    <>
    <Container>
    <p style={{textAlign: 'center', color:'#08183c', fontWeight:'bold', fontSize: '2rem'}}>9 ĐỊA ĐIỂM DU LỊCH ĐẸP Ở ĐÀ NẴNG</p>
    <div style={{textAlign: 'center', justifyContent: 'center'}}>
        <ReactPlayer   
            style={{ 
                marginTop: '20px',
                marginLeft: '50px',
                marginBottom: '20px'
            }}
            width={1000}
            height={500}
            url="https://www.youtube.com/watch?v=Jjew-GJGtKU&t=1s"
            onProgress={handleProgress}
            controls={false}
          />
          </div>
          <div>
        <p style={{textAlign: 'center', color:'#f97150', fontWeight:'bold', fontSize: '1.5rem'}}>BÀI VIẾT LIÊN QUAN</p>
        <div className="img--content">
        <Row gutter={[16]}>
            <Col span={8}>

            <a href="/library1"><button>
            <img src={imgDL}/>
            <p>Du lịch Đà Lạt</p></button></a>
            </Col>

            <Col span={8}>
            <a href="/library2"><button>
            <img src={imgHG}/>
            <p>Du lịch Ẩm thực Hà giang</p></button></a>
            </Col>

            <Col span={8}>
            <a href="/library3"><button>
            <img src={imgVHL}/>
            <p>Du lịch Vịnh Hạ Long</p></button></a>
            </Col>
        </Row>

        <Row>
          <Col span={12}>
          <a href="/library4">
          <button>
          <img src={imgCNMT}/>
          <p>Chợ nổi miền Tây</p></button></a>
          </Col>

          <Col span={12}>
            <a href="/library6">
              <button>
          <img src={imgVN}/>
          <p>Xin chào Việt Nam</p></button></a>
        </Col>
        </Row>
        </div>
    </div>
          </Container>
          <ScrollButton />
    </>
    
  );
};

export default Library5;