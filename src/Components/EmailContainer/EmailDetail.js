import React from "react";
import "./EmailContainer.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const EmailDetail = () => {
    const navigate = useNavigate()
    const selectedMessage = useSelector(state=>state.mail.selectedMessage)
  return (
    <div className="email_details">
      <div className="email_settingsLeft">
        <IconButton>
          <ArrowBackIcon onClick={()=>navigate('/')} />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="email_settingsRight">
        <span>1-50 of 10,000</span>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <div className="emaildetails_message">
      <div className="emaildetails__header">
        <div className="emaildetails__header_left">
          <h4>{selectedMessage?.subject}</h4>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
        </div>
        <div className="emaildetails__header_right">
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <LaunchIcon />
          </IconButton>
        </div>
      </div>

      <div className="emaildetails__middleheader">
        <div className="emaildetails__middleheader_left">
          <IconButton>
            <Avatar />
          </IconButton>
          <h4>{selectedMessage?.name}</h4>
          <p>{selectedMessage?.email}</p>
        </div>
        <div className="emaildetails__middleheader_right">
        <p>{selectedMessage?.time}</p>
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton>
            <ReplyIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaildetails_body">{selectedMessage?.message}</div>
      </div>
    </div>
  );
};

export default EmailDetail;
