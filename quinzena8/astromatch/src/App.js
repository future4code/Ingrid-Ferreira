import React, {useState} from "react";
import { PaginaInicial } from "./pages/PaginaInicial/PaginaInicial";
import {PaginaMatches} from "./pages/PaginaMatches/PaginaMatches";

const App = () => {

  const [currentPage, setCurrentPage] = useState("index")

  const mudarPagina = () => {
      if (currentPage === "index") {
          setCurrentPage("matches")
      } else {
          setCurrentPage("index")
      }
  }

  const limparMatches = () => {
      console.log("Limpar Matches")
  }

  return(

    <div>
    {currentPage === "index" ? <PaginaInicial /> : <PaginaMatches />}    
    <button onClick={mudarPagina}>{currentPage==="index" ? "Matches" : "Home"}</button>
    <button onClick={limparMatches}>Limpar Matches</button>
    </div>
  )

}

export default App