import React from 'react';


import {ButtonContainer, Img} from './EstiloImagem'

function ImagemButton(props) {
    return (
        <ButtonContainer>
            <Img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtonContainer>

    )
}

export default ImagemButton;