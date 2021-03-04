import { ContainerStyles } from "./ContainerStyles"
import { PlayContainer } from "../PlayContainer/PlayContainer"

export const Container = () => {
    return (
        <ContainerStyles>
            <div className="appContainer">
                <div className="HeaderApp">
                <h1>Pink Fy.</h1>
                <input 
                placeholder="Digite o nome da musica"
                type="text"/>
                </div>
                <div className="musicContainer">
                   <PlayContainer/>
                </div>
            </div>
        </ContainerStyles>
    )
}