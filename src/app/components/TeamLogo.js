import React from "react";

const styles = {
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: "center"
    },
    logo: {
        paddingTop: "17px",
        height: "50px",
        width: "50px",
    },
    abbreviation: {
        color: "#757575",
        fontSize: "13px"
    }
};

const TeamLogo = props => {
    let team = props.team;

    return (
        <div style={styles.container}>
            <img style={styles.logo} src={require("../assets/img/" + team["team_key"] + ".svg")} alt={team.nickname}/>
            <div style={styles.abbreviation}>{team.abbreviation}</div>
        </div>
    );
};

export default TeamLogo;