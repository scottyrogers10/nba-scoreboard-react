import React, { Component } from "react";
import axios from "axios";
import "datejs";
import GameList from "../components/GameList";

const styles = {
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflowY: "scroll"
    }
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            date: new Date()
        };

        this.onDateChange = this.onDateChange.bind(this);
    }

    getGamesAsync(date) {
        let currentDate = date.toString("yyyyMMdd");
        let proxy = "http://127.0.0.1:3005/proxy";
        let scoreboardUrl = "http://data.nba.com/data/5s/json/cms/noseason/scoreboard/" + currentDate + "/games.json";

        return axios.get(proxy + "?url=" + scoreboardUrl).then((result) => {
            let games = result.data["sports_content"]["games"]["game"];
            console.log(games);
            this.setState({
                games: games,
                date: date
            });
        }).catch((error) => {
            //TODO: Error Handling
            console.log(error);
        });
    }

    onDateChange(changeValue) {
        let newDate = this.state.date.add({days: changeValue});
        this.getGamesAsync(newDate);
    }

    componentDidMount() {
        this.getGamesAsync(this.state.date);
    }

    render() {
        return (
            <div style={styles.container}>
                <GameList games={this.state.games} date={this.state.date} onDateChange={this.onDateChange}/>
            </div>
        );
    }
}

export default Main;