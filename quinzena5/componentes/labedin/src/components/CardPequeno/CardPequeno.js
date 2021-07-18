import React from 'react';
import {DivCardPequeno, Img} from './EstiloCardPequeno'

function CardPequeno(props) {
    return (
        <DivCardPequeno>
            <Img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </DivCardPequeno>
    )
}

export default CardPequeno;