import React from "react";
import GameListItem from "./GameListItem";
import DateSelector from "./DateSelector";

const styles = {
    container: {
        position: "relative",
        top: 0,
        left: 0,
        width: "400px",
        margin: "0 auto"
    }
};

const GameList = props => {
    return (
        <div style={styles.container}>
            <DateSelector date={props.date} onDateChange={props.onDateChange}/>

            {props.games.map((game) => {
                let homeTeam = game.home;
                let visitorTeam = game.visitor;

                return <GameListItem key={game.id} homeTeam={homeTeam} visitorTeam={visitorTeam} timer={game["period_time"]} />
            })}
        </div>
    );
};

export default GameList;