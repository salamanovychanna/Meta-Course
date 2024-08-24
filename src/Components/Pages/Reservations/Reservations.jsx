import { Link } from "react-router-dom";
import "./Reservations.css"
import Reservation from "../../Reservation";
import { db } from '../../../config/firebase'
import { useContext, useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, query, Timestamp, where } from "firebase/firestore";
import { AuthContext } from "../../../context/AuthProvider";
import LoadingFallback from "../../LoadingFallback";

const Reservations = () => {
    const [reservationsList, setReservationsList] = useState([])
    const [loading, setLoading] = useState(true);
    const { currentUser } = useContext(AuthContext)

    const [mediumWidth, setMediumWidth] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 820) {
        setMediumWidth(true);
        }
    }, []);

    window.addEventListener("resize", function (event) {
        if (window.innerWidth <= 820) {
        setMediumWidth(true);
        } else {
        setMediumWidth(false);
        }
    });

    const getReservationsList = async () => {
        setLoading(true)
        try {
            const q = query(collection(db, "reservations"), where("userId", "==", currentUser.uid));
            const querySnapshot = await getDocs(q);
            const filteredData = querySnapshot.docs.map(doc=>{
                return {...doc.data(), id: doc.id}
            })
            setReservationsList(filteredData);
        } catch (e) {
            console.log(e.message)
            alert(e.message)
            setLoading(false)
        }
        setLoading(false)
        
    }

    const deleteReservation = async (id) => {
        try {
            await deleteDoc(doc(db, "reservations", id) )
        } catch (error) {
            console.log(error.message)
            alert(error.message)
            return;
        }
        setReservationsList(l=> l.filter(r=>r.id != id))

    }

    useEffect(() => {
        getReservationsList();
    }, [])

    if (loading) {
        return <LoadingFallback/>
    }

    return <section className="reservations-wrapper" >
        <h1 className="reservations-title">My reservations</h1>
        {reservationsList[0] === undefined
            ?
            <p>The is not reservations. <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/booking">Book a table</Link> or Check whether you are <Link style={{ textDecoration: "none", color: "#FFC700" }} to="/login">logged in</Link> account you booked table with.</p>
            :
            (<>
                {
                mediumWidth 
                    ? <div className="reservations-midv-container">
                            {
                                reservationsList.map(({ id, occasion, dateTimeUTC, guestsCount }) => {
                                    return (
                                        <Reservation mediumWidth={mediumWidth}  deleteReservation={deleteReservation} key={id} id={id} occasion={occasion} dateTimeUTC={dateTimeUTC} guestsCount={guestsCount} />
                                    )
                                }) 
                            }
                        </div>
                    :
                <table className="reservations-table">
                    <tbody>
                        {
                            reservationsList.map(({ id, occasion, dateTimeUTC, guestsCount }) => {
                                return (
                                    <Reservation mediumWidth={mediumWidth} deleteReservation={deleteReservation} key={id} id={id} occasion={occasion} dateTimeUTC={dateTimeUTC} guestsCount={guestsCount} />
                                )
                            })
                        }
                    </tbody>
                </table>
                }

                <p>See you soon!</p>
            </>)
        }
    </section>
}

export default Reservations;