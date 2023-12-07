import { Link } from "react-router-dom";


export const Dashboard = () => {
    return(
        <div>
            <p>Dashboard</p>
            
             {/* Forma mais facil de criar a navegação entre */}
            <Link to="/entrar">
                <button>
                    Entrar
                </button>
            </Link>
            
        </div>
    );
}