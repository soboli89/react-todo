const Button = ({type="button", onClick, label }) =>{
    return(
        <button type={type} onClick={onClick}>{label}</button>
    );
};



export default Button;