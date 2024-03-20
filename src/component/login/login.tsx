import { Input } from "../tags-html/input";
import './login.css'
import { Button } from "../tags-html/button";
import { request } from "https";
import HttpRequest from "../../http/reques";

const Login=()=>{



    const handlleButton =()=>{

        const req = new HttpRequest('user');

        const ilogin = {
            name: '',
            password: ''
        }

        console.log ( req.post( ilogin ) )

    };

    return(

        
        
        
        <div className="col-40">

            <div className="col">
                <label>Usuário</label>
                <Input />
            </div>

            <div className="col">
                <label>Usuário</label>
                <Input />
            </div>


            <div className="col">
                <Button margin="8px auto" onClick={handlleButton} > Confirmar</Button>
            </div>
        
        </div>

    );

}


export default Login;