import './Button.css'

const Button = ({children, bgColor="green", color='white', className}) => {
    return (
        <button className={`btn bg${bgColor} t${color} ${className}`}>
            {children}
        </button>
    );
};

export default Button;