import React from "react";
import Fruta from './Fruta';
import AdicionaFruta from "./AdicionarFruta";

const ListaFrutas =()=>{


const frutas = [
    {id:1, nome:'Abacaxi', quantidade:5},
    {id:2, nome:'Maçã', quantidade:12}
]

return(
    <>
     <h1>Lista de Frutas</h1>
     <AdicionaFruta/>
     {frutas.map(fruta =>(
        <Fruta key={fruta.id} fruta={fruta}/>
     ))}
    </>
)

}


export default ListaFrutas