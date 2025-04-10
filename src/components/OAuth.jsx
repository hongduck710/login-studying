import {useLocation, useNavigate} from "react-router-dom";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {doc, setDoc, getDoc, serverTimestamp} from "firebase/firestore";
import {toast} from "react-toastify";

function OAuth (){
    const navigate = useNavigate();
    const location = useLocation();
   
    return (
        <div className="socialLogin">
            <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with</p>
            <button className="socialIconDiv"></button>
        </div>
    );
}
export default OAuth;