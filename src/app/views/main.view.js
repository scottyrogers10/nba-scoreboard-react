import React, { Component } from "react";
import axios from "axios";
import "datejs";

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
            <div>
                {this.state.games.map((game) => {
                    let homeTeam = game.home.nickname;
                    let awayTeam = game.visitor.nickname;
                    return <div key={game.id}>{homeTeam} vs {awayTeam}</div>
                })}
            </div>
        );
    }
}

export default Main;