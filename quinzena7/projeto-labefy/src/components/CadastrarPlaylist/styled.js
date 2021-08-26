import styled from "styled-components"



export const ContainerCriaPlaylist = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 78px;

    h1 {
    margin-bottom: 50px;
    color: white;
    }



input {
    height: 40px;
    background:transparent;
    border: none;
    border-bottom: 1px solid white;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    color:white;
    font-size:35px;
    margin: auto;
    margin-top: 44px;
    width: 500px;
    :focus {
      outline: none;
    }
}

button {
    display:flex;
    margin: auto;
    margin-top: 40px;
    padding: 15px;
    width: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    flex-direction: column;
    border-radius:15px;
    border: 1px solid gray;
    height: 40px;
    background-image: linear-gradient(to left, gray, #0088cc, gray);
    color: white;
}

h1{
    color:whitesmoke;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
}
`
