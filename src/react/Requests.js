import config from "../config";
import fetch from 'isomorphic-fetch';

exports.getAllGames = () => {
    let url = config.domainName + '/api/game';
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getGame = (gameID) => {
    let url = config.domainName + '/api/game/' + gameID;
    return fetch(url, {method: 'GET'})
        .then(res => res.json())
}