exports.urlParams = (locationObject) => {
    let queryString = locationObject.search.substring(1);
    let urlParams = {};
    if (queryString) {
        urlParams = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
    return urlParams;
}