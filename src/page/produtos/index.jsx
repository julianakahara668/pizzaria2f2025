const Produtos =() => {
//Objeto com a lista de pizzas
const pizzas =[
    'Pizza de Muçarela',
    'pizza de Calabresa',
    'Pizza Baiana', 'Pizza Quatro Queijo '
]
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