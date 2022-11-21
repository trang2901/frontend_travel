import React from "react";
import "./aboutus.css"
import {Divider} from "antd";
import { Container } from "@mui/material";
import logo from "../../image/DORIS_TOURS.png"
import imageTr from "../../image/Image_Tr.jpg"
import imageNg from "../../image/image_ng.jpg"
import { ScrollButton } from "../../components";
const Aboutus = () => {
  return (
    <>
    <Container>
     
      <div className="introduction">
    <Divider plain style={{borderColor:'#f97150'}}> <p className="introduction">GIỚI THIỆU</p></Divider> </div>

<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">Về chúng tôi</h1>
        <p className="font-italic">Tours là thương hiệu thuộc sở hữu của ..... được thành lập nhằm đáp ứng nhu cầu du lịch của khách hàng là người Việt Nam. Với nhiều năm kinh nghiệm trong ngành du lịch, Tours chủ trương mang đến quí khách hàng các chương trình tour nghỉ dưỡng cao cấp, khám phá thiên nhiên, trải nghiệm cuộc sống và du lịch sinh thái trên mọi miền Tổ quốc.</p>
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src={logo} alt="" className="img-fluid" style={{borderRadius: '50%', height: '25em', width:'25em'}}/></div>
    </div>
  </div>
</div>
{/* <h2 className="font-weight-light">Các sản phẩm du lịch trong nước của Tours</h2> */}
<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Du lịch nghỉ dưỡng cao cấp</h2>
        <p className="font-italic">Là loại hình du lịch thời thượng phù hợp với những du khách có mong muốn trải nghiệm những dịch vụ đẳng cấp, sang trọng, khác biệt tại những khách sạn, resort đạt chuẩn quốc tế từ 4* trở lên.  Loại hình du lịch nghỉ dưỡng phù hợp với đa số du khách Việt: các cặp đôi muốn có những không gian lãng mạn và sang chảnh để ghi dấu tình yêu; các bạn trẻ muốn sống ảo; các gia đình muốn kết nối yêu thương các thế hệ; các du khách có tuổi muốn nghỉ ngơi thư giãn tận hưởng cuộc sống... Quí khách sẽ được hưởng thụ những dịch vụ 5* đẳng cấp quốc tế tại những resort sang chảnh đẳng cấp nhất.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://danviet.mediacdn.vn/upload/2-2018/images/2018-04-17/7-1523961593-width650height433.jpg" alt="" className="img-fluid mb-4 mb-lg-0" style={{borderRadius: '50%', height: '20em', width:'20em'}}/></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://toanthaydinh.com/wp-content/uploads/2020/04/1554798179071_6051976.png" alt="" className="img-fluid mb-4 mb-lg-0" style={{borderRadius: '50%', height: '20em', width:'20em'}}/></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">DU LỊCH TRẢI NGHIỆM CUỘC SỐNG</h2>
        <p className="font-italic">Du lịch trải nghiệm là hình thức du lịch giúp du khách có cơ hội trải nghiệm thực tế cuộc sống trong những môi trường mới. 
Đây là hình thức kết hợp giữa du lịch và khám phá những điều mới mẻ không có trong cuộc sống thường ngày. Quí khách có cơ hội  được hòa mình vào cuộc sống thường nhật của những người dân địa phươngbản địa, được tham gia vào các hoạt động cụ thể như quá trình lao động sản xuất hay, cùng chuẩn bị những món ăn đặc sắc từng vùng miền. Điểm khác biệt của du lịch trải nghiệm là nó không đi theo lối mòn hay tiêu chuẩn cụ thể của những loại hình du lịch thông thường. Thay vì ngủ trong các khách sạn ở thành phố, quí khách có thể lựa chọn ngủ tại nhàđược mời ngủ lại nhà người dân để trực tiếp tham gia vào các hoạt động cồng đồng địa phương và từ đó sẽ có thêm những kinh nghiệm và kiến thức mớihiểu rõ hơn cuộc sống cũng như bản sắc văn hóa địa phương. Với hình thức du lịch “mới mẻ” này, Quí khách sẽ có những trải nghiệm tuyệt vời và những kỉ niệm không thể nào quên.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>
  </div>
</div>

<div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our team</h2>
        <p className="font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>

    <div className="row text-center">

      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={imageTr} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Huyền Trang</h5><span className="small text-uppercase">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
  
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={imageNg} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="">Trọng Nghỉa</h5><span className="small text-uppercase">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="">Tom Sunderland</h5><span className="small text-uppercase">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>


    </div>
  </div>
</div>
<ScrollButton />
</Container>
    </>
    
  );
};

export default Aboutus;
