import './Button.css'

const Button = ({children,w100=false,  bgColor="green", color='white', className, type}) => {
    return (
        <button type={type} className={`btn bg${bgColor} t${color} ${className} ${w100 ? 'button-max-width' : ''}`}>
            {children}
        </button>
    );
};

export default Button;