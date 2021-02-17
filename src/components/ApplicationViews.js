// import React from "react"
// import { Route } from "react-router-dom"

// export const ApplicationViews = () => {
//     return <>
//         <main style={{
//             margin: "5rem 2rem",
//             backgroundColor: "lightgoldenrodyellow"
//         }}>
//             Application views
//         </main>
//     </>
// }
import React from "react";
import { Route } from "react-router-dom";
import { GameList } from "./game/GameList.js";
import { GameProvider } from "./game/GameProvider.js";
import { EventProvider } from "./game/EventProvider.js";
import { EventList } from "./game/EventList.js";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <GameProvider>
          <EventProvider>
            <Route exact path="/games">
              <GameList />
            </Route>
            <Route exact path="/events">
              <EventList />
            </Route>
          </EventProvider>
        </GameProvider>
      </main>
    </>
  );
};
