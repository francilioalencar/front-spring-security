
import styled from "styled-components";


interface ProposButton{

    margin?: string | '0px'

}



export const Button = styled.button<ProposButton>`

    
    width: 50%;
    border-radius: 8px;
    padding:8px;
    font-family: 'Times'
    font-size: 12pt;
    margin:${propps=> propps.margin || 'auto'};

`;