import { Link } from "react-router-dom";
import Button from "../Button";

const Confirmed = () => {
    return (
        <section style={{height: '90vh'}}>
            <h1 style={{marginBottom:'20px'}}>Your reservation is confirmed!</h1>
            <Link to='/'><Button>Go to homepage</Button></Link>
        </section>
    );
};

export default Confirmed;