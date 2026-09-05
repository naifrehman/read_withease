import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-routerdom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate(); // used to programmatically navigate to different routes in the app after successful login

        return(
            <>
            </>
        )

}

export default LoginPage;