import React from "react";

const styles = {
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    homeScore: {
        position: "absolute",
        left: 0,
        width: "30%",
        height: "100%",
        textAlign: "center",
        paddingTop: "50px",
        fontSize: "20px"
    },
    timer: {
        position: "absolute",
        left: "30%",
        width: "40%",
        height: "100%",
        textAlign: "center",
        color: "#c62828",
        paddingTop: "16px"
    },
    visitorScore: {
        position: "absolute",
        left: "70%",
        width: "30%",
        height: "100%",
        textAlign: "center",
        paddingTop: "50px",
        fontSize: "20px"
    },
    clock: {
        paddingTop: "5px",
        fontSize: "14px"
    }
}

const Score = props => {
    let homeTeam = props.homeTeam;
    let visitorTeam = props.visitorTeam;
    let timer = props.timer;

    return (
        <div style={styles.container}>
            <div style={styles.homeScore}>{homeTeam.score}</div>
            <div style={styles.timer}>
                <div>{timer["period_status"]}</div>
                <div style={styles.clock}>{timer["game_clock"]}</div>
            </div>
            <div style={styles.visitorScore}>{visitorTeam.score}</div>
        </div>
    );
};

export default Score;