import { ThemeProvider } from "styled-components";
import { Container } from "../components/Container";
import { GlobalStyles } from "../styles/global";
import light from '../styles/lightTheme'

export default function Home() {
  return (
    <>
    <ThemeProvider theme={light}>
    <GlobalStyles/>
    <Container/>
    </ThemeProvider>
    </>
  )
}
