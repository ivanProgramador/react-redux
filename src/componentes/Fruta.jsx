import React from "react";
import { actions } from "../Actions/frutas.action";
import { useDispatch } from "react-redux";

const Fruta = ({fruta}) =>{
    
        const dispatch = useDispatch();

       
    
    return(
        
        <div>
            <ul>
                <li>
                    <strong>Fruta:</strong>{fruta.nome}
                </li>
                <li>
                    <strong>Quantidade:</strong>{fruta.quantidade}
                </li>
            </ul>
            <button onClick={() => dispatch(actions.remover(fruta))} >Remover</button>
        </div>
    )
}

export default Fruta
