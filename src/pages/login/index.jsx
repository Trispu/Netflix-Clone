import {  signInWithPopup } from "firebase/auth";
import "./index.scss";
import { auth, googleProvider } from "../../config/firebase";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate= useNavigate()
const handleLoginGoogle= ()=>{
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
   
    const user = result.user;
    console.log(credential)
    console.log(user)
    navigate("/home")
  }).catch((error) => {
   console.log(error)
  
  });

}

  return (
    <div className="login">
     <iframe
        className="login__video"
        src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="wrapper">
        <div className="logo_login">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
            alt=""
            width={200}
          />
        </div>
        <div className="login_form">
          <h3 >Login into your account</h3>
          <input type="text" placeholder="Enter UserName" />
          <input type="password" placeholder="Enter Password" />
          <button>Login</button>
          <button className="login__form__btnGoogle" onClick={handleLoginGoogle}>
            <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" alt="" width={30} />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
