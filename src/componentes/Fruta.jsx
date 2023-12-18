import React from "react";

const Fruta = ({fruta}) =>{
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
            <button onClick={()=> alert(fruta.id)} >Remover</button>
        </div>
    )
}

export default Fruta
