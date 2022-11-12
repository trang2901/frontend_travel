
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css'
const Footer = () => {
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
  return (
  
<footer className="text-center text-lg-start bg-light text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
        {/* <FontAwesomeIcon icon={['fab', 'fa-facebook-f']} /> */}
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
    
  </section>
 

  
  <section className="">
    <div className="container text-center text-md-start mt-5">
     
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>DORISTOUR
          </h6>
          <p>
            Doristour cùng bạn đi khắp muôn nơi. Chúng tôi sẽ giúp bạn có 1 chuyến du lịch đáng nhớ và tuyệt vời.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">
            Du lịch
          </h6>
          <p>
            <a href="#!" className="text-reset">Tour</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Tour</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Tour</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Tour</a>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Trang
          </h6>
          <p>
            <a href="#!" className="text-reset">Trang chủ</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Du lịch</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Giới thiệu</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Cẩm nang du lịch</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
          <p><i className="fas fa-home me-3"></i>Hưng Lợi, Ninh Kiều, Cần Thơ</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            doristour@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
     
    </div>
  </section>
  

 
    
  <div className="text-center p-4" style={{backgroundColor: '#08183c'}}>
    <a className="" href="/" style={{color: '#f97150' , fontWeight: 'bold', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', letterSpacing: '1px'}}>DORIS TOURS</a>
  </div>
  
</footer>
// className="text-reset fw-bold classname của thẻ a dòng 123"

  );
};

export default Footer;
