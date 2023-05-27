import React, { useEffect, useState } from "react";
import "./SideBarOption.css";
import { useSelector } from "react-redux";

const SideBarOption = ({ Icon, title, number, isActive, onClick }) => {
  const [totalLength, setTotalLength] = useState(0);
  const emails = useSelector((state) => state.mail.allMails);
  const user = useSelector((state) => state.auth.value);

  useEffect(() => {
    if (title === "Sent") {
      const totalSent = emails.filter((item) => item.data.from === user.email);
      setTotalLength(totalSent.length);
    } else {
      const totalUnread = emails.filter(
        (item) => item.data.to === user.email && !item.data.isRead
      );
      setTotalLength(totalUnread.length);
    }
  }, [emails, title, user.email]);

  return (
    <div
      className={`sidebarOptions ${isActive ? "sidebarOptions-active" : ""}`}
      onClick={onClick}
    >
      <Icon />
      <h4>{title}</h4>
      {title === "Sent" ? (
        <p>Total: {totalLength}</p>
      ) : (
        <p>Unread: {totalLength}</p>
      )}
    </div>
  );
};

export default SideBarOption;
