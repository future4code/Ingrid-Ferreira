import React from 'react';

import {Container, Img, DadosH4, NovaDiv} from './EstiloCardGrande'

function CardGrande(props) {
    return (
        <Container>
            <Img src={ props.imagem } />
            <NovaDiv>
                <DadosH4>{ props.nome }</DadosH4>
                <p>{ props.descricao }</p>
            </NovaDiv>
        </Container>
    )
}

export default CardGrande;