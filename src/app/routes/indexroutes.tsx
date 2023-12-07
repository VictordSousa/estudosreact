import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" Component={Dashboard} />
                <Route path="/entrar" Component={Login} />

        
                <Route path="*" Component={() => <Navigate to="/pagina-inicial"/>} />

            </Switch>
        </BrowserRouter>
    );
}