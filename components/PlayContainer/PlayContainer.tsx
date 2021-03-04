import { PlayContainerStyles } from "./PlayContainerStyles"

export const PlayContainer = () => {
    return (
        <PlayContainerStyles>
        <div className="playSettings">
        <button className="backMusic">
            <img src="/previous.svg" alt="backMusic"/>
        </button>
        <button className="playButton">
            <img src="/play-button.svg" alt="backMusic"/>
        </button>
        <button className="nextMusic">
            <img src="/next.svg" alt="backMusic"/>
        </button>
        </div>
        </PlayContainerStyles>
    )
}