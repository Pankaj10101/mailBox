import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import SideBarOption from "./SideBarComps/SideBarOption";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import "./SideBar.css";
import { useDispatch } from "react-redux";
import {
  setComposeOpen,
  setIsInbox,
  setIsSentBox,
} from "../../store/Slices/MailSlice";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeOption, setActiveOption] = useState("inbox");

  const handleComposeMail = () => {
    dispatch(setComposeOpen(true));
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (option === "inbox") {
      dispatch(setIsInbox());
    } else if (option === "sent") {
      dispatch(setIsSentBox());
    }
    navigate("/");
  };

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={handleComposeMail}
      >
        Compose
      </Button>
      <SideBarOption
        Icon={InboxIcon}
        title="Inbox"
        number="224"
        isActive={activeOption === "inbox"}
        onClick={() => handleOptionClick("inbox")}
      />
      <SideBarOption Icon={StarRateIcon} title="Starred" number="100" />
      <SideBarOption Icon={WatchLaterIcon} title="Snoozed" number="224" />
      <SideBarOption Icon={LabelImportantIcon} title="Important" number="224" />
      <SideBarOption
        Icon={SendIcon}
        title="Sent"
        number="224"
        isActive={activeOption === "sent"}
        onClick={() => handleOptionClick("sent")}
      />
      <SideBarOption Icon={DraftsIcon} title="Drafts" number="224" />
      <SideBarOption Icon={LabelIcon} title="Category" number="224" />
      <SideBarOption Icon={DeleteIcon} title="Trash" number="224" />
      <SideBarOption Icon={FindInPageIcon} title="Documents" number="224" />
      <SideBarOption Icon={ExpandMoreIcon} title="More" number="224" />

      <br />
      <h3 className="sidebarOptions__heading">Meet</h3>
      <SideBarOption Icon={VideocamIcon} title="New Meeting" />
      <SideBarOption Icon={KeyboardIcon} title="Join a Meeting" />
    </div>
  );
};

export default SideBar;
