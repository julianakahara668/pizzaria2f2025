import axios from "axios"

const Produtos =() => {
// Consumo do endpoint com as pizzas 
axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
.then(response=>{
    console.log(response.data)
    
}

)
// Interação da lista de pizzas 

const listaPizzas = pizzas.map(pizzas=><li>{pizza}</li>)
    return (
        <div>
            <ul>
                <li>Pizza de Muçarela</li>
                <li>Pizza de calabresa</li>
                <li>Pizza Portuguesa</li>
                <li>Pizza Baiana</li>
            </ul>
        </div>
    )
}

export default Produtos