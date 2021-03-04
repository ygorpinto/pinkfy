import styled from 'styled-components'

export const PlayContainerStyles = styled.div`
.playSettings {
    margin-top:100%;
    border:none;
    width:10rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.backMusic {
    border:none;
    width:1.8rem;
    height:1.8rem;
    background:${props=>props.theme.colors.secondary};
    border-radius:50%;
    box-shadow:1px 1px rgba(0,0,0,0.5);
}

.nextMusic {
    border:none;
    width:1.8rem;
    height:1.8rem;
    background:${props=>props.theme.colors.secondary};
    border-radius:50%;
    box-shadow:1px 1px rgba(0,0,0,0.5);
}

.playButton {
    border:none;
    width:3rem;
    height:3rem;
    background:${props=>props.theme.colors.secondary};
    border-radius:50%;
    box-shadow:1px 1px rgba(0,0,0,0.5);
}
`