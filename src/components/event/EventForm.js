import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "../game/GameProvider.js"



export const EventForm = () => {
    const history = useHistory()
    const {games, getGames} = useContext(GameContext)

    const [currentEvent, setCurrentEvent] = useState({
        location: ""
    })

    useEffect(() => {
        // Get all existing games from API
        getGames()
    }, [])

    const changeEventState = (DOMEvent) => {
        const newEventState = Object.assign({}, currentEvent);
        newEventState[DOMEvent.target.name] = DOMEvent.target.value;
        setCurrentEvent(newEventState);
    };

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={ changeEventState }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option></option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event


                    // Once event is created, redirect user to event list
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}