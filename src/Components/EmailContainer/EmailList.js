import React from "react";
import Sent from "../Inbox/Sent";
import { useSelector } from "react-redux";
// import "./EmailContainer.css";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
// import { useDispatch } from "react-redux";
// import { setSelectedMessage } from "../../store/Slices/MailSlice";
// import { useNavigate } from "react-router-dom";

const EmailList = ({ name, subject, message, time, email }) => {
  const user = useSelector(state=>state.auth.value)
  const isInbox =useSelector(state=>state.mail.isInbox)
  const isSentBox =useSelector(state=>state.mail.isSentBox)
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const openMessage = () => {
  //   dispatch(
  //     setSelectedMessage({
  //       name,
  //       subject,
  //       message,
  //       time,
  //       email
  //     })
  //   );
  //   navigate("/mail");
  // };
  console.log(isInbox,isSentBox)
  const emails = useSelector((state) => state.mail.allMails);

  const recievedMails = emails.filter((item)=>item.data.to===user.email)
  const sentMails = emails.filter(item=>item.data.from===user.email)
  console.log(recievedMails)
  console.log(emails);
  return (
    <>
        {isInbox && !isSentBox && recievedMails?.map((item) => (
      <Sent
        key={item.id}
        name={item.data.fromName}
        subject={item.data.subject}
        message={item.data.emailContent}
        time={new Date(item.data.timeStamp?.seconds * 1000).toLocaleTimeString()}
        email={item.data.from}
      />
    ))}
    {!isInbox && isSentBox && sentMails?.map((item) => (
      <Sent
        key={item.id}
        name={item.data.fromName}
        subject={item.data.subject}
        message={item.data.emailContent}
        time={new Date(item.data.timeStamp?.seconds * 1000).toLocaleTimeString()}
        email={item.data.from}
      />
    ))}
  </>
    // <div className="emailbody" onClick={openMessage}>
    //   <div className="emailbody_left">
    //     <CheckBoxOutlineBlankIcon />
    //     <StarBorderIcon />
    //     <LabelOutlinedIcon />
    //     <h4>{name}</h4>
    //   </div>

    //   <div className="emailbody_middle">
    //     <div className="emailbody_middle_msg">
    //       <p>
    //         <b>{subject}</b> {message}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="emailbody_right">
    //     <p>{time}</p>
    //   </div>
    // </div>
  );
};

export default EmailList;
