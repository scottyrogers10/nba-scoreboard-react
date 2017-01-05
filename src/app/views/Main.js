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
        height: "100%"
    }
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    getGamesTodayAsync() {
        let today = new Date().toString("yyyyMMdd");
        let proxy = "https://crossorigin.me/";
        let scoreboardUrl = "http://data.nba.com/data/5s/json/cms/noseason/scoreboard/" + today + "/games.json";

        return axios.get(proxy + scoreboardUrl).then((result) => {
            let games = result.data["sports_content"]["games"]["game"];
            console.log(games);
            this.setState({
                games: games
            });
        }).catch((error) => {
            //TODO: Error Handling
            console.log(error);
        });
    }

    componentDidMount() {
        this.getGamesTodayAsync();
    }

    render() {
        return (
            <div style={styles.container}>
                <GameList games={this.state.games} />
            </div>
        );
    }
}

export default Main;