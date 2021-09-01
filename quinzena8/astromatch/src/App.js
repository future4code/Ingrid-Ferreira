import react from 'react'
import { container } from 'webpack';
import { ButtonMatch, ContainerHeader, ContainerApp, DivButton } from './styled';


function App() {
  const [startMatch, setInicialMatch] = useState(true);

  const onClickChance = () => {
    setInicialMatch(!startMatch)
  }

  return (

    <Body>
      <ContainerApp>
        <ContainerHeader>
          <DivButton>
            {startMatch ? <></> : <ButtonMatch src={matchIcon} onClickChance />}
          </DivButton> <Logo src={logo} />
          <DivButton>

          {startMatch ? <ButtonChat src={chatIcon} onClick={onClickChange} /> : <></>}
          </DivButton>
        </ContainerHeader>
          {startMatch ? <InitialMatch/> : <Matchs />}
      </ContainerApp>
    </Body>
  )

}

export default App;
