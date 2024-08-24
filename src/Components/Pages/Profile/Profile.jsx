import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import "./Profile.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider"
import { auth, db } from "../../../config/firebase"
import { signOut, updateEmail, updateProfile } from "firebase/auth";
import LoadingFallback from "../../LoadingFallback"
import { collection, getDocs, query, where } from "firebase/firestore";

const Profile = () => {
    const { loading, currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [nameInput, setNameInput] = useState(currentUser?.displayName);
    const [emailInput, setEmailInput] = useState(currentUser?.email);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setNameInput(user.displayName)
            setEmailInput(user.email)
        })
    }, [])

    if (loading) {
        return <LoadingFallback />
    }

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        if (currentUser.displayName === nameInput && currentUser.email === emailInput) {
            alert("you can't update profile with the same data")
            return;
        }
        try {
            await updateEmail(auth.currentUser, emailInput)
            await updateProfile(auth.currentUser, { displayName: nameInput })
        }
        catch (e) {
            switch (e.message.match(/\(auth\/[\w-]+\)/)[0]) {
                case '(auth/requires-recent-login)':
                    alert('For secutiry reasons to change your profile data. You need to log out and log in again.')
                    break;
                case '(auth/network-request-failed)':
                    alert('Please, check your internet connection and try again.')
                    break
                default:
                    alert("Error occupied. Please, try again later.")
                    break;
            }
            return;
        }
        alert("profile updated successfully")
    }

    const handleSignOut = async () => {
        await signOut(auth).catch((e) => {
            switch (e.message.match(/\(auth\/[\w-]+\)/)[0]) {
                default:
                    alert("Error occupied. Please, try again later.")
                    break;
            }
            return;
        })
        alert("You signed out")
    }

    const handleDeleteProfile = async () => {
        const finalAnswer = window.confirm("are you sure you want to delete your account?")
        if (!finalAnswer) {
            return;
        }
        try {
            const q = query(collection(db, "reservations"), where("userId", "==", currentUser.uid));
            const querySnapshot = await getDocs(q);
            var filteredData = querySnapshot.docs.map(doc=>{
                return {...doc.data(), id: doc.id}
            })
        } catch (error) {
            console.log(error.message)
        }
        
        if (filteredData[0]) {
            alert("You cannot delete your profile, if you have any reservations. Cancel them first.")
            return;
        }

        await currentUser?.delete().catch((e) => {
            switch (e.message.match(/\(auth\/[\w-]+\)/)[0]) {
                case '(auth/requires-recent-login)':
                    alert('For secutiry reasons to delte your profile data. You need to log out and log in again.')
                    break;
                case '(auth/network-request-failed)':
                    alert('Please, check your internet connection and try again.')
                    break
                default:
                    alert("Error occupied while deleteing profile. Please, try again later.")
                    break;
            }


            return;
        })

        alert("profile and all your data deleted successfully")
    }

    if (!currentUser) {
        return navigate("/login")
    }

    return (
        <section className="profile-wrapper">
            <div className="profile-container">
                <div className="profile-text-section">
                    <h1 className="profile-title">Profile Settings</h1>
                    <form className="profile-form" onSubmit={handleUpdateProfile}>
                        <label className="profile-label" htmlFor="name" >name</label>
                        <input required className="profile-input" id="name" type="txt" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                        <label className="profile-label" htmlFor="email">email</label>
                        <input required className="profile-input" id="email" type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                        <label className="profile-label" htmlFor="password">password</label>
                        <input readOnly className="profile-input" id="password" type="password" value="**********" />
                        <p>do you want to <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/reset-password">change password</Link>?</p> <br />
                        <Button type="submit" className="profile-button" bgColor="primary" color="black">Edit profile</Button>
                    </form>
                    <hr className="profile-separator" />
                    <Button className="profile-button" bgColor="black" color="white" onClick={handleSignOut}>Log out</Button>
                    <hr className="profile-separator" />
                    <Button className="profile-button" bgColor="red" color="black" onClick={handleDeleteProfile}>Delete profile</Button>

                </div>
                <ImageWrapper classNameString="profile-img" hash="LLDlWcEzM_r@~pV?V?of%hVsWAkC" altString="" srcString="https://plus.unsplash.com/premium_photo-1677097570546-198cef67972b?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </section>
    )

};

export default Profile;