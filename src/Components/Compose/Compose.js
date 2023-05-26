import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./Compose.css";
import { useDispatch, useSelector } from "react-redux";
import { setComposeOpen } from "../../store/Slices/MailSlice";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const user = useSelector(state=>state.auth.value)

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };

  const dispatch = useDispatch();
  const handleComposeMail = () => {
    dispatch(setComposeOpen(false));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const emailContent = editorState.getCurrentContent().getPlainText();
    if (to && subject && emailContent) {
      addDoc(collection(db, "emails"), {
        to,
        subject,
        emailContent,
        from:user.email,
        fromName:user.displayName,
        timeStamp: serverTimestamp(),
      });
      alert("email sent successfully");
      setTo("");
      setSubject("");
      setEditorState(EditorState.createEmpty());
      dispatch(setComposeOpen(false));
    } else {
      alert("fill all fields");
    }
  };
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header_Left">
          <span>New Message</span>
        </div>
        <div className="compose__header_Right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={handleComposeMail} />
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className="compose__body">
          <div className="compose__bodyForm">
            <input
              type="email"
              placeholder="Recipients"
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorStateChange}
              wrapperClassName="editor-wrapper"
              editorClassName="editor-content"
              editorStyle={{ height: "400px", width: "100%", padding: "20px" }}
            />
          </div>
        </div>
        <div className="compose__footer">
          <button type="submit">
            Send <ArrowDropDownIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
