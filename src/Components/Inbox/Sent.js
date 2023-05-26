import React, { useEffect } from "react";
import "../EmailContainer/EmailContainer.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMessage } from "../../store/Slices/MailSlice";
import { useNavigate } from "react-router-dom";

const Sent = ({ name, subject, message, time, email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emails = useSelector(state=>state.mail.allMails)
  const user = useSelector((state) => state.auth.value);

  const openMessage = () => {
    dispatch(
      setSelectedMessage({
        name,
        subject,
        message,
        time,
        email
      })
    );
    navigate("/mail");
  };
  return (
    <div className="emailbody" onClick={openMessage}>
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon onClick={clickfxn} />
        <LabelOutlinedIcon />
        <h4>{name}</h4>
      </div>

      <div className="emailbody_middle">
        <div className="emailbody_middle_msg">
          <p>
            <b>{subject}</b> {message}
          </p>
        </div>
      </div>
      <div className="emailbody_right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Sent;
