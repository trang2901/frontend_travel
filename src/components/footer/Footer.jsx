
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css'
const Footer = () => {
  const [open, setOpen] = useState("false");
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
  return (
<footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span>Kết nối với chúng tôi trên các mạng xã hội:</span>
    </div>

    <div>
      <a href="https://www.facebook.com/trang2988/" className="me-4 text-reset">
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
            <a href="#!" className="text-reset">Du lịch miền Bắc</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Du lịch miền Trung</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Du lịch miền Tây Nam Bộ</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Du lịch miền Đông Nam Bộ</a>
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

  <div className="f-socials-box">
    <div className="f-social-small">
      {open === 'false'?<i class="fa-solid fa-chevron-down" onClick={()=>setOpen("true")}></i>:(<></>)}
    </div>

    <ul className="f-socials f-socials-full" style={{display: open === 'true'?'block':'none'}}>
      <li className="f-social-small">
      {open === 'true' ?<i class="fa-solid fa-chevron-up" onClick={()=>setOpen("false")}></i>:''}
      </li>

      <li className="social">
        <a href="https://www.facebook.com/vietravel/" target="_blank" rel="nofollow noreferrer" >
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li className="social">
        <a href="https://www.facebook.com/vietravel/" target="_blank" rel="nofollow noreferrer" >
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li className="social">
        <a href="https://www.facebook.com/vietravel/" target="_blank" rel="nofollow noreferrer" >
          <i className="fab fa-google" />
        </a>
      </li>
      <li className="social">
        <a href="https://www.facebook.com/vietravel/" target="_blank" rel="nofollow noreferrer" >
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li className="social">
        <a href="https://www.facebook.com/vietravel/" target="_blank" rel="nofollow noreferrer" >
          <i className="fab fa-linkedin" />
        </a>
      </li>
      <li className="social">
        <a href="https://www.facebook.com/vietravel/" target="_blank" rel="nofollow noreferrer" >
          <i className="fab fa-github" />
        </a>
      </li>
    </ul>

  </div>
  {/* <div className="chat-mess">
    <svg width="36" height="36" viewBox="0 0 36 36">
      <path fill="white" d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897Z"></path>
    </svg>
  </div> */}
</footer>

// className="text-reset fw-bold classname của thẻ a dòng 123"

  );
};

export default Footer;
