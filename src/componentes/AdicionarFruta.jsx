import React, { useState } from "react";
//IMPORTANDO O DISPARADOR
import { useDispatch } from "react-redux";
//IMPORATANDO AS AÇÕES
import { actions } from "../Actions/frutas.action";

const AdicionaFruta = ()=>{

    const [nome,setNome] = useState('')
    const [quantidade,setQuantidade] = useState('')
    const dispatch = useDispatch();

    const AdicionarFruta = event =>{
        event.preventDefault();

        const fruta ={
            id: new Date(),
            nome,
            quantidade
        };
        //A aqui e função dispacth recebe as ações 
        // dentro das ações esta a função adicionar 
        //e a função adiconar recebe a fruta como parametro 
        dispatch(actions.adicionar(fruta));

    };

    return( <form onSubmit={AdicionarFruta}>

             <input
               type="text"
               name={nome}
               placeholder="Fruta"
               required
               onChange={event => setNome(event.target.value)}
             />

             <input
               type="number"
               name={quantidade}
               placeholder="Quatidade"
               required
               onChange={event => setQuantidade(event.target.value)}
             />

             <button type="submit">Adicionar</button>
                 
           </form>
    );  
};

export default AdicionaFruta