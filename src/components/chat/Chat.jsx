import React from 'react'

import 'font-awesome/css/font-awesome.min.css';
import { Container } from '@mui/material';

const Chat = () => {
  return (
    
    <Container>
      <div className="social-button">
    <div className="social-button-content">
       <a href="tel:0981481368" className="call-icon" rel="nofollow">
       <i className="fa fa-whatsapp" aria-hidden="true"/>
          {/* <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill  "></div> */}
           <span>Hotline:0981481368</span>
        </a>
        <a href="sms:0909090909" className="sms">
          <i className="fa fa-weixin" aria-hidden="true"></i>
          {/* <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill  "></div> */}
          <span>SMS: 0981481368</span>
        </a>
        <a href="https://www.facebook.com/messages/t/108674048489679/" className="mes">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          {/* <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill  "></div> */}
          <span>Nhắn tin Facebook</span>
        </a>
        <a href="http://zalo.me/" className="zalo">
          <i className="fa fa-commenting-o" aria-hidden="true"></i>
          {/* <div className="animated alo-circle"></div> */}
          {/* <div className="animated alo-circle-fill  "></div> */}
          <span>Zalo: 0981481368</span>
        </a>
    </div>
       
    
  </div>
    
    </Container>
  )
}
export default Chat;