    import CredentialUser from "../../componentes/CredentialUser"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"

const HomeFuncionario = () => {
 
    return (
        <div className="container">
                <MenuFuncionario/>
                <CredentialUser title="Home page Funcionário"/>

                <p>Home Funcionário</p>
        </div>
    )
}

export default HomeFuncionario