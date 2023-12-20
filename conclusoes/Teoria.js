/*
  Redux funciona como um gerenciador de estados da aplicação 
  ele funciona atambem com outras tecnologias mas nesse contexto 
  eu vou usar ele com o react 

  FLUXO DE TRABALHO REDUX 
   Toda vez que um função e executada o componete libera uma ação,
   seja ela pra mudar a cor de um texto renderizar uma imagem,adicionar
   uma div enfim...
   
   toda vez que isso acontece essa ação e capturada pelo reducer que 
   que pega essa ação e armazena no store dele ao inves de deixar o 
   componente armazenar e gerenciar o porprio estado ele mesmo faz isso 
   tirando a carga do componete e unificando todo genecciamento de estado
   em uma logar só.Depois que ele recebe essa ação do reducer ele armazena
   ela e passa de volta para o react renderizar o componete agora com um novo 
   estado.  

   instalando o redux 

   npm install redux react-redux  --save

   No caso desse projeto dedicado ao reducer ate aqui eu tenho 3 arquivos 
   1 - frutas.actions.js (guarda as ações REMOVER_FRUTA E ADICIONAR FRUTA )
   2 - fruta.reducer.js (guarda o codigo das ações que o reducer vai executar e retornar como resultado)
   3 - frutas.js(guarad as constantes que eu vou usar por padrão toda vez que eu precisar de uma ação)

   eos arquivos das contantes que vão me ajudar a padronizar 
   o modo de chamar minhas ações em relação aos componentes   

   foi criado o arquivo index.js pra comebinar todos os reducers no caso da minha aplicação ela só tem 1 
   ,mas em aplicações mairores tem mais, o objetivo e combinar esses reducers atraves de uma funcção nativa do reducer.

   eu criei a pasta store e o arquivo store.js que vai receber o arquivo com os reducers do projeto 
   ele tem uma função que vai criar o store pra mim e como parametro ela recebe os reducers.
   
   redux e react são libs diferentes entaõ pra usar eu preciso integrar os dois para integrar 

   1 - tem que ir no aruivo index.js(raiz do projeto)
   2 - importar o compoente Provider e colocar o app dentro das tags del e apontar para o meu store 
   o codigo fica assim

------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//conectando o redux ao react
import { Provider } from 'react-redux';
import { store } from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store} >
     <App />
 </Provider>
   
 
);
------------------------------------------------------------------


agora pra usar o estado que esta dentro do fruta reducer eu tenho que usar 
o use selector e pegar direto pelo state isso so é possivel porque eu fiz a integração 
---------------------------------------------------------------------------
import React from "react";
import Fruta from './Fruta';
import AdicionaFruta from "./AdicionarFruta";
import { useSelector } from "react-redux";

const ListaFrutas =()=>{

    const frutas = useSelector(state => state.frutaReducers.frutas);

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
-------------------------------------------------------------------------------

   

   
   
   

   


*/