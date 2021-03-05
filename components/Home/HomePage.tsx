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
    <HomePageStyles>
    <div className="signOut">
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
      </div>
      <ThemeProvider theme={light}>
        <GlobalStyles/>
        <Container/>
    </ThemeProvider>
    </HomePageStyles>
    </>
  }
  return <>
    <HomePageStyles>
    <div className="signIn">
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
    </div>
    </HomePageStyles>
  </>
}