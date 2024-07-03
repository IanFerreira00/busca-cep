import { useState } from "react";

export default function BuscarCEP() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
            const data = await response.json()
            setEndereco(data)
        }catch(error){
            console.error(error)
        }
    }
    return (
        <div className="tudo">
            <h1>Buscar CEP</h1>
            <input 
            value={cep}
            type="text"
            placeholder="Digite o cep"
            onChange={(e) => setCep(e.target.value)}
            />
            <button className="boton-elegante" onClick={fetchData}>Buscar</button>

            {endereco && (
                <div className="card">
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>UF: {endereco.uf}</p>
                </div>
            )
            }
        </div>
    )
}
