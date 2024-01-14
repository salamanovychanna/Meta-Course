import './Button.css'

const Button = ({children, bgColor="green", color='white', className, type}) => {
    return (
        <button type={type} className={`btn bg${bgColor} t${color} ${className}`}>
            {children}
        </button>
    );
};

export default Button;