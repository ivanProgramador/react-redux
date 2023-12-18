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


*/