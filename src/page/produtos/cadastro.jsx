import './produtos.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

const CadastroProduto = () => {
    // estado para guardar dados
    const [dados, setDados] = useState ({})

    const montaJson = () => {
    setDados({
        "nome":nome.value,
        "tipo":tipo.value,
        "precovenda":preconnect.value,
        "descricao":decricao.value,
        "categoria_id":categoria_id.value
        })
        alert(JSON.stringify(dados))
    }


    return (
        <div className='CadastroProduto'>
            <input type= "text" placeholder='0' id="id" disabled/>
            <input type= "text" placeholder='nome do produto' id="nome" />
            <input type= "text" placeholder='descrição' id="descricao" />
            <input type= "text" placeholder='0.00' id="preco" />
            <input type= "text" placeholder='tipo do produto' id="tipo" />
            <input type= "text" placeholder='1' id= "categoria_id" disable/>

            <input type="button" value= {"Cadastrar"}
                onClick={()=> {montaJson()}} />
            
        </div>

    )
}

export default CadastroProduto