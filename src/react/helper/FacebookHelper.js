import config from "../../config";

exports.loginFacebook = (loggedIn) => {
    FB.init({
        appId: config.appID,
        xfbml: true,
        version: 'v2.9',
        status: true
    });

    FB.login((response) => {
        if (response.status === 'connected') {
            loggedIn(response);
        } else if (response.status === 'not_authorized') {
            console.log("the user is logged in to Facebook, but has not authenticated your app");
        } else {
            console.log("the user isn't logged in to Facebook.")
        }
    }, { scope: config.scope });
}