import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton } from "@material-ui/core";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { setIsLogin } from "../../store/Slices/AuthSlice";

const Header = () => {
  const user = useSelector(state=>state.auth.value)
  const dispatch = useDispatch()
  const logout = ()=>{
    localStorage.removeItem('loginId')
    dispatch(setIsLogin(false))
    signOut(auth)
  }
  return (
    <div className="header bg-light py-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-2 col-md-1">
            <IconButton>
              <ReorderIcon />
            </IconButton>
          </div>
          <div className="col-10 col-md-2">
          <h4>Mail Box</h4>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search mail"
              />
              <button className="btn btn-outline-secondary" type="button">
                <SearchIcon />
              </button>
              <button className="btn btn-outline-secondary" type="button">
                <ExpandMoreIcon />
              </button>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex justify-content-end">
              <IconButton>
                <HelpOutlineIcon/>
              </IconButton>
              <IconButton>
                <SettingsIcon/>
              </IconButton>
              <IconButton>
                <AppsIcon/>
              </IconButton>
              <Avatar src={user?.photoURL} onClick={logout} style={{cursor:'pointer'}} ></Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
