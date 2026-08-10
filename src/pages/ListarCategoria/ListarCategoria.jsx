import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import ListarProdutos from "../ListarProdutos/ListarProdutos"
 
const ListarCategoria = () => {
 
    return (
        <div className="container">
 
            <MenuFuncionario />
 
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>Nome</th>
                             <th>Ações</th> {/* Nova coluna de Ações */}
                             <th>Descrição</th> {/* Nova coluna de Ações */}
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default ListarCategoria