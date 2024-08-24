import { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Button";
import { auth } from "../../../config/firebase"
import "./styles.css"

function useQuery () {
    const location = useLocation();
    return new URLSearchParams(location.search)

}

const NewPassword = () => {
    const [passwordInput, setPasswordInput] = useState('')
    const query = useQuery()
    const navigate = useNavigate();

    const handleSettingNewPassword = async (e) => {
        e.preventDefault()
        try {
            await confirmPasswordReset(auth, query.get('oobCode'), passwordInput)
        } catch (e) {
            console.log(e.message)
            return;
        }
        alert('password changed successfully!')
        navigate('/login')
    }

    return <section className="new-password-wrapper">
    <div className="new-password-container">
        <h1 style={{marginBottom: "25px"}}>Ente new password</h1>
        <form onSubmit={handleSettingNewPassword} className="new-password-form">
            <label style={{marginBottom: '9px'}} htmlFor="password">password</label>
            <input value={passwordInput} className="new-password-input" id="password" type="password" onChange={(e)=> setPasswordInput(e.target.value)}/>
            <Button type="submit" className="new-password-button">Submit new password</Button>
        </form>
        <p>Just remembered your old password?</p>
        <p>Go to <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/login">login page</Link></p>
    </div>
</section>
}

export default NewPassword;