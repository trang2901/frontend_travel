import React from "react";

import { TextField } from "@mui/material";
import { Input } from "antd";
import { Formik } from "formik";
import "./accompanyInfor.scss";
import * as Yup from 'yup';
const AccompanyInfor = ({onShowLinkInput,setOnShowLink,numberGuest,accompanyData, setAccompanyData,}) => {


  const handleChangeName = (e) => {
    const index = e.target.dataset.index;
    const tempArray = [...accompanyData];
    tempArray[index].ho_ten = e.target.value;
    setAccompanyData(tempArray);
  };

  const handleChangePhone = (e) => {
    const index = e.target.dataset.index;
    const tempArray = [...accompanyData];
    tempArray[index].sdt = e.target.value;
    setAccompanyData(tempArray);

  };
  const handleChangeAge = (e) => {
    const index = e.target.dataset.index;
    const tempArray = [...accompanyData];
    tempArray[index].tuoi = e.target.value;
    setAccompanyData(tempArray);
  };


  const handleChangeCMND = (e) => {
    const index = e.target.dataset.index;
    const tempArray = [...accompanyData];
    tempArray[index].so_cmnd= e.target.value;
    setAccompanyData(tempArray);
  };


  const renderFormAccompany = () => {
    return Array.from({ length: numberGuest }, (item, index) => (
      <div className="accompany--input">
        {/* <h1>{index + 1}</h1> */}
       
        <p className="thongtin_input">Thông tin người {index + 1}</p>  
        <TextField
          type="text"
          // name="hovaten"
          label="Họ và tên"
          value={accompanyData[index]?.ho_ten || ""}
          sx={{ maxWidth: "200px"}}
          onChange={handleChangeName}
          inputProps={{ "data-index": index }}
          required
          variant="standard" 
        />
       
        
        <TextField
          type="text"
          // name="sdt"
          label="Số điện thoại"
          sx={{ maxWidth: "200px", border: 'none' }}
          value={accompanyData[index]?.sdt || ""}
          onChange={handleChangePhone}
          inputProps={{ "data-index": index }}
          style= {{borderRadius: 0}}
          variant="standard" 
          required
        />
      
        <TextField
          type="number"
          // name="sdt"
          label="Tuổi"
          sx={{ maxWidth: "200px" }}
          value={accompanyData[index]?.tuoi || ""}
          onChange={handleChangeAge}
          inputProps={{"data-index": index }}
          style= {{borderRadius: 0}}
          required
          variant="standard" 
        />

        <TextField
          type="text"
          // name="sdt"
          label="Số CMND/CCCD"
          sx={{ maxWidth: "200px" }}
          value={accompanyData[index]?.so_cmnd || ""}
          onChange={handleChangeCMND}
          inputProps={{"data-index": index }}
          style= {{borderRadius: 0}}
          required
          variant="standard" 
        />
       
      </div>
    ));
  };

  return (
    <div className="AccompanyInfor padding-section">
      {onShowLinkInput ? <div>Link</div> : renderFormAccompany()}
    </div>
  );
};

export default AccompanyInfor;
