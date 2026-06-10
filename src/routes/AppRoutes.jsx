import {BrowserRouter,Routes,Route} from "react-router-dom"

import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProdutos from "../ListarProdutos/ListarProdutos"

const AppRoutes = () => {

    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomeFuncionario/>}
                
                />

                <Route
                path="/pizzaria/funcionario/home"
                element={<HomeFuncionario/>}
                />
                <Route
                    path="/pizzaria/funcionario/produto"
                    element={<ListarProdutos/>}
                
                />

            </Routes>


        </BrowserRouter> 
        </div>
    )
}

export default AppRoutes