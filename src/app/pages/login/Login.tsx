import { useState } from "react";
import { useNavigate } from "react-router-dom";


/*
    Jeito mais complexo de fazer a mesma coisa que fizemos no Dashboard, entretanto essa a forma mais utilizada.
    
export const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("pagina-inicial");
    };

    return (
        <div>
            <p>Login</p>
            <button onClick={handleClick}>Página inicial</button>
        </div>
    );
};



Agora vamos fazer um formulário de login
*/

export const Login = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    const  handleLogin = () =>{
        console.log(email)
        console.log(password)
    }

    return(
        <div>
            <form>


                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Password</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            

            </form>
        </div>
    );
}