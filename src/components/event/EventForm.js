import { createEvent } from "@testing-library/react"
import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "../game/GameProvider.js"
import { EventContext } from "../event/EventProvider.js"



export const EventForm = () => {
    const history           = useHistory()
    const {games, getGames} = useContext(GameContext)
    const { createEvent}    = useContext(EventContext)
    const [currentEvent, setCurrentEvent] = useState({
        location: "",
        eventTime: "",
        schedulerId: 0,
        gameId: 0
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
                                <option 
                                key= {game.id} 
                                value= {game.id}>
                                {game.title}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventTime">Event Date/Time </label>
                    <input type="datetime-local" name="eventTime" required autoFocus className="form-control"
                        value={currentEvent.eventTime}
                        onChange={changeEventState}>

                    </input>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event
                    const userEvent = {
                        gameId: parseInt(currentEvent.gameId),
                        eventTime: currentEvent.eventTime
                    }
                    console.log("currentEvent: ", currentEvent.gameId)

                    // Once event is created, redirect user to event list
                    createEvent(userEvent)
                    .then(() => history.push("/events"))

                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}