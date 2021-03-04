import styled from 'styled-components'

export const ContainerStyles = styled.div`
display:flex;
flex-direction:column;
height:100vh;
align-items:center;
justify-content:center;
background-color:${props=>props.theme.colors.background};

.appContainer {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:${props=>props.theme.colors.primary};
    height:60vh;
    width:16rem;
    border-radius:1rem;
    box-shadow:3px 3px rgba(0,0,0,0.15)
}

.HeaderApp {

    width:100%;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

.HeaderApp input {
    margin:0.5rem 0 1.2rem 0;
    border-radius:0.5rem;
    border:none;
    height:1.8rem;
    width:80%;
    background:${props=>props.theme.colors.background};
    ::placeholder {
        text-align:center;
    }
}

.HeaderApp h1 {
    margin:0;
    font-family: 'Poppins', sans-serif;
    font-size:3.4rem;
    font-weight:100;
    letter-spacing:4px;
    color:${props=>props.theme.colors.background}
}

.musicContainer {
    margin-bottom:1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    height:60%;
    width:80%;

    background:${props=>props.theme.colors.background}
}

`