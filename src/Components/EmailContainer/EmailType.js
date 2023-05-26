import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import './EmailContainer.css'

const EmailType = () => {
  return (
    <div className="emailType">
      <div className="emailType_options emailType--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailType_options">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailType_options">
        <LocalOfferIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default EmailType;
