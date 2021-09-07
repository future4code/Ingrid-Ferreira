import React, { useEffect, useState } from "react";
import axios from "axios";
import {DivCaixa} from "./styled"

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() =>{
        setPokemon(props.pokemon);
    }, []);

    useEffect (() => {
        pegaPokemon(props.pokemon);
    }, [props.pokemon]);

const pegaPokemon = (pokeName) => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) =>{
        setPokemon(response.data);
    })
    .catch((err)=> {
        console.log(err);
    });
};
const currentPokemon = pokemon;

return (
    <DivCaixa>
    <p>{currentPokemon.name}</p>
    <p>{currentPokemon.weight} Kg</p>
    {currentPokemon.types && <p>{currentPokemon.types[0].type.name}</p>}
    {currentPokemon.sprites && (
      <img
        src={currentPokemon.sprites.front_default}
        alt={currentPokemon.name}
      />
    )}
  </DivCaixa>
);
};

export default PokeCard;