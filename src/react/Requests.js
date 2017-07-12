import config from "../config";
import fetch from 'isomorphic-fetch';

exports.getAllGames = () => {
    let url = config.domainName + '/api/game';
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getAllVideos = () => {
    let url = config.domainName + '/api/video';
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getGame = (gameID) => {
    let url = config.domainName + '/api/game/' + gameID;
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getRecommendedGames = (gameID) => {
    let url = config.domainName + '/api/recommendedGames/' + gameID;
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getGameResult = (userID, accessToken, gameID) => {
    let url = config.domainName + "/api/game/" + gameID;
    let data = { userid: userID, token: accessToken, questionID: gameID };
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
}

exports.getTransaction = (transactionID) => {
    let url = config.domainName + "/api/transaction/" + transactionID;
    return fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
}

exports.getVideoDetails = (videoID) => {
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyB7Zk1X9GB5MdxnRSxVWmdv3MwSbHU9RHA`;
    console.log(url);
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

