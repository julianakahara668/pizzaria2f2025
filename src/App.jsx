import { useState } from "react";

function App(){

  const [nome, setNome] = useState("Memphis")

  //var mome = "Julia";

  const Formulario = () => {
    return (
      <div>
          <input
        className="nome"
        name = "nome"
        onChange={(e)=>{setNome=(e.target.value)}}
        placeholder="digite um nome..."
         type="text" />
        <button 
        className="botao"
        onClick={()=> {alert(nome)}}>
        CLIQUE AQUI 
        </button>
      </div>
    )
  }

  return (
    <div>
        <h3>Pizzaria 2F</h3>
        <Formulario/>
        <Formulario/>
        <Formulario/>
    </div>
  )
}

export default App
