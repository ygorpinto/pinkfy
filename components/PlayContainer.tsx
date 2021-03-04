import { PlayContainerStyles } from "./PlayContainerStyles"

export const PlayContainer = () => {
    return (
        <PlayContainerStyles>
        <div className="playSettings">
        <button className="backMusic"></button>
        <button className="playButton"></button>
        <button className="nextMusic"></button>
        </div>
        </PlayContainerStyles>
    )
}