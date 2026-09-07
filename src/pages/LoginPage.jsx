import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate(); // used to programmatically navigate to different routes in the app after successful login
    const [message, setMessage] = useState(""); // state var to hold any message such as an error or successful message to user
    const [isMessageOpen, setIsmessageOpen] = useState(false); // state var controlling visibility of message to user


    // try-catch to handle login with email and password using firebase auth
    // async function, event as argument, prevent default form submission behavior
    const handleLogin = async (e) => { 
        e.preventDefault(); // this prevents the default form submission behavior, which would cause a page reload.
        try {
            await signInWithEmailAndPassword(auth, email, password); // attempt to sign in with email and password
            setMessage("login successful!"); 
            setIsmessageOpen(true); // show 
            navigate("/lessons"); // if login is successful, navigate to the lessons page
        } catch (error) {
            setMessage(error.message); // if login fails, set message state var to erro messgae
            setIsmessageOpen(true); // show error message
            console.error("Login error:", error); // log error to console for debugging
        }
    }

        return(
            <>
            <div className="flex flex-col items-center gap-6 p-8 bg-gray-100 min-h-screen">
                <h1 className="text-4x1 font-bold text-gray-800">Login to ReadwithEase Account</h1>

                <div className="p-6 w-full max-w-sm shadow-md border rounded-md bg-white">
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="email" className="block mb-1 font-medium">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // update email state variable when user types in the input field
                                    required
                                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
            </>
        )

}

export default LoginPage;