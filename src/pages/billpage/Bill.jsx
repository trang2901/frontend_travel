import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../image/logocheck.png";

import { Container, Paper } from "@mui/material";
import { Button, Modal } from "antd";
import { Col, Row, Divider } from "antd";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { formatPrice } from "../../utils/helpers";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { HeaderBill } from "../../components";
import dateFormat from "dateformat";
import "./bill.scss";
const Bill = () => {

  const customerID = useContext(LoginContext);
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);

  
  const idTour = localStorage.getItem('id');
  console.log('log id: ', idTour);
  useEffect(async () => {
    await axios(`https://tourapi-dev-n.herokuapp.com/thanhtoan/`+idTour).then(({ data }) => {
// console.log('filter: ', `https://tourapi-dev-n.herokuapp.com/thanhtoan/${idTour}`);
console.log('data id: ', data);
	
      setCustomerJoinedTour(data);
	
	  
    });
  }, []);
  const handleClick = () => {
    window.location.href = "http://localhost:3000/customer/bookedTour";
  };
  const exportPdf = () => {
    const input = document.getElementById("capture");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a1", false);
      pdf.addImage(imgData, "JPEG", 0, 0, "a4");
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  const PDFExportComponent = useRef(null);
  const content = useRef(null);
  const handleExport = (event) => {
    PDFExportComponent.current.save();
  };
  const handleExportwithMethod = (event) => {
    savePDF(content.current, { paperSize: "A4" });
  };
  const getDate = (date) => {
    const temp = new Date(date);
    return `${temp.getDate()}/${
      temp.getMonth() + 1
    }/${temp.getFullYear()} - ${temp.getHours()}:${temp.getMinutes()}:${temp.getSeconds()}`;
  };
console.log('customerJoinedTour id: ', Object.keys(customerJoinedTour).length);
  const renderTour = (tour) => (
    <>
      <Container style={{ justifyContent: "center" }}>
        <PDFExport ref={PDFExportComponent} paperSize="A2">
          <Container>
            <div class="receipt-content">
              <div class="container bootstrap snippets bootdey">
                <div class="row">
                  <div class="col-md-12">
                    <div class="invoice-wrapper">
                      {/* <HeaderBill /> */}
                      <br />
                      <div class="intro">
                        Xin chao{" "}
                        <strong>
                          {tour.id_khach_hang.ho_ten
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")}
                        </strong>
                        ,
                        <br />
                        Cam on ban da cho chung toi co hoi duoc phuc vu!
                        <br />
                        Day la bien lai thanh toan{" "}
                        <strong>
                          {formatPrice(
                            parseFloat(tour.thanh_tien.replaceAll(".", "")) +
                              parseFloat(tour.thanh_tien.replaceAll(".", "")) *
                                0.1 -
                              (parseFloat(tour.thanh_tien.replaceAll(".", "")) *
                                parseFloat(tour.giam_gia.replaceAll("%", ""))) /
                                100
                          )}
                        </strong>{" "}
                        cua ban!
                      </div>

                      <div class="payment-info">
                        <div class="row">
                          <div class="col-sm-6">
                            <span>Ma thanh toan</span>
                            <strong>{tour._id}</strong>
                          </div>
                          <div class="col-sm-6 text-right">
                            <span>Ngay thanh toan</span>
                            <strong>{tour.createdAt}</strong>
                          </div>
                        </div>
                      </div>

                      <div class="payment-details">
                        <div class="row">
                          <div class="col-sm-6">
                            <span>Khach Hang</span>
                            <strong>
                              {tour.id_khach_hang.ho_ten
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")}
                            </strong>
                            <p>
                              {tour.id_khach_hang.dia_chi
                                .normalize("NFD")
                                .replace(/[\u0300-\u036f]/g, "")}
                            </p>
                            <p>{tour.id_khach_hang.sdt}</p>
                            <p>
                              <a href="#">
                                {tour.id_khach_hang.email
                                  .normalize("NFD")
                                  .replace(/[\u0300-\u036f]/g, "")}
                              </a>
                            </p>
                          </div>

                          <div class="col-sm-6 text-right">
                            <span>Thanh toan cho</span>
                            <strong>DORISTOUR</strong>
                            <p>Hung Loi, Ninh Kieu, Can Tho</p>
                            <p>0123456789</p>
                            <p>
                              <a href="#">doristour@gmail.com</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="line-items">
                        <div class="headers clearfix">
                          <div class="row">
                            <Row>
                              <Col span={9} style={{ textAlign: "left" }}>
                                Tour
                              </Col>
                              <Col span={3} style={{ textAlign: "center" }}>
                                So luong
                              </Col>
                              <Col span={4} style={{ textAlign: "center" }}>
                                Diem khoi hanh
                              </Col>

                              <Col span={6} style={{ textAlign: "center" }}>
                                Thanh tien
                              </Col>
                            </Row>
                            {/* <div class="col-xs-4 text-left">Tour</div>
								<div class="col-xs-2 text-center">So Luong</div>
								<div class="col-xs-5 text-right">Tong</div> */}
                          </div>
                        </div>

                        <div class="items">
                          <div class="row item">
                            <Row>
                              <Col span={9} style={{ textAlign: "left" }}>
                                {tour.id_tour.ten
                                  .normalize("NFD")
                                  .replace(/[\u0300-\u036f]/g, "")}
                                <br />
                                <small>
                                  Ngay khoi hanh:{" "}
                                  {dateFormat(
                                    tour.id_tour.khoi_hanh,
                                    "dd/mm/yyyy"
                                  )}
                                </small>
                              </Col>
                              <Col span={3} style={{ textAlign: "center" }}>
                                hmm
                              </Col>
                              <Col span={4} style={{ textAlign: "center" }}>
                                {tour.id_tour.diemkhoihanh
                                  .normalize("NFD")
                                  .replace(/[\u0300-\u036f]/g, "")}
                              </Col>

                              <Col span={6} style={{ textAlign: "center" }}>
                                {tour.id_tour.gia}
                              </Col>
                            </Row>
                            {/* <div class="col-xs-4 desc">
									Html theme
								</div>
								<div class="col-xs-3 qty text-center">
									3
								</div>
								<div class="col-xs-5 amount text-right">
									$60.00
								</div> */}
                          </div>
                        </div>
                        <div class="total text-right">
                          <p class="extra-notes">
                            <strong>Luu y: </strong>
                            Quy khach co mat tai diem khoi hanh truoc 30 phut
                          </p>
                          <div class="field">
                            Tong truoc thue <span>{tour.thanh_tien}</span>
                          </div>
                          <div class="field">
                            VAT <span>10% </span>
                          </div>
                          <div class="field">
                            Giam gia <span>{tour.giam_gia}</span>
                          </div>
                          <div class="field grand-total">
                            Tong cong
                            <span>
                              {formatPrice(
                                parseFloat(
                                  tour.thanh_tien.replaceAll(".", "")
                                ) +
                                  parseFloat(
                                    tour.thanh_tien.replaceAll(".", "")
                                  ) *
                                    0.1 -
                                  (parseFloat(
                                    tour.thanh_tien.replaceAll(".", "")
                                  ) *
                                    parseFloat(
                                      tour.giam_gia.replaceAll("%", "")
                                    )) /
                                    100
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </PDFExport>
        <div class="print">
          <a href="#" onClick={handleExport}>
            <i class="fa fa-print"></i>
            Print this receipt
          </a>
        </div>
      </Container>
    </>
  );
  return (
	<div>
	{
      Object.keys(customerJoinedTour).length > 0 ?  renderTour(customerJoinedTour) : <Container></Container>
	}
	 </div>
      
    
  );
};

export default Bill;
