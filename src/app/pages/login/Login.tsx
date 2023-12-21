import { useCallback, useEffect, useRef, useState } from "react";
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
    /**
    useRef vai servir para armazenar um valor dentro dele sem precisar renderizar a página, podendo ser alterado dps
    Dentro do () eu vou dizer se quero começar com algum valor ali ou não
    Dentro da <> vou indicar um parametro de tipagem ao qual ele vai obedecer
    No caso abaixo ele está usando um referência para um Input HTML
     */
    const inputPassRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    /**
     useEffect controla quando o código será executado, pois ele ocorre quando renderizamos somente a página (uma vez)
     
     Como exemplos podemos utilizar isso quando vamos chamar uma API, pois se não utilizarmos,
     vamos chamar o backend toda vez q interagirmos com a página

     

    useEffect(() => {
        console.log(email)
        console.log(password)
    }, [email, password]);

    Outro método é o useMemo, ele vai ser utilizado para operalçoes mais complexas, pra salvar na menória
    

    ----


    useCallback serve para controlar funções que serão executando, como o exemplo do login abaixo
    ele vai armazernar a função na memória

    useRef vai servir para armazenar um valor dentro dele sem precisar renderizar a página, podendo ser alterado dps
    Muito utilizado 
    */

    const  handleLogin =useCallback(() =>{
        console.log(email)
        console.log(password)
    }, [email, password]);

    return(
        <div>
            <form>

                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' ? inputPassRef.current?.focus() : undefined}/>
                </label>
                
                <br />
                <br />

                <label>
                    <span>Password</span>
                    <input type="password" value={password} ref={inputPassRef} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            

            </form>
        </div>
    );
}