import config from "../config";
import fetch from 'isomorphic-fetch';

exports.getAllGames = (perPage, pageNumber) => {
    let url = config.domainName + '/api/website/game';
    url = `${url}?pp=${perPage}&pn=${pageNumber}`;
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getAllVideos = (perPage, pageNumber) => {
    let url = config.domainName + '/api/website/video';
    url = `${url}?pp=${perPage}&pn=${pageNumber}`;
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getGame = (gameID) => {
    let url = config.domainName + '/api/website/game/' + gameID;
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.getRecommendedGames = (gameID, num) => {
    let url = config.domainName + '/api/recommendedGames/' + gameID + '?num=' + num;
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
    return fetch(url, { method: 'GET' })
        .then(res => res.json())
}

exports.scarpImage = (url) => {
    let scrapURL = `https://developers.facebook.com/tools/debug/sharing/?q=${url}`
    return fetch(scrapURL, { method: 'GET' })
        .then(res => res.json())
}

