import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import { useEffect, useState } from "react";
import api from "../../services/api"
const ListarProdutos = () => {
 
const [produtos, setProdutos] = useState([])

// useEffect: é um hook do React que serve para executar códigos que ficam fora do controle direto da renderização
// visual, os chamados "efeitos colaterais"
// Exemplo: buscar dados de uma API, configurar cronometros, fazer algo quando o usuário aperta uma tecla,
//aplicar o Modo Escuro na página
// Em nossa página, vamos utilizar para acessar a API-BACK END e carregar nossa tabela de produtos toda vez
//que a página for carregada.

useEffect(()=>{

    api
        .get("/produtos")
        .then((response)=>{
            // deu certo : )
            console.log(response.data.data)
            setProdutos(response.data.data)
        })
        .catch((error)=>{
            // deu ruim :(
            console.error("Erro ao buscar a lista de produtos. ", error)
         })

},[])
      const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza Margherita",
            preco: 25.90,
            descricao: "A pizza marguerita tradicional leva massa de pizza, molho de tomate, mussarela, folhas de manjericão e azeite de oliva."
        },
        {
            id: 2,
            nome: "Pizza Pepperoni",
            preco: 28.90,
            descricao: "Massa de pizza, molho de tomate, pepporini, queijo, cogumelos e pimentões."
        },

        {
            id: 3,
            nome: "Pizza Portuguesa", 
            preco: 30.00,
            descricao: "Massa de pizza, presunto, ovo, cebola, ervilha, azeitona e queijo."
        },

         {
            id: 4,
            nome: "Pizza Quatro queijos",
            preco: 30.00,
            descricao: "Massa de pizza, combinação de muçarela, parmesão, gorgonzola e provolone, às vezes"
        },

        {
            id: 5,
            nome: "Napolitana",
            preco: 29.00,
            descricao: "Massa de pizza, molho de tomate, queijo, presunto e orégano"
        },
    ];
 
    return (
        <div className="container">
 
            <MenuFuncionario />
 
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th> {/* Nova coluna de Ações */}
                        </tr>
                    </thead>
                    <tbody>
 
 
                        {produtos.map((produto) => (
 
                            <tr key={produto.id}>
                                <td style={{ fontSize: "13px" }}> {produto.nome}</td>
                                <td style={{ fontSize: "13px" }}>
                                    {
                                        new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(produto.precoVenda)
                                    }
                                </td>
                                <td style={{ fontSize: "13px" }}> {produto.descricao} </td>
                                <td className="text-center fs-6" style={{ width: "100px" }}>
                                    {/* Botão de Editar */}
                                    <button
                                        className="btn btn-sm btn-primary me-2">
                                        <i className="fas fa-pencil-alt"></i>{" "}
                                        {/* Ícone de editar */}
                                    </button>
 
                                    {/* Botão de Excluir */}
                                    <button
                                        className="btn btn-sm btn-danger">
                                        <i className="fas fa-trash-alt"></i>{" "}
                                        {/* Ícone de excluir */}
                                    </button>
                                </td>
                            </tr>
                        ))}
 
 
 
                    </tbody>
                </table>
            </div>
        </div>
    )
}
 
export default ListarProdutos   