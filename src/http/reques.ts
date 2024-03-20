import { METHODS } from "http";
import ILogin from "../component/login/login-interface";
import { environment } from '../env.dev'; // Ou env.prod se estiver em produção
import { wait } from "@testing-library/user-event/dist/utils";

 class HttpRequest {
 
 
    
    
    constructor( 
        private endPont: string){

       

    }



    async post(dados: ILogin): Promise<any> {
        try {
          const response = await fetch(`${environment.api}/${this.endPont}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
          });
      
          // Verifica se a requisição foi bem sucedida
          if (!response.ok) {
            return {
                'id': 0,
                'name': 'Não foi possivel gerar o Token',
                'token': ''
            }
          }
      
          // Retorna os dados JSON da resposta
          return response.json();
        } catch (error) {
          console.log('Erro ao obter Promise: ', error);
          // Decide o que fazer com o erro, você pode relançá-lo se quiser
          throw error;
        }
      }


}

export default HttpRequest;
