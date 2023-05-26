import React from "react";
import { Button, Card } from "react-bootstrap";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signin } from "../../store/Slices/AuthSlice";

const Login = () => {
    const dispatch = useDispatch()
    const login = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
           localStorage.setItem('loginId', token)
            const user = result.user;
            dispatch(signin({
                displayName:user.displayName,
                photoURL:user.photoURL,
                email:user.email
            }))
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
      
    }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card style={{ width: "300px", textAlign: "center" }}>
        <Card.Body>
          <h2 style={{ marginBottom: "20px", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Mail Box</h2>
          <Button variant="primary" onClick={login}>Login with Google</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
