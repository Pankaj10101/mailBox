import React from "react";
import "../EmailContainer/EmailContainer.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useDispatch } from "react-redux";
import { setSelectedMessage } from "../../store/Slices/MailSlice";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const Sent = ({ name, subject, message, time, email, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openMessage = () => {
    dispatch(
      setSelectedMessage({
        name,
        subject,
        message,
        time,
        email,
      })
    );
    navigate(`/mail/${id}`);
  };

  const deleteMail = async () => {
    const mailRef = doc(db, "emails", id);
    try {
      await deleteDoc(mailRef);
      console.log("Mail deleted successfully");
    } catch (error) {
      console.error("Error deleting mail:", error);
    }
  };
  return (
    <div className={`emailbody`}>
      <div className="emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>{name}</h4>
      </div>

      <div className="emailbody_middle" onClick={openMessage}>
        <div className="emailbody_middle_msg">
          <p>
            <b>{subject}</b> {message}
          </p>
        </div>
      </div>
      <div className="emailbody_right">
        <DeleteIcon onClick={deleteMail} />
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Sent;
