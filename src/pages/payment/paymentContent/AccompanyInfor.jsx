import React from "react";

import { TextField } from "@mui/material";
import { Input } from "antd";
import "./accompanyInfor.scss";
const AccompanyInfor = ({
  onShowLinkInput,
  setOnShowLink,
  numberGuest,
  accompanyData,
  setAccompanyData,
}) => {
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

  const renderFormAccompany = () => {
    return Array.from({ length: numberGuest }, (item, index) => (
      <div className="accompany--input">
        {/* <h1>{index + 1}</h1> */}
        <p className="thongtin_input">Thông tin người {index + 1}</p>
        <Input
              type="text"
              label="Họ và tên"
              placeholder="Họ và tên"
              value={accompanyData[index]?.ho_ten || ""}
                size="large"
                width="20px"
                maxLength="200px"
                onChange={handleChangeName}
                inputProps={{ "data-index": index }}
              />
        {/* <TextField
          type="text"
          label="Họ và tên"
          value={accompanyData[index]?.ho_ten || ""}
          sx={{ maxWidth: "200px" }}
          onChange={handleChangeName}
          inputProps={{ "data-index": index }}
        /> */}
        <Input
              type="number"
              label="Số điện thoại"
                size="large"
                width="20px"
                maxLength="200px"
                placeholder="Số điện thoại"
                value={accompanyData[index]?.sdt || ""}
                onChange={handleChangePhone}
                inputProps={{ "data-index": index }}
              />

        {/* <TextField
          type="number"
          label="Số điện thoại"
          sx={{ maxWidth: "200px" }}
          value={accompanyData[index]?.sdt || ""}
          onChange={handleChangePhone}
          inputProps={{ "data-index": index }}
          style= {{borderRadius: 0}}
        /> */}
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
