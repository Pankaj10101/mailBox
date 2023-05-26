import React, { useEffect, useState } from "react";
import "./EmailContainer.css";
import EmailSetting from "./EmailSetting";
import EmailType from "./EmailType";
import EmailList from "./EmailList";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setAllMails } from "../../store/Slices/MailSlice";
const EmailContainer = () => {
  // const [emails, setEmails] = useState([]);
  // const dispatch= useDispatch()
  const emails = useSelector(state=>state.mail.allMails)
  // useEffect(() => {
  //   const emailData = onSnapshot(collection(db, "emails"), (snapshot) => {
  //     dispatch(setAllMails(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     ))
  //     // setEmails(
  //     //   snapshot.docs.map((doc) => ({
  //     //     id: doc.id,
  //     //     data: doc.data(),
  //     //   }))
  //     // );
  //   });

  //   return () => {
  //     emailData();
  //   };
  // }, []); 
  // console.log(emails)
  // const recieveMails = emails.filter(item=>{
  //   item.data.to===user.email
  // })
  // console.log(recieveMails)

  return (
    <div className="emaillist">
      <EmailSetting />
      <EmailType />
      {/* {emails?.map((item) => ( */}
        <EmailList
          // key={item.id}
          // name={item.data.fromName}
          // email={item.data.from}
          // subject={item.data.subject}
          // message={item.data.emailContent}
          // time={new Date(item.data.timeStamp?.seconds*1000).toLocaleTimeString()}
        />
      {/* ))} */}
    </div>
  );
};

export default EmailContainer;
