import {auth,provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

//This is one method
export const Login = () => {
    const navigate =useNavigate();
   const signInwithGoogle =async () => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate("/");
   }
   
   
    return (
      <div>
        <div>
          <p>Sign in with Google to continue</p>
          <button onClick={signInwithGoogle}>Sign In With Google</button>
        </div>
      </div>
    )
  }
  