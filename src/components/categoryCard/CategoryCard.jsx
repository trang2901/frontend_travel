import React, { useContext } from "react";
import { Context } from "../../pages/home/Context.js";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ dataTour }) => {
  const navigate = useNavigate();
  const [tag, setTag] = useContext(Context);
  return (
    <Card
      onClick={() => {
        setTag(dataTour.label);
      }}
      sx={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "none",
      }}
      style={{
        background: 'none',
      }}
    >
      <CardActionArea
        className="CardAction"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={dataTour.imageURL}
          sx={{
            width: "80px",
            height: "80px",
            filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.2))",
            borderRadius: "20%",
          }}
          alt=""
        />
        <CardContent>
          <Typography
            sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "22px", color: '#08183c'}}
          >
            {dataTour.label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
