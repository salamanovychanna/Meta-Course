import { Link, redirect, useNavigate } from "react-router-dom";
import Button from "../../Button";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import './Register.css'
import { useContext, useEffect, useRef, useState } from "react";
import { auth, googleProvider } from "../../../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { AuthContext } from "../../../context/AuthProvider";

const Register = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [inputErrorMessage, setInputErrorMessage] = useState(null);

    const image = useRef(null);
    const text = useRef(null);

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(()=>{
        if(currentUser) {
            navigate('/')
        }
    }, [currentUser])
    //

    const singUp = async (e) => {
        e.preventDefault();
        if (passwordInput.length < 8) {
            setInputErrorMessage("Password should be at least 8 symbols");
            return;
        }
        
        if (!/[a-z]/.test(passwordInput)) {
            setInputErrorMessage("Password has to include lowercase letters [a-z]");
            return;
        }
        
        if (!/[A-Z]/.test(passwordInput)) {
            setInputErrorMessage("Password has to include uppercase letters [A-Z]");
            return;
        }
        
        if (!/[0-9]/.test(passwordInput)) {
            setInputErrorMessage("Password has to include numbers [0-9]");
            return;
        }
        
        if (!/[$@#&!+]/.test(passwordInput)) {
            setInputErrorMessage("Password has to include symbols [$@#&!]");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
            await updateProfile(auth.currentUser, {
                displayName: nameInput,
            })
            setInputErrorMessage('');
        } catch (error) {
            console.error(error);
            setInputErrorMessage(error.message);
            return;
        }
        navigate('/profile')

    }

    const singUpWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (e) {
            console.log(e.message)
            switch (e.message.match( /\(auth\/[\w-]+\)/)[0]) {
                case '(auth/user-not-found)':
                    alert("We couldn't find account with this email, please check the spell or register new account!")
                    break;
                case '(auth/network-request-failed)':
                    alert('Please, check your internet connection and try again.')
                    break;
                case '(auth/too-many-requests)':
                    alert(`ccess to this account has been temporarily disabled due to many failed login attempts.You can try again later or you can immediately restore it by`)
                    break
                case '(auth/wrong-password)':
                    alert(`This password is wrong, check the spell or if you forgot it -`)
                    break;
                default:
                    alert("Error occupied. Please, try again later.")
                    break;
            }
            return;
        }
    }

    // window.addEventListener("resize", ()=>{
    //     image.current?.cliendHeight = text.current?.clientHeght;
    // })


    return <section className="register-wrapper">
        <div className="register-container">
            <div ref={text} className="register-text-section">
                <h1 className="register-title">Register new account</h1>
                <form className="register-form" onSubmit={singUp}>
                    <label className="register-label" htmlFor="name">name</label>
                    <input required className="register-input" id="name" type="text" onChange={(e)=>setNameInput(e.target.value)}/>
                    <label className="register-label" htmlFor="email">email</label>
                    <input required className="register-input" id="email" type="email" onChange={(e)=>setEmailInput(e.target.value)}/>
                    <label className="register-label" htmlFor="password">password</label>
                    <input  required className="register-input" id="password" type="password" onChange={(e)=>setPasswordInput(e.target.value)}/>
                    {/**/}
                    <br />
                    <Button className="register-button" bgColor="primary" color="black">Register</Button>
                    {inputErrorMessage && (
                        <span style={{ marginTop: "10px", color: "#EE9972" }}>
                            {inputErrorMessage}
                        </span>
                    )}
                </form>
                <div className="register-separator">
                    <hr></hr>
                    <p>or</p>
                    <hr></hr>
                </div>
                <Button onClick={singUpWithGoogle} className="register-google-button" bgColor="green" color="white">Sing up with Google</Button>
                <p>Already have an account? Go to <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/login">login page</Link></p>
                <p style={{color: "#EDEFEE"}}>Go back to <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/">home page</Link></p>
            </div>
                <ImageWrapper innerRef={image} classNameString="register-img" hash="LLDlWcEzM_r@~pV?V?of%hVsWAkC" altString="" srcString="https://images.unsplash.com/photo-1602348143971-0c5c97d23367?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
    </section>
}

export default Register;