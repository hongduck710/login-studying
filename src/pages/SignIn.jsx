import { useState } from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import ArrowRightIcon from "../assets/svg/keyboardArrowRightIcon.svg";

//import OAuth from "../compoents/OAuth"; // 추후에 

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const {email, password} = formData;

    const navigate = useNavigate();
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            if(userCredential.user) {
                navigate("/");
            }
        } catch(error){
            toast.error("Bad User Credentials", error);
        }
    }

    return (
        <>
            <div className="pageContainer">
                <header><p className="pageHeader">어서오세요!</p></header>
                <main>
                    <form onSubmit={onSubmit}>
                        <input 
                        type="email" 
                        className="emailInput"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={onChange}
                        />
                        <div className="passwordInputDiv">
                            <input 
                            type={showPassword ? "text" : "password"} 
                            className="passwordInput"
                            placeholder="password" 
                            id="password"
                            value={password}
                            onChange={onChange}
                            />
                            <img 
                            src={visibilityIcon}
                            className="showPassword"
                            alw="show password"
                            onClick={() => setShowPassword((prevState) => !prevState)}
                            />

                            <Link to="/forgot-password" className="forgotPasswordLink">
                                Forgot Password
                            </Link>
                            <div className="signInBar">
                                <p className="signInText">Sign In</p>
                                <button className="signInButton">
                                    <img src={ArrowRightIcon} />
                                </button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}
export default SignIn;