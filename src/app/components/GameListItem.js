import React from "react";
import TeamLogo from "./TeamLogo";
import Score from "./Score";

let styles = {
    container: {
        position: "relative",
        height: "100px",
        width: "400px",
        backgroundColor: "#f2f2f2",
        borderRadius: "4px",
        margin: "8px 0"
    },
    homeContainer: {
        position: "absolute",
        left: 0,
        width: "30%",
        height: "100%"
    },
    timerContainer: {
        position: "absolute",
        left: "30%",
        width: "40%",
        height: "100%"
    },
    visitorContainer: {
        position: "absolute",
        left: "70%",
        width: "30%",
        height: "100%"
    }
};

const GameListItem = props => {
    let homeTeam = props.homeTeam;
    let visitorTeam = props.visitorTeam;
    let timer = props.timer;

    return (
        <div style={styles.container}>
            <div style={styles.homeContainer}>
                <TeamLogo team={homeTeam} />
            </div>
            <div style={styles.timerContainer}>
                <Score homeTeam={homeTeam} visitorTeam={visitorTeam} timer={timer}/>
            </div>
            <div style={styles.visitorContainer}>
                <TeamLogo team={visitorTeam}/>
            </div>
        </div>
    );
};

export default GameListItem;