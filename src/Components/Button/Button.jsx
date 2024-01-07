import './Button.css'

const Button = ({children, bgColor="green", color='white'}) => {
    console.log(`btn bg${bgColor} t${color}`)
    return (
        <button className={`btn bg${bgColor} t${color}`}>
            {children}
        </button>
    );
};

export default Button;