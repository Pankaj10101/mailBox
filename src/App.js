import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import EmailContainer from "./Components/EmailContainer/EmailContainer";
import Compose from "./Components/Compose/Compose";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import EmailDetail from "./Components/EmailContainer/EmailDetail";
import Login from "./Components/Login/Login";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { setIsLogin, signin, signout } from "./store/Slices/AuthSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { setAllMails, setInbox } from "./store/Slices/MailSlice";
import { HalfMalf } from "react-spinner-animated";
import 'react-spinner-animated/dist/index.css'

function App() {
  const composeIsOpen = useSelector((state) => state.mail.composeIsOpen);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const emailData = onSnapshot(collection(db, "emails"), (snapshot) => {
      dispatch(
        setAllMails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    });

    return () => {
      emailData();
    };
  }, []);

  const getLoginState= async ()=>{
   auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signin({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      } else {
        dispatch(signout());
      }
      setIsLoading(false)
    });
  }
  useEffect(() => {

   getLoginState()
  }, [dispatch]);

  if(isLoading){
    return (
      <HalfMalf/>
    )
  }
  return (
    <>
      {user ? (
        <div>
          <Header />
          <div className="app__body">
            <SideBar />
            <Routes>
              <Route exact path="/" element={<EmailContainer />} />
              <Route path="/mail" element={<EmailDetail />} />
            </Routes>
          </div>
          {composeIsOpen && <Compose />}
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
