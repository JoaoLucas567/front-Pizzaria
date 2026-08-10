import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
 
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProdutos from "../pages/ListarProdutos/ListarProdutos"
import ListarCategoria from "../pages/ListarCategoria/ListarCategoria"
 
// BrowserRouter: recarrega toda pagina
// HashRouter: reccarega somente onecessario das paginas
 
const AppRoutes = () =>{
 
    return (
     <HashRouter>
        <Routes>
         
           <Route
             path="/"
             element={<HomeFuncionario/>}
           />
            <Route
             path="/home"
             element={<HomeFuncionario/>}
           />
           <Route
             path="/produtos"
             element={<ListarProdutos/>}
           />
           <Route
             path="/categorias"
             element={<ListarCategoria/>}
           />
 
        </Routes>
     </HashRouter>
    )
}
 
export default AppRoutes
 