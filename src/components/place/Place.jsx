import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Container,
  Paper
} from "@mui/material";

import "./place.scss";
import axios from "axios";
import moment from "moment/moment";

const Place = ({ data, status, proccessData, index }) => {
  const [open, setOpen] = useState(false);
  const [statusState, setStatusState] = useState(status);
  const [tourID, setTourID] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const yourdate = new Date();

  const handleClickOpen = () => {
    setOpen(true);
  };

  //   useEffect(() => {
  //     axios(
  //       `https://tourapi-dev-n.herokuapp.com/tour/${searchParams.get("slug")}`
  //     ).then(({ data }) => setTourID(data["_id"]));
  //   }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const changeState = () => {
    if (statusState === "Chưa hoàn thành") {
      axios
        .put(
          `https://tourapi-dev-n.herokuapp.com/lichtrinh/${proccessData[index]["_id"]}`,
          {
            trang_thai: "Đang đến",
          }
        )
        .then(() => setStatusState("Đang đến"));
    }
    if (statusState === "Đang đến") {
      axios
        .put(
          `https://tourapi-dev-n.herokuapp.com/lichtrinh/${proccessData[index]["_id"]}`,
          {
            trang_thai: "Đã tham quan",
          }
        )
        .then(() => setStatusState("Đã tham quan"));
    }
  };

  const renderStatusLabel = () => {
    if (statusState === "Đang đến")
      return <small className={`status going`}>{statusState}</small>;
    else if (statusState === "Đã tham quan")
      return <small className={`status going`}>{statusState}</small>;
    else return <small className={`status wait`}>{statusState}</small>;
  };
  return (
    <>
    <Paper elevation={3}>
      <Container>
        <div className="container">
         
           
              
                <div className="inbox-message">
                  <ul>
                    <li>
                      <div className="message-avatar">
                        <img
                          src={`https://tourapi-dev-n.herokuapp.com/${data.hinh}`}
                        />
                      </div>

                      <div className="message-body">
                        <div className="message-body-heading">
                          <h5>
                            {data.ten}
                            <span
                              className={
                                statusState === "Đang đến"
                                  ? "important"
                                  : "unread"
                              }
                            >
                              {renderStatusLabel()}
                            </span>
                          </h5>

                          <span>{moment(yourdate).fromNow()}</span>
                        </div>
                        <p style={{ color: "#08183c", fontSize: "15px" }}>
                          {data.mo_ta.slice(0, 280)}...
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              
          
      
        </div>
      </Container>
      </Paper>
    </>
  );
};

export default Place;
