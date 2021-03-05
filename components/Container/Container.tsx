import { ContainerStyles } from "./ContainerStyles"
import { PlayContainer } from "../PlayContainer/PlayContainer"
import { useState } from "react"

export const Container = () => {
    
    const [search, setSearch] = useState("");
    
    return (
        <ContainerStyles>
            <div className="appContainer">
                <div className="HeaderApp">
                <h1>Pink Fy.</h1>
                <input 
                value={search}
                onChange={e=>setSearch(e.target.value)}
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