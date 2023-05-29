import React from "react";
import "./EmailContainer.css";
import EmailSetting from "./EmailSetting";
import EmailType from "./EmailType";
import EmailList from "./EmailList";

const EmailContainer = () => {
  return (
    <div className="emaillist">
      <EmailSetting />
      <EmailType />
      <EmailList />
    </div>
  );
};

export default EmailContainer;
