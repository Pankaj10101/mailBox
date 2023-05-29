import React from "react";
import Sent from "../Inbox/Sent";
import { useSelector } from "react-redux";
import Recieve from "../Inbox/Recieve";

const EmailList = () => {
  const user = useSelector((state) => state.auth.value);
  const isInbox = useSelector((state) => state.mail.isInbox);
  const isSentBox = useSelector((state) => state.mail.isSentBox);
  const emails = useSelector((state) => state.mail.allMails);
  const recievedMails = emails.filter((item) => item.data.to === user.email);
  const sentMails = emails.filter((item) => item.data.from === user.email);
  
  return (
    <>
      {isInbox &&
        !isSentBox &&
        recievedMails?.map((item) => (
          <Recieve
            key={item.id}
            id={item.id}
            name={item.data.fromName}
            subject={item.data.subject}
            message={item.data.emailContent}
            time={new Date(
              item.data.timeStamp?.seconds * 1000
            ).toLocaleTimeString()}
            email={item.data.from}
          />
        ))}
      {!isInbox &&
        isSentBox &&
        sentMails?.map((item) => (
          <Sent
            key={item.id}
            id={item.id}
            name={item.data.fromName}
            subject={item.data.subject}
            message={item.data.emailContent}
            time={new Date(
              item.data.timeStamp?.seconds * 1000
            ).toLocaleTimeString()}
            email={item.data.from}
          />
        ))}
    </>
  );
};

export default EmailList;
