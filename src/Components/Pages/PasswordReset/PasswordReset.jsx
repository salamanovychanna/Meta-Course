import { Link } from "react-router-dom";
import Button from "../../Button"
import './PasswordReset.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import LoadingFallback from "../../LoadingFallback";
import { auth } from "../../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const PasswordReset = () => {
    //https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
    const { loading, currentUser } = useContext(AuthContext);
    const [emailInput, setEmailInput] = useState('')

    useEffect(()=>{
        if (!loading && currentUser) {
            setEmailInput(currentUser.email)
        }
    }, [loading])
    
    if (loading) {
        return <LoadingFallback/>
    }

    
    const handleResetPassword = async (e) => {
        e.preventDefault()
        await sendPasswordResetEmail(auth, emailInput)
        .catch((error) => {
            console.log(error.message);
            return;
        });
        alert('Check your mail!')
    }


    return <section className="password-reset-wrapper">
        <div className="password-reset-container">
            <h1 style={{marginBottom: "25px"}}>Reset password</h1>
            <form className="password-reset-form">
                <label htmlFor="email">email</label>
                <input readOnly={!!currentUser} value={emailInput} className="password-reset-input" id="email" type="email" onChange={(e)=> {if(!currentUser){setEmailInput(e.target.value)}}}/>
                <Button onClick={handleResetPassword} className="password-reset-button">Send letter to reset password</Button>
            </form>
            <p>Just remembered your old password?</p>
            <p>Go to <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/login">login page</Link></p>
        </div>
    </section>
}

export default PasswordReset;
