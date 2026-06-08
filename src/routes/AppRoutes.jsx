import {
    BrowserRouter,
    Router,
    Route,
    Routes

} from "react-router-dom"

import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProdutos from "../ListarProdutos/ListarProdutos"

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomeFuncionario/>}
                
                />
                <Route
                    path="/pizzaria/funcionario/produto"
                    element={<ListarProduto/>}
                
                />

            </Routes>


        </BrowserRouter>  
    )
}

export default AppRoutes