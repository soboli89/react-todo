const Button = ({className, type="button", onClick, label }) =>{
    return(
        <button className={className} type={type} onClick={onClick}>{label}</button>
    );
};



export default Button;