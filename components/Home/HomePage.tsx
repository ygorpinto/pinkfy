import { useSession, signIn, signOut } from 'next-auth/client'
import { ThemeProvider } from "styled-components";
import { Container } from "../Container/Container";
import { GlobalStyles } from "../../styles/global";
import light from '../../styles/lightTheme'
import { HomePageStyles } from './HomePageStyles';

export const HomePage = () => {

const [ session, loading ] = useSession()
  if(session) {
    return <>
    <GlobalStyles/>
    <ThemeProvider theme={light}>
    <HomePageStyles>
    <div className="signOut">
      <div className="user">
      Signed in as {session.user.name} <br/>
      <img src={session.user.image}></img>
      </div>
      <button onClick={() => signOut()}>Sign out</button>
      </div>
        <Container/>
    </HomePageStyles>
    </ThemeProvider>
    </>
  }
  return <>
  <GlobalStyles/>
    <ThemeProvider theme={light}>
    <HomePageStyles>
    <div className="signIn">
      <h1>Pinkfy.</h1>
    <p>Entre com sua conta Spotify</p>
    <button onClick={() => signIn()}>Entrar</button>
    </div>
    </HomePageStyles>
    </ThemeProvider>
  </>
}