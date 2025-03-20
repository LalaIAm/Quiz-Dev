import './Button.scss';


const Button = ({ children, ...rest }) => {
    return (
        <button className='button' {...rest}>
            <b className='button-text'>{ children }</b>
        </button>
    )
}


export default Button;