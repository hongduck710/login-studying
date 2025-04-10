import { useState } from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
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
    }

    return (
        <h2>로그인부터</h2>
    );
}
export default SignIn;