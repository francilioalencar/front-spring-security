import { METHODS } from "http";
import ILogin from "../component/login/login-interface";
import { environment } from '../env.dev'; // Ou env.prod se estiver em produção

 class HttpRequest {
 
 
    
    
    constructor( 
        private endPont: string){

       

    }



    public post( dados: ILogin ) :string{


        const reponse = fetch( `${environment.api}/${this.endPont}` ,
                {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'text/json',

                    },
                    body: JSON.stringify(dados)
                },
                
            
            )

            console.log(`${environment.api}/${this.endPont}`);
    return JSON.stringify(dados);



    }


}

export default HttpRequest;
