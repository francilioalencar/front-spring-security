import styled from "styled-components";

interface PropsSucesso{

    background ?: string | '';

}

const Sucesso = styled.div<PropsSucesso>`
overflow: hidden;
width: '95%';
border: '1px solid #ccc';
border-radius: 8px;
padding: 8px;
border-radius: '8px';
margin: '12px auto';
background: ${props=>props.background || 'none'};

`

export default Sucesso;