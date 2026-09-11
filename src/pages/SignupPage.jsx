import React, { useState } from "react";
import { Link as RouterLink, useNavigate} from "react-router-dom";

function SignupLogin() {
    
    const [email, setEmail] = useState(''); // use State to hold user email
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isMsgOpen, setMsgOpen] = useState(false);
    const navigate = useNavigate;

    // now we use try-catch to check for any errors
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

            navigate('/lesson');
            setMessage("login successful");
            setMsgOpen(true);
        } catch (erorr){
            setMessage(`Signup error ${error}`);
            setMsgOpen(true);
            console.error("error when signing up!");
        }
    }


        return (
            <div className="flex flex-col items-center gap-6 p8 bg-gray-100 min-h screen">
                <h1 className="text-4xl font-bold text-gray-800">Sign Up and use ReadwithEase</h1>

                <div className="p-6 w-full max-w-sm shadow-md border rounded-md bg-beige">
                    <form onSubmit={handleSignUp}>
                        <div className="flex flex-col gap-4">

                            <div>
                                <label for="email" class="block mb-1 font-medium">Enter your email</label>
                                <input 
                                id="email" 
                                placeholder="Enter your email"
                                value={email}
                                onChange = {(e) => setEmail(e.target.value)}
                                required
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="password class=block mb-1 font-medium"></label>
                                <input 
                                id="password"
                                placeholder="enter your password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                required
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="hover:rise w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                            >Sign Up</button>

                        </div>
                    </form>
                </div>

                <p>Already have an Account?{" "}
                    <RouterLink to="/login" className="text-blue-500 hover:underline">Login</RouterLink>
                </p>

                {isMsgOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 background-blur-md"> 
                        <div className="bg-white rounded-md shadow-lg w-full max-w-sm p-6"> 
                            <h2 className="text-lg font-bold mb-2">ERROR</h2>
                            <p className="mb-4">{message}</p>
                            <div className="flex justify-end">
                                <button
                                onClick={() => setMsgOpen(false)}
                                className="bg-blue-500 text-white rounded-md hover:bg-gray-500 px-4"
                                >Close</button> 
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )

}

export default SignupLogin;