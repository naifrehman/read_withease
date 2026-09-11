import React, { useState } from "react";
import { Link as RouterLink, useNavigate} from "react-router-dom";

function SignupLogin() {
    
    const [email, setEmail] = useState(''); // use State to hold user email
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isMsgOpen, setIsMsgOpen] = useState(false);
    const navigate = useNavigate;

    // now 


        return (
            <div>
                <h1>Signup Page</h1>
            </div>
        )

}

export default SignupLogin;