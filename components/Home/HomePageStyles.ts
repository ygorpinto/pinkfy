import styled from 'styled-components'

export const HomePageStyles = styled.div`

.signOut{
    display:flex;
    justify-content:space-around;
    background-color:${props=>props.theme.colors.secondBg};
    font-family: 'Poppins', sans-serif;
    color:white;

    button {
        background-color:${props=>props.theme.colors.primary};
        border:none;
        font-family: 'Poppins', sans-serif;
        font-size:0.8rem;
        color:white;
        border-radius:6px;
        width:5rem;
        cursor:pointer;
    }

    .user{
        width:18%;
        display:flex;
        justify-content:space-between;

        @media screen and (max-width:1000px){
        width:30%;
        }

        @media screen and (max-width:750px){
        width:50%;
        }
        @media screen and (max-width:400px){
        width:30%;
        }
    }

    img {
        max-width:30px;
        border-radius:50%;
    }

    @media screen and (max-width:450px){
        font-size:0.6rem;

        button {
            font-size:0.6rem;
        }
    }

    @media screen and (max-width:450px){
        font-size:0.5rem;

        button {
            width:3rem;
            font-size:0.5rem;
        }
    }
}

.signIn{
    height:100vh;
    width:100%;
    font-family: 'Poppins', sans-serif;
    font-size:3rem;
    font-weight:100;
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.theme.colors.background};

    p{
        text-align:center;
    }

    button{
        background-color:${props=>props.theme.colors.primary};
        border:none;
        font-family: 'Poppins', sans-serif;
        font-size:1.8rem;
        color:white;
        border-radius:6px;
        width:8rem;
        cursor:pointer;
    }

    h1{
        margin:0;
    }

    @media screen and (max-width:600px){
        font-size:1.8rem;
        
        button {
            font-size:1.2rem;
        }
    }
}
`