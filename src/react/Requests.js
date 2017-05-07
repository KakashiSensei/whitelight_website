import config from "../config";
import fetch from 'isomorphic-fetch';

exports.getAllGames = () => {
    let url = config.domainName + '/api/game';
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getGame = (gameID) => {
    let url = config.domainName + '/api/game/' + gameID;
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getGameResult = (userID, accessToken, gameID) => {
    let url = config.domainName + "/api/game/" + gameID;
    console.log("Image URL", url);
    let data = { userid: userID, token: accessToken, questionID: gameID };
    console.log(data);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            let resJson = res.json();
            return resJson;
        })
}
