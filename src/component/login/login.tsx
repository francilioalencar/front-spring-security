import { Input } from "../tags-html/input";
import './login.css'
import { Button } from "../tags-html/button";
import { request } from "https";
import HttpRequest from "../../http/reques";

import imgUser from '../../img/do-utilizador.png';
import { Label } from "../tags-html/label";
import Sucesso from "../tags-html/boxSucesso";
import { useState } from "react";


const Login=()=>{


    const [reponseLogin, setResponseLogin] = useState({'id': 0, 'name': '', 'token': ''})



    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handlleButton =async()=>{

        const req = new HttpRequest('user');

        const ilogin = {
            name: name,
            password: password
        }

        setResponseLogin(await req.post( ilogin ))
        

    };

    const handlleName=(value:string)=>{
        setName(value)

    }


    const handllePassword=(value:string)=>{
        setPassword(value)

    }

    return(

        
        
        
        <div className="col-30">
            <div className="col">
                <div className="imgBorda">
                    <img className="img" src={imgUser} />
                </div>

            </div>

            <div className="col">
                <Label>Usuário</Label>
                <Input 
                    name="name" 
                    onChange={event=>( handlleName( event.target.value ) )}
                />
            </div>

            <div className="col">
                <Label>Usuário</Label>
                <Input 
                    name="password" 
                    onChange={event=>( handllePassword( event.target.value ) )}
                />
            </div>


            <div className="col">
                <Button margin="8px auto" onClick={handlleButton} > Confirmar</Button>
            </div>

            <Sucesso background={reponseLogin.token.length > 5 ? '#BDB76B' : 'none'} >
                
                <span>{reponseLogin.token.length > 5 ? 'Login realizado com sucesso' : ''}</span>
                <span className="textoResponse">{reponseLogin.token}</span>

            </Sucesso>
        
        </div>

    );

}


export default Login;