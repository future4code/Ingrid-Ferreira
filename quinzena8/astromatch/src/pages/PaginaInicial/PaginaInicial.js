import React, {useState, useEffect} from "react";
import axios from "axios";
import { PaginaMatches } from "../PaginaMatches/PaginaMatches.js";
import { Container, Perfil, ImgPerfil } from "./Estilo.js";


export const PaginaInicial = () => {

   const [profile, setProfile] = useState({})

   const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ingrid-ferreira-johnson/person"
  
    useEffect(() => {
        pergarPerfil()
    }, [])

    const onClickCurtir = (like, profileId) => {
        escolherPessoa(profileId, like);
    }

    const onClickeDescurtir = (like, profileId) => {
        if(profileId){
            escolherPessoa(profileId, like)
        }
    }
    
  
  
   const pergarPerfil =() => {
       axios.get(url)

       .then((res) => {
        setProfile(res.data.profile)
       })
       .catch((e) => {
           console.log(e.response)
       })
   }
  
   const escolherPessoa = async (idPerson, like) => {
    const body = {
        "id": `${idPerson}`,
        "escolha": like
    }
    try {
        const resposta = await axios.post(url, body)
        console.log(like)
        console.log(idPerson)
        pergarPerfil()
    }catch(e) {
        console.log(e.response)
    }
   }
   
   
    return (
        <Container>
            <Perfil>
            <ImgPerfil src={profile.photo}/>
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>

            <div>
                <button onClickCurtir={onClickCurtir}>❎</button>
                <button onClickeDescurtir={onClickeDescurtir}>❤</button>
            </div>
            </Perfil>
        </Container>

       
    )
}
   
