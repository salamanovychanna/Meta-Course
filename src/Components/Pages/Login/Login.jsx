import { Link, redirect, useNavigate } from "react-router-dom";
import Button from "../../Button";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import './Login.css'
import { useContext, useEffect, useRef, useState } from "react";
import { auth, googleProvider } from "../../../config/firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../../context/AuthProvider";


const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [errorInput, setErrorInput] = useState('');
    const [linkErrorInput, setLinkErrorInput] = useState(null)

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

    
    const handleSingIn = async (e) => {
        e.preventDefault()
        setErrorInput('')
        if (!emailInput || !passwordInput){
            setErrorInput("You can't log in without password or email")
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, emailInput, passwordInput);
        } catch (e) {
            console.log(e.message)
            switch (e.message.match( /\(auth\/[\w-]+\)/)[0]) {
                case '(auth/user-not-found)':
                    setErrorInput("We couldn't find account with this email, please check the spell or register new account!")
                    setLinkErrorInput(true);
                    break;
                case '(auth/network-request-failed)':
                    setErrorInput('Please, check your internet connection and try again. ')
                    setLinkErrorInput(true);
                    break;
                case '(auth/too-many-requests)':
                    setErrorInput(`ccess to this account has been temporarily disabled due to many failed login attempts.You can try again later or you can immediately restore it by`)
                    setLinkErrorInput(true);
                    break
                case '(auth/wrong-password)':
                    setErrorInput(`This password is wrong, check the spell or if you forgot it -`)
                    setLinkErrorInput(true);
                    break;
                default:
                    setErrorInput("Error occupied. Please, try again later or")
                    setLinkErrorInput(true);
                    break;
            }
            return;
        }
    }

    const singInWithGoogle = async () => {
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
    //     image?.current?.cliendHeight = text?.current?.clientHeght;
    // })
    return <section className="login-wrapper">
        <div className="login-container">
            <div ref={text} className="login-text-section">
                <h1 className="login-title">Login into your account</h1>
                <form className="login-form" onSubmit={handleSingIn}>
                    <label className="login-label" htmlFor="email">email</label>
                    <input className="login-input" id="email" type="email" onChange={(e) => setEmailInput(e.target.value)} />
                    <label className="login-label" htmlFor="password">password</label>
                    <input className="login-input" id="password" type="password" onChange={(e) => setPasswordInput(e.target.value)}/>
                    <br />
                    <Button type="submit" className="login-button" bgColor="primary" color="black">Login</Button>
                    {errorInput && (
                        <span style={{ marginTop: "10px", color: "#EE9972" }}>
                            {errorInput} {linkErrorInput && <Link style={{ textDecoration: "none", color: "rgb(255, 199, 0)" }} to="/reset-password">reset password</Link>}
                        </span>

                    )}
                </form>
                <div className="login-separator">
                    <hr></hr>
                    <p>or</p>
                    <hr></hr>
                </div>
                <Button onClick={singInWithGoogle} className="login-google-button" bgColor="green" color="white">Sing in with Google</Button>
                <p>Are you new one? Go to <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/register">register page</Link></p>
                <p style={{color: "#EDEFEE"}}>Go back to <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/">home page</Link></p>
            </div>
                <ImageWrapper innerRef={image} classNameString="login-img" hash="LLDlWcEzM_r@~pV?V?of%hVsWAkC" altString="" srcString="https://images.unsplash.com/photo-1602348143971-0c5c97d23367?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
    </section>
}

export default Login;