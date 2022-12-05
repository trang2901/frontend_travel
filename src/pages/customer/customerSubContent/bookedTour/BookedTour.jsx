import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../../LoginContext";
import Grid from "@mui/material";
import { Col, Row, Divider, Button, Tabs, Modal } from "antd";
import "./bookedTour.scss";
import Chip from "@mui/material/Chip";
import dateFormat from "dateformat";
import { ScrollButton } from "../../../../components";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tab } from "@mui/material";
const BookedTour = () => {
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);
  const customerID = useContext(LoginContext);
  const [state, setState] = useState(0);
  const [customerJoinedTourDate, setCustomerJoinedTourDate] = useState([]);
  const [customerJoinedTourMonth, setCustomerJoinedTourMonth] = useState([]);
  const [customerJoinedTourYear, setCustomerJoinedTourYear] = useState([]);
  const arrayDate = [];
  const arrayMonth = [];
  const arrayYear = [];
  const arrayWait = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToDelete, setidToDelete] = useState(0);
  const [custormerBillWait, setCustomerBillWait] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/thanhtoan`).then(({ data }) => {
      const filterData = data.filter(
        (bookedTour) => bookedTour.id_khach_hang["_id"] === customerID
      );
      const date = new Date();
      for (let i = 0; i < filterData.length; i++) {
        const newDate = new Date(dateFormat(filterData[i].createdAt));
        if (newDate.getDate() == date.getDate()) {
          // console.log('tour đặt trong tháng: ', customerJoinedTour[i]);
          arrayDate.push(filterData[i]);
        }
        if (newDate.getMonth() == date.getMonth()) {
          arrayMonth.push(filterData[i]);
        }
        if (newDate.getFullYear() == date.getFullYear()) {
          arrayYear.push(filterData[i]);
        }
        if (filterData[i].trang_thai_duyet === "Chưa duyệt") {
          arrayWait.push(filterData[i]);
        }
      }
      setCustomerJoinedTourYear(arrayYear);
      setCustomerJoinedTourMonth(arrayMonth);
      setCustomerJoinedTourDate(arrayDate);
      setCustomerJoinedTour(filterData);
      setCustomerBillWait(arrayWait);
    });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteBill = (billid) => {
    axios
      .get(`http://localhost:3001/thanhtoan/${billid}`)
      .then(({ data }) => {
        const arrayDukhach = data.du_khach;
        const slugTourBooked = data.id_tour.slug;

        axios
          .get(`http://localhost:3001/tour/${slugTourBooked}`)
          .then(({ data }) => {
            const dkjointour = data.du_khach;

            console.log("du khách join tour: ", dkjointour);

            // for (let i = 0; i < arrayDukhach.length; i++) {
            //   for (let it = 0; it < dkjointour.length; it++) {
            //     if (dkjointour[it]._id === arrayDukhach[i]) {
            //       dkjointour.splice(it, 1);
            //     }
            //   }
            // }

            // console.log("du khách join tour 2: ", dkjointour);
            // axios
            // .patch(`http://localhost:3001/tour/${slugTourBooked}`, {
            //   du_khach: [
            //       ...[...dkjointour].map((item) => item["_id"])
            //   ],
            // }
            // )
            // console.log('data dk join:', dkjointour);
            // console.log('>>>>>>>>>>>>>thành công!!!!!!!')

            for (let it = 0; it < dkjointour.length; it++) {
              axios.get(`http://localhost:3001/dukhach`).then(({ data }) => {
                for (let i = 0; i < arrayDukhach.length; i++) {
                  data.map((item) => {
                    if (
                      item._id === arrayDukhach[i]
                      ) 
                      
                    {
                      axios
                        .delete(`http://localhost:3001/dukhach/${item._id}`)
                        .then((res) => {
                          axios
                            .delete(`http://localhost:3001/thanhtoan/${billid}`)
                            .then((res) => {
                              window.location.reload();
                            })
                        })
                    }
                  });
                }
              });
            }
          });
      })
  };

  const getDate = (date) => {
    const temp = new Date(date);
    return `${temp.getDate()}/${temp.getMonth() + 1}/${temp.getFullYear()}`;
  };
  const getDataItem = () => {
    const date = new Date();
    const array = [];
    for (let i = 0; i < customerJoinedTour.length; i++) {
      const newDate = new Date(dateFormat(customerJoinedTour[i].createdAt));
      console.log("monrh nè: ", newDate.getDate());

      if (newDate.getDate() == date.getDate()) {
        // console.log('tour đặt trong tháng: ', customerJoinedTour[i]);
        array.push(customerJoinedTour[i]);
      } else {
        console.log("tour khác");
      }
    }
    console.log("mảng vừa push", array);
    setCustomerJoinedTourDate(array);
  };
  const getData = (data) => {
    console.log(data);
  };
  const bookTourInfor = JSON.parse(
    window.localStorage.getItem("bookTourInfor")
  );
  const renderTour = (tour) => (
    <div
      className="tour--item"
      style={{ display: "flex", gap: "2rem", marginBottom: "-1rem" }}
    >
      <div style={{ width: "150%", marginTop: "1rem" }}>
        <Row style={{ textAlign: "left" }}>
          <Col span={5}>
            <p>TÊN TOUR:</p>
          </Col>
          <Col span={11}>
            <strong>{tour.id_tour.ten}</strong>
          </Col>
          <Col
            span={8}
            style={{
              textAlign: "center",
              justifyContent: "center",
              color: tour.trang_thai_duyet === "Chưa duyệt" ? "red" : "green",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {tour.trang_thai_duyet}
          </Col>
        </Row>
        <Row style={{ textAlign: "left" }}>
          <Col span={5}>
            <p>NGÀY KHỞI HÀNH: </p>
          </Col>
          <Col span={11}>
            {dateFormat(tour.id_tour.khoi_hanh, "dd/mm/yyyy")}
          </Col>
        </Row>
        <Row style={{ textAlign: "left" }}>
          <Col span={5}>
            <p>SỐ LƯỢNG CHỔ: </p>
          </Col>
          <Col span={11}>{tour.soluongcho}</Col>
        </Row>
        <Row style={{ textAlign: "left" }}>
          <Col span={5}>
            <p>NGÀY ĐẶT TOUR: </p>
          </Col>
          <Col span={11}>{getDate(tour.createdAt)}</Col>
        </Row>
        <Row style={{ textAlign: "left" }}>
          <Col span={5}>
            <p>THÀNH TIỀN: </p>
          </Col>
          <Col span={11}>{tour.thanh_tien}</Col>
        </Row>
        <Row style={{ textAlign: "left" }}>
          <Col span={5}>
            <p>TRẠNG THÁI THANH TOÁN: </p>
          </Col>
          <Col span={11}><strong style={{color: tour.trang_thai_thanh_toan === "Chưa thanh toán"?'red':'green'}}>{tour.trang_thai_thanh_toan}</strong></Col>
        </Row>
        <Row style={{ textAlign: "left" }}>
          <Col span={4}>
            <a
              href={
                tour.trang_thai_duyet === "Chưa duyệt"
                  ? ""
                  : "http://localhost:3000/bill"
              }
              onClick={() => localStorage.setItem("id", tour._id)}
            >
              {
                tour.trang_thai_thanh_toan === "Chưa thanh toán"?null:

                tour.trang_thai_duyet === "Chưa duyệt"? "" : "Xuất hóa đơn"}
            </a>
          </Col>
          <Col span={12}>
            <a
              href={tour.trang_thai_duyet === "Chưa duyệt" ? "" : "/process"}
              onClick={() =>
                localStorage.setItem("slugprocess", tour.id_tour.slug)
              }
            >
              {tour.trang_thai_duyet === "Chưa duyệt"
                ? ""
                : "Xem tiến trình tour"}
            </a>
          </Col>
          <Col
            span={8}
            style={{
              textAlign: "center",
              justifyContent: "center",
              color: "red",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {
            
            tour.trang_thai_duyet === "ĐÃ DUYỆT"? (
              ""
            ) : (
              <button
                style={{
                  fontWeight: "bold",
                  background: "red",
                  color: "white",
                  width: "100px",
                  height: "35px",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  setidToDelete(tour._id);
                  showModal();
                }}
              >
                HỦY ĐƠN
              </button>
            )}
          </Col>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={() => deleteBill(idToDelete)}
            onCancel={handleCancel}
          >
            <p>Bạn có chắc chắn muốn hủy đơn không?</p>
          </Modal>
        </Row>

        <Divider dashed style={{ borderColor: "#08183c" }} />
      </div>
    </div>
  );
  return (
    <>
      <div className="tour_dadat">
        <Divider plain style={{ borderColor: "#f97150" }}>
          <p>TOUR ĐÃ ĐẶT</p>
        </Divider>{" "}
      </div>
      <div className="customer--tour__Container">
        {/* <Tabs defaultActiveKey="1" >
          
          <Tabs.TabPane tab="Tất cả các đơn đã đặt" key="1">
            {customerJoinedTour
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Đơn đặt trong ngày" key="2">
            {customerJoinedTourDate
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>

          <Tabs.TabPane tab="Đơn đặt trong tháng" key="3">
            {customerJoinedTourMonth
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đơn đặt trong năm" key="4">
            {customerJoinedTourYear
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </Tabs.TabPane>
        </Tabs> */}
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            style={{ background: "white", marginTop: "-2.5rem" }}
          >
            <Tab
              sx={{ tabSize: "large", fontSize: "17px", color: "#08183c" }}
              label="TẤT CẢ"
              value="1"
            />
            <Tab
              sx={{ tabSize: "large", fontSize: "17px", color: "#08183c" }}
              label="CHỜ DUYỆT"
              value="2"
            />
            <Tab
              sx={{ tabSize: "large", fontSize: "17px", color: "#08183c" }}
              label="ĐƠN ĐẶT TRONG NGÀY"
              value="3"
            />
            <Tab
              sx={{ tabSize: "large", fontSize: "17px", color: "#08183c" }}
              label="ĐƠN ĐẶT TRONG THÁNG"
              value="4"
            />
            <Tab
              sx={{ tabSize: "large", fontSize: "17px", color: "#08183c" }}
              label="ĐƠN ĐẶT TRONG NĂM"
              value="5"
            />
          </TabList>
          <p></p>
          <TabPanel value="1" style={{ background: "white" }}>
            {customerJoinedTour
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </TabPanel>

          <TabPanel value="2" style={{ background: "white" }}>
            {custormerBillWait
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </TabPanel>

          <TabPanel value="3" style={{ background: "white" }}>
            {customerJoinedTourDate
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </TabPanel>

          <TabPanel value="4" style={{ background: "white" }}>
            {customerJoinedTourMonth
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </TabPanel>

          <TabPanel value="5" style={{ background: "white" }}>
            {customerJoinedTourYear
              ?.slice(0)
              .reverse()
              .map((tour) => renderTour(tour))}
          </TabPanel>
        </TabContext>
      </div>
      <ScrollButton />
    </>
  );
};

export default BookedTour;
