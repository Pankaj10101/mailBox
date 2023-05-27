import React, { useEffect } from "react";
import "../EmailContainer/EmailContainer.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMessage } from "../../store/Slices/MailSlice";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Recieve = ({ name, subject, message, time, email, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emails = useSelector(state=>state.mail.allMails)
  const user = useSelector((state) => state.auth.value);

  const currentMail =  emails.find(item=>item.id===id)

  const openMessage = async (id) => {
    dispatch(
      setSelectedMessage({
        name,
        subject,
        message,
        time,
        email
      })
    );
    const mailRef = doc(db, "emails", id);
    try {
      await setDoc(mailRef, { isRead: true }, { merge: true });
      console.log("isRead field updated successfully");
    } catch (error) {
      console.error("Error updating isRead field:", error);
    }
    navigate("/mail");
  };
  return (
    <div className={`emailbody ${!currentMail.data.isRead ? 'activeMail' : ''}`} onClick={()=>openMessage(id)}  >
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
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

export default Recieve;
