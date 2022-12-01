import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../image/checkbg.png";
import "./ordersuccessful.scss";
import { Container,Paper } from "@mui/material";
import { Button, Modal, Alert } from "antd";
import { Col, Row, Divider } from "antd";
import axios from "axios";
import { LoginContext } from "../../LoginContext";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { formatPrice } from "../../utils/helpers";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { HeaderBill } from "../../components";
import dateFormat from "dateformat";
const Ordersuccessful = () => {
  const customerID = useContext(LoginContext);
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);




  useEffect(() => {
    axios(`http://localhost:3001/thanhtoan/`).then(({ data }) => {
      const filterData = data.filter((bookedTour)=> bookedTour._id);
      setCustomerJoinedTour(filterData);

    });
  }, []);

  const handleClick = () => {
    window.location.href = "http://localhost:3000/customer/bookedTour";
  };
  
  const PDFExportComponent = useRef(null);
  const content = useRef(null);
  const handleExport = (event) => {
    PDFExportComponent.current.save();
  };
  const handleExportwithMethod = (event) => {
    savePDF(content.current, { paperSize: "A4" });
  };
  const dateCurrent = new Date();

  const getDate = (date) => {
    const temp = new Date(date);
    return `${temp.getDate()}/${temp.getMonth() + 1}/${temp.getFullYear()} - ${temp.getHours()}:${temp.getMinutes()}:${temp.getSeconds()}`;
  };
  return (
    <>
      <Container style={{ justifyContent: "center" }}>
	  {/* <Alert message="Success Text" type="success" /> */}
        <div className="order--container">
          <img src={img} width={100} height={100} />
          <p className="order">Đặt tour thành công</p>
          <label>
			Email xác nhận đơn đã được gửi đến địa chỉ email của bạn.<br />
            Chúng tôi sẽ kiểm tra và xác nhận đơn đặt hàng sớm nhất có thể!{" "}
          </label>
          <p>
            <label>
              <i className="fa-solid fa-phone"></i> Tư vấn đặt tour:
            </label>
            &ensp;
            <label style={{ color: "red", fontWeight: "bold" }}>
              0394075201
            </label>
            <label>(8:00 - 22:00)</label>
          </p>
          <p></p>
          <div className="btn--tour">
            <Link to={`/home`}>
              <button className="button--trove">Trang chủ</button>
            </Link>
            <Link to={``}>
              <button className="button--tiep" onClick={handleClick}>
                Đơn đã đặt
              </button>
            </Link>
          </div>
        </div>

		
          {/* <PDFExport ref={PDFExportComponent} paperSize="A1">
            <Container>
		                        
<div className="receipt-content">
    <div className="container bootstrap snippets bootdey">
		<div className="row">
		
			<div className="col-md-12">
			
				<div className="invoice-wrapper">
				<HeaderBill />
				<br/>
					<div className="intro">
					
						Xin chao <strong>{tour.id_khach_hang.ho_ten.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}</strong>, 
						<br/>
						Cam on ban da cho chung toi co hoi duoc phuc vu!
						<br/>
						Day la bien lai thanh toan{" "}
						<strong>{formatPrice(parseFloat(tour.thanh_tien.replaceAll('.', '')) + parseFloat(tour.thanh_tien.replaceAll('.', '')) * 0.1 - parseFloat(tour.thanh_tien.replaceAll('.', '')) * tour.giam_gia)  }</strong> 
						{" "}cua ban!
					</div>

					<div className="payment-info">
						<div className="row">
							<div className="col-sm-6">
								<span>Ma thanh toan</span>
								<strong>{tour._id}</strong>
							</div>
							<div className="col-sm-6 text-right">
								<span>Ngay thanh toan</span>
								<strong>{getDate(dateCurrent)}</strong>
							</div>
						</div>
					</div>

					<div className="payment-details">
						<div className="row">
							<div className="col-sm-6">
								<span>Khach Hang</span>
								<strong>
									{tour.id_khach_hang.ho_ten.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
								</strong>
								<p>{tour.id_khach_hang.dia_chi.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}</p>
								<p>{tour.id_khach_hang.sdt}</p>
								<p>
									<a href="#">
										{tour.id_khach_hang.email.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
									</a>
								</p>
							</div>

							<div className="col-sm-6 text-right">
								<span>Thanh toan cho</span>
								<strong>
									DẾ MÈN TOURS
								</strong>
								<p>Hung Loi, Ninh Kieu, Can Tho</p>
								<p>0123456789</p>
								<p>
									<a href="#">
										doristour@gmail.com
									</a>
								</p>
							</div>
						</div>
					</div>

					<div className="line-items">
						<div className="headers clearfix">
							<div className="row">
								<Row>
									<Col span={9} style={{textAlign:'left'}}>Tour</Col>
									<Col span={3} style={{textAlign:'center'}}>So luong</Col>
									<Col span={4} style={{textAlign:'center'}}>Diem khoi hanh</Col>
									
									<Col span={6} style={{textAlign:'center'}}>Thanh tien</Col>
								</Row>
								
							</div>
						</div>

						<div className="items">
							<div className="row item">

							<Row>
									<Col span={9} style={{textAlign:'left'}}>
										{tour.id_tour.ten.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}<br/>
										<small>Ngay khoi hanh: {dateFormat(tour.id_tour.khoi_hanh, "dd/mm/yyyy")}</small>
									</Col>
									<Col span={3} style={{textAlign:'center'}}>hmm</Col>
									<Col span={4} style={{textAlign:'center'}}>{tour.id_tour.diemkhoihanh.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}</Col>
									
									<Col span={6} style={{textAlign:'center'}}>{tour.id_tour.gia}</Col>
							</Row>
							
							</div>
							
					

						</div>
						<div className="total text-right">
						<p className="extra-notes">
								<strong>Luu y: </strong>
								Quy khach co mat tai diem khoi hanh truoc 30 phut
							</p>
							<div className="field">
								Tong truoc thue <span>{tour.thanh_tien}</span>
							</div>
							<div className="field">
								VAT <span>10%{" "}</span>
							</div>
							<div className="field">
								Giam gia <span>{tour.giam_gia}</span>
							</div>
							<div className="field grand-total">
								Tong cong<span>{formatPrice(parseFloat(tour.thanh_tien.replaceAll('.', '')) + parseFloat(tour.thanh_tien.replaceAll('.', '')) * 0.1 - parseFloat(tour.thanh_tien.replaceAll('.', '')) * (parseFloat(tour.giam_gia.replaceAll('%', '')))/100)}</span>
							</div>
						</div>

						<div className="print">
							<a href="#">
								<i className="fa fa-print"></i>
								Print this receipt
							</a>
						</div>
					</div>
				</div>

				<div className="footer">
					Copyright © 2014. company name
				</div>
			</div>
		</div>
	</div>
</div>              
            </Container>
			
          </PDFExport>
		 */}
      </Container>
    </>
  );
};

export default Ordersuccessful;
