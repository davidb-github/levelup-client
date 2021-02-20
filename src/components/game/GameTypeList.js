import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameTypeList = () => {
    const { gameTypes, getGameTypes } = useContext(GameContext)

    useEffect(() => {
        getGameTypes()
    }, [])

    return (
        <article className="gamesTypes">
            {
                gameTypes.map(gameType => {
                    return <section key={`gameType--${gameType.id}`} className="gameType">
                        <div className="gameType__label">{gameType.label} </div>
                    </section>
                })
            }
        </article>
    )
}